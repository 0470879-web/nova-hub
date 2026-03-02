// Admin Panel JavaScript - Uses server API
document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.getElementById('login-screen');
    const adminDashboard = document.getElementById('admin-dashboard');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    const refreshStatsBtn = document.getElementById('refresh-stats');
    const saveGaIdBtn = document.getElementById('save-ga-id');
    const changePasswordForm = document.getElementById('change-password-form');
    
    // Only set up refresh stats handler if the element exists
    if (refreshStatsBtn) {
        refreshStatsBtn.addEventListener('click', () => {
            loadAnalytics();
            loadFormsData();
        });
    }
    
    // Only set up GA ID handler if the element exists
    if (saveGaIdBtn) {
        saveGaIdBtn.addEventListener('click', async () => {
            const gaId = document.getElementById('ga-measurement-id').value;
            const statusDiv = document.getElementById('ga-status');
            
            statusDiv.textContent = '';
            statusDiv.style.display = 'none';

            try {
                await apiRequest('/api/admin/save-ga-id', {
                    method: 'POST',
                    body: JSON.stringify({ gaId })
                });
            
            statusDiv.textContent = 'Google Analytics ID saved successfully.';
            statusDiv.style.color = '#00ff00';
            statusDiv.style.display = 'block';
                
                // Refresh analytics after saving
                setTimeout(() => {
                    loadAnalytics();
                }, 1000);
            } catch (error) {
                statusDiv.textContent = error.message || 'Failed to save GA ID.';
                statusDiv.style.color = '#ff0000';
                statusDiv.style.display = 'block';
            }
        });
    }

    // Get stored token
    function getToken() {
        return localStorage.getItem('nova_admin_token');
    }

    // Store token
    function setToken(token) {
        localStorage.setItem('nova_admin_token', token);
    }

    // Remove token
    function removeToken() {
        localStorage.removeItem('nova_admin_token');
    }

    // Make authenticated API request
    async function apiRequest(url, options = {}) {
        const token = getToken();
        if (!token) {

    				let allowLocalAccess = false;

    				if (isLocalDev()) {
        				const answer = prompt(
            				'You are testing locally. Type YES to access this page.'
        				);

        				allowLocalAccess = answer && answer.toLowerCase() === "yes";
    				}

    				if (!allowLocalAccess) {
        			throw new Error('Not authenticated');
                    return
    			}
            showLogin();
		}

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...options.headers
        };

        const response = await fetch(url, {
            ...options,
            headers
        });

        if (response.status === 401) {
            // Token expired or invalid
            // Only trigger logout if not explicitly disabled (for optional endpoints)
            if (options.skipLogoutOn401 !== true) {
                removeToken();
                showLogin();
            }
            const error = new Error('Session expired. Please login again.');
            error.status = 401;
            throw error;
        }

        if (!response.ok) {
            let errorMessage = 'Request failed';
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorData.error || `HTTP ${response.status}: ${response.statusText}`;
            } catch (e) {
                errorMessage = `HTTP ${response.status}: ${response.statusText}`;
            }
            // Don't throw for 404s on optional endpoints like terminal-text (expected in local dev)
            if (response.status === 404 && (url.includes('/terminal-text') || url.includes('/save-terminal-text'))) {
                return { success: false, message: errorMessage };
            }
            throw new Error(errorMessage);
        }

        return response.json();
    }

	const FIXED_ITEMS_URL = 'https://novaadminfixed.jaidenkumar14-469.workers.dev';

async function loadFixedItems() {
    try {
        const res = await fetch(FIXED_ITEMS_URL);
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data.fixedItems) ? data.fixedItems : [];
    } catch (err) {
        console.error("Failed to load fixed items:", err);
        return [];
    }
}

window.markAsFixed = async function(id, button) {
    button.disabled = true;
    button.textContent = 'Saving...';

    try {
        await fetch(FIXED_ITEMS_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, action: 'add' })
        });

        loadFormsData();
    } catch (error) {
        console.error(error);
        button.disabled = false;
        button.textContent = '✅ Mark as Fixed';
    }
};

window.unmarkAsFixed = async function(id, button) {
    button.disabled = true;
    button.textContent = 'Saving...';

    try {
        await fetch(FIXED_ITEMS_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, action: 'remove' })
        });

        loadFormsData();
    } catch (error) {
        console.error(error);
        button.disabled = false;
        button.textContent = '↩️ Unmark Fixed';
    }
};

    // Initialize - check if already logged in
    async function init() {
        const token = getToken();
        if (token) {
            try {
                // Verify token is still valid with single retry for KV eventual consistency
                let verified = false;
                for (let i = 0; i < 2; i++) {
                    const response = await fetch('/api/admin/verify', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (response.ok) {
                        verified = true;
                        showDashboard();
                        return;
                    }
                    
                    // If 401 and first attempt, wait a bit and retry (KV might be eventually consistent)
                    if (response.status === 401 && i === 0) {
                        await new Promise(resolve => setTimeout(resolve, 500));
                    } else if (response.status === 401) {
                        // Token is invalid, remove it
                        break;
                    }
                }
                
                // If verification failed after retries, token is invalid
                if (!verified) {
                    removeToken();
                }
            } catch (error) {
                // Only log errors in development
                if (isLocalDev()) {
                    console.error('Token verification failed:', error);
                }
                removeToken();
            }
        }
        // If no token or verification failed, show login
        showLogin();
    }

    // Show login screen
    function showLogin() {
        loginScreen.style.display = 'block';
        adminDashboard.style.display = 'none';
        document.getElementById('login-password').value = '';
        document.getElementById('login-error').textContent = '';
        document.getElementById('login-error').style.display = 'none';
    }

    // Login form handler
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const password = document.getElementById('login-password').value;
        const errorDiv = document.getElementById('login-error');

        errorDiv.textContent = '';
        errorDiv.style.display = 'none';

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password })
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                errorDiv.textContent = data.message || 'Invalid password. Please check your password.';
                errorDiv.style.display = 'block';
                return;
            }

            // Store token
            setToken(data.token);
            
            // Show dashboard immediately - token verification will happen in background
            // Cloudflare KV has eventual consistency, so we don't block on verification
            showDashboard();
            
            // Verify token in background (non-blocking)
            // This helps catch KV configuration issues but doesn't block the user
            setTimeout(async () => {
                try {
                    const verifyResponse = await fetch('/api/admin/verify', {
                        headers: {
                            'Authorization': `Bearer ${data.token}`
                        }
                    });
                    
                    if (!verifyResponse.ok) {
                        // Only log in development - this might be a KV config issue
                        if (isLocalDev()) {
                            console.warn('Token verification failed. This might indicate a KV namespace configuration issue.');
                        }
                    }
                } catch (error) {
                    // Silently fail - non-critical
                    if (isLocalDev()) {
                        console.warn('Token verification check failed:', error);
                    }
                }
            }, 1000);
        } catch (error) {
            errorDiv.textContent = 'Error during login. Please check your connection and try again.';
            errorDiv.style.display = 'block';
            console.error('Login error:', error);
        }
    });

    // Logout handler
    logoutBtn.addEventListener('click', () => {
        removeToken();
        showLogin();
    });



    // Show dashboard
    function showDashboard() {
        loginScreen.style.display = 'none';
        adminDashboard.style.display = 'block';
        
        // Load non-authenticated data immediately
        loadAnalytics();
        loadFormsData();
        setupFormsTabs();
        setupTerminalTextHandlers();
        setupBannerHandlers();
        setupChangePasswordHandler();
        
        // Load authenticated endpoints after a delay to ensure token is available in KV
        // Increased delay to account for KV eventual consistency
        setTimeout(() => {
            if (document.getElementById('ga-measurement-id')) {
                loadGaId();
            }
            loadTerminalText();
            loadBanner();
        }, 1500); // 1.5s delay to ensure token is available in Cloudflare KV
    }

    // Load analytics data from Google Script
    async function loadAnalytics() {
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbzGp9wKvzeTMp_IHu_Wr8ZCezqqNTl4z-54WKq_T5UywMfE2xRdWA6SIhyUHM0hbcOMew/exec';
        
        try {
            const response = await fetch(scriptUrl);
            const data = await response.json();
            
            if (data) {
                document.getElementById('total-views').textContent = data.totalViews !== undefined ? data.totalViews : '-';
                document.getElementById('active-users').textContent = data.currentActiveUsers !== undefined ? data.currentActiveUsers : '-';
                document.getElementById('screen-page-views').textContent = data.currentScreenPageViews !== undefined ? data.currentScreenPageViews : '-';
            }
        } catch (error) {
            console.error('Failed to load analytics:', error);
            document.getElementById('total-views').textContent = '-';
            document.getElementById('active-users').textContent = '-';
            document.getElementById('screen-page-views').textContent = '-';
        }
    }


    // Load GA ID
    async function loadGaId() {
        const gaIdInput = document.getElementById('ga-measurement-id');
        if (!gaIdInput) return;
        
        try {
            // Use skipLogoutOn401 to prevent logout if token verification fails for optional endpoint
            const data = await apiRequest('/api/admin/ga-id', { skipLogoutOn401: true });
            
            if (data.success && data.gaId) {
                gaIdInput.value = data.gaId;
            }
        } catch (error) {
            // Silently fail - GA ID is optional
            // Don't log errors in production to avoid console noise
            // The 401 errors will still appear in console from fetch(), but we handle them gracefully
        }
    }

    // Setup change password handler
    function setupChangePasswordHandler() {
        if (!changePasswordForm) return;
        
        changePasswordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const statusDiv = document.getElementById('change-password-status');
            
            statusDiv.textContent = '';
            statusDiv.style.display = 'none';

            // Validate passwords match
            if (newPassword !== confirmPassword) {
                statusDiv.textContent = 'New passwords do not match.';
                statusDiv.style.color = '#ff0000';
                statusDiv.style.display = 'block';
                return;
            }

            // Skip API call in local development


            try {
                const response = await apiRequest('/api/admin/change-password', {
                    method: 'POST',
                    body: JSON.stringify({ newPassword })
                });

                if (response.success) {
                    statusDiv.textContent = 'Password changed successfully!';
                    statusDiv.style.color = '#00ff00';
                    statusDiv.style.display = 'block';
                    
                    // Clear form
                    document.getElementById('new-password').value = '';
                    document.getElementById('confirm-password').value = '';
                } else {
                    statusDiv.textContent = response.message || 'Failed to change password.';
                    statusDiv.style.color = '#ff0000';
                    statusDiv.style.display = 'block';
                }
            } catch (error) {
                statusDiv.textContent = error.message || 'Failed to change password. Please try again.';
                statusDiv.style.color = '#ff0000';
                statusDiv.style.display = 'block';
                console.error('Change password error:', error);
            }
        });
    }

    // Check if running in local development
    function isLocalDev() {
				return window.location.protocol === "file:" ||
					   window.location.hostname === 'localhost' || 
					   window.location.hostname === '127.0.0.1' || 
					   window.location.port === '3000' ||
					   window.location.hostname.includes('localhost');
			}
    // Load terminal text
    async function loadTerminalText() {
        // Skip API call in local development to avoid 404 errors
        if (isLocalDev()) {
            return;
        }
        
        try {
            // Use skipLogoutOn401 to prevent logout if token verification fails for optional endpoint
            const data = await apiRequest('/api/admin/terminal-text', { skipLogoutOn401: true });
            
            if (data && data.success && data.data) {
                const welcomeTextarea = document.getElementById('terminal-welcome-lines');
                const statusInput = document.getElementById('terminal-status-text');
                
                if (welcomeTextarea) {
                    welcomeTextarea.value = (data.data.welcomeLines || []).join('\n');
                }
                if (statusInput) {
                    statusInput.value = data.data.statusText || 'If you see this, it loaded.';
                }
            }
        } catch (error) {
            // Silently fail - terminal text is optional
            // Don't log errors in production to avoid console noise
            // The 401 errors will still appear in console from fetch(), but we handle them gracefully
        }
    }

    // Setup terminal text handlers
    function setupTerminalTextHandlers() {
        const saveBtn = document.getElementById('save-terminal-text-btn');
        if (!saveBtn) return;

        saveBtn.addEventListener('click', async () => {
            const welcomeTextarea = document.getElementById('terminal-welcome-lines');
            const statusInput = document.getElementById('terminal-status-text');
            const statusDiv = document.getElementById('terminal-text-status');
            
            if (!welcomeTextarea || !statusInput) return;

            statusDiv.textContent = '';
            statusDiv.style.display = 'none';

            const welcomeLines = welcomeTextarea.value.split('\n').filter(line => line.trim() !== '');
            const statusText = statusInput.value.trim();

            if (welcomeLines.length === 0 || !statusText) {
                statusDiv.textContent = 'Please enter at least one welcome line and status text.';
                statusDiv.style.color = '#ff0000';
                statusDiv.style.display = 'block';
                return;
            }

            // Skip API call in local development
            if (isLocalDev()) {
                statusDiv.textContent = 'Terminal text API is not available in local development. Changes will work when deployed to Cloudflare.';
                statusDiv.style.color = '#ffaa00';
                statusDiv.style.display = 'block';
                return;
            }

            try {
                const response = await apiRequest('/api/admin/save-terminal-text', {
                    method: 'POST',
                    body: JSON.stringify({ welcomeLines, statusText })
                });

                if (response && response.success) {
                    statusDiv.textContent = 'Terminal text saved successfully!';
                    statusDiv.style.color = '#00ff00';
                    statusDiv.style.display = 'block';
                } else {
                    statusDiv.textContent = response?.message || 'Failed to save terminal text.';
                    statusDiv.style.color = '#ff0000';
                    statusDiv.style.display = 'block';
                }
            } catch (error) {
                statusDiv.textContent = error.message || 'Failed to save terminal text. Please try again.';
                statusDiv.style.color = '#ff0000';
                statusDiv.style.display = 'block';
            }
        });
    }

    // Load banner for admin form
    async function loadBanner() {
        if (isLocalDev()) return;
        const enabledCheck = document.getElementById('banner-enabled');
        const textInput = document.getElementById('banner-text');
        if (!enabledCheck || !textInput) return;
        try {
            const data = await apiRequest('/api/admin/banner', { skipLogoutOn401: true });
            if (data && data.success && data.data) {
                enabledCheck.checked = !!data.data.enabled;
                textInput.value = data.data.text || '';
            }
        } catch (e) {
            // ignore
        }
    }

    // Setup banner handlers
    function setupBannerHandlers() {
        const saveBtn = document.getElementById('save-banner-btn');
        const statusDiv = document.getElementById('banner-status');
        if (!saveBtn || !statusDiv) return;
        saveBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const enabledCheck = document.getElementById('banner-enabled');
            const textInput = document.getElementById('banner-text');
            if (!enabledCheck || !textInput) return;
            // Show immediate feedback so the user sees something
            statusDiv.textContent = 'Saving…';
            statusDiv.style.color = '#aaa';
            statusDiv.style.display = 'block';
            statusDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            if (isLocalDev()) {
                statusDiv.textContent = 'Banner API is not available in local development.';
                statusDiv.style.color = '#ffaa00';
                return;
            }
            try {
                const response = await apiRequest('/api/admin/save-banner', {
                    method: 'POST',
                    body: JSON.stringify({ enabled: enabledCheck.checked, text: textInput.value.trim() })
                });
                if (response && response.success) {
                    statusDiv.textContent = 'Banner saved successfully!';
                    statusDiv.style.color = '#00ff00';
                } else {
                    statusDiv.textContent = response?.message || 'Failed to save banner.';
                    statusDiv.style.color = '#ff0000';
                }
            } catch (error) {
                statusDiv.textContent = error.message || 'Failed to save banner.';
                statusDiv.style.color = '#ff0000';
            }
        });
    }

    // Setup forms tabs
    function setupFormsTabs() {
        const tabs = document.querySelectorAll('#forms-results-container .suggestion-tab');
        const contents = document.querySelectorAll('#forms-results-container .suggestions-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents in forms container
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // Load Google Forms data
    async function loadFormsData() {
    const formsUrl = 'https://script.google.com/macros/s/AKfycbzYrrrgW8M1uK2gNifn5KBW8SJPzE9P-W7C51ocZHAQBpKkJnMl7ISzuyd_qpF8DZdjpA/exec';
    
    try {
        const [response, fixedItems] = await Promise.all([fetch(formsUrl), loadFixedItems()]);
        const data = await response.json();

        const fixedContainer = document.getElementById('forms-fixed-list');
        if (fixedContainer) fixedContainer.innerHTML = '<p>No fixed issues yet.</p>';

        if (data['Bug Reports']?.responses) {
            displayFormsData('forms-bug-reports-list', data['Bug Reports'].responses, 'bug', fixedItems);
        } else {
            document.getElementById('forms-bug-reports-list').innerHTML = '<p>No bug reports from forms yet.</p>';
        }

        if (data['Game Requests']?.responses) {
            displayFormsData('forms-game-requests-list', data['Game Requests'].responses, 'game', fixedItems);
        } else {
            document.getElementById('forms-game-requests-list').innerHTML = '<p>No game requests from forms yet.</p>';
        }

		if (data['Feature suggestions']?.responses) {
			displayFormsData('forms-suggestions-list', data['Feature suggestions'].responses, 'feature', fixedItems)
		} else {
            document.getElementById('forms-suggestions-list').innerHTML = '<p>No suggestions from forms yet.</p>';
        }
    } catch (error) {
        console.error('Failed to load forms data:', error);
        document.getElementById('forms-bug-reports-list').innerHTML = '<p>Failed to load bug reports from forms.</p>';
        document.getElementById('forms-game-requests-list').innerHTML = '<p>Failed to load game requests from forms.</p>';
		document.getElementById('forms-suggestions-list').innerHTML = '<p>Failed to load suggestions from forms.</p>';
    }
}
function buildCardHTML(response, index, type, isFixed) {
const itemId = type + "_" + response.Timestamp;
	
	const icons = {
  bug: '🐛',
  game: '🎮',
  feature: '✨'
};

	const labels = {
		bug: 'Bug Report',
		game: 'Game Request',
		feature: 'Feature Request'
	};

	const titles = {
		bug: response['what glitch is it'] || 'Bug Report',
		game: response['What game would you like me to add? BE SPECIFIC'] || 'Game Request',
		feature: response['what type of feature?'] || 'Feature suggestion'
	};

	const emails = {
		bug: response['email so I might get back to you (optional)'] || '',
		game: response['your email so i might reach back to you if I fixed the problem NOT GARUNTEED(optional)'] || '',
		feature: response['your email so I might get back (optional)'] || ''
	};
    const typeIcon = icons[type] || '❓';
    const typeLabel = labels[type] || 'Unknown'
    const timestamp = response.Timestamp ? new Date(response.Timestamp).toLocaleString() : 'Unknown date';

    let title = titles[type] || 'Unknown title'

    let description = type === 'bug' ? (response['Tell me about the glitch'] || '') : '';
    let steps = type === 'bug' ? (response['How do you get the glitch, (step 1, step 2, step 3 etc)'] || '') : '';
    let email = emails[type] || 'Email: Not provided';

    if (Array.isArray(email)) email = email.join(', ');
    email = String(email || '');
    const esc = s => String(s).replace(/</g, '&lt;').replace(/>/g, '&gt;');

const actionBtn = isFixed
  ? `<button class="fix-btn unmark" onclick="window.unmarkAsFixed('${itemId}', this)">↩️ Unmark Fixed</button>`
  : `<button class="fix-btn" onclick="window.markAsFixed('${itemId}', this)">✅ Mark as Fixed</button>`;

    return `
        <div class="suggestion-item" data-index="${index}" data-type="${type}" data-id="${itemId}">
            <div class="suggestion-header">
                <span class="suggestion-type">${typeIcon} ${typeLabel}</span>
                <span class="suggestion-date">${timestamp}</span>
            </div>
            <div class="suggestion-title">${esc(title)}</div>
            ${description ? `<div class="suggestion-description">${esc(description)}</div>` : ''}
            ${steps ? `<div class="suggestion-steps"><strong>Steps to reproduce:</strong> ${esc(steps)}</div>` : ''}
            <div class="suggestion-meta">
                <span class="suggestion-email">${email ? `<span class="suggestion-email"><a href="mailto:${esc(email)}">Email: ${esc(email)}</a></span>` : ''}</span>
            </div>
            ${actionBtn}
        </div>
    `;
}
	
    // Display forms data
    function displayFormsData(containerId, responses, type, fixedItems = []) {
    const container = document.getElementById(containerId);
    const fixedContainer = document.getElementById('forms-fixed-list');
    if (!container) return;

    const sortedResponses = [...responses].sort((a, b) => new Date(b.Timestamp || 0) - new Date(a.Timestamp || 0));

    const active = [];
    const fixed = [];

    sortedResponses.forEach(r => {
        const ID = type + "_" + r.Timestamp;
        fixedItems.includes(ID) ? fixed.push(r) : active.push(r);
    });

    container.innerHTML = active.length
        ? active.map((r, i) => buildCardHTML(r, i, type, false)).join('')
        : `<p>No ${type === 'bug' ? 'bug reports' : 'game requests'} from forms yet.</p>`;

    if (fixedContainer) {
        fixed.forEach((r, i) => {
            const encodedID = type + "_" + r.Timestamp;
            if (!fixedContainer.querySelector(`[data-id="${encodedID}"]`)) {
                if (fixedContainer.querySelector('p')) fixedContainer.innerHTML = '';
                fixedContainer.insertAdjacentHTML('beforeend', buildCardHTML(r, i, type, true));
            }
        });
    }
}

    // Setup refresh forms button
    const refreshFormsBtn = document.getElementById('refresh-forms-btn');
    if (refreshFormsBtn) {
        refreshFormsBtn.addEventListener('click', () => {
            loadFormsData();
        });
    }

    // Auto-refresh analytics every 30 seconds
    setInterval(() => {
        if (adminDashboard.style.display !== 'none') {
            loadAnalytics();
            loadFormsData();
        }
    }, 30000);

    // Initialize on page load
    init();
});
