var CRAWLER_MODE = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);

// gtag removed - ads disabled
var gtag = function() {}; // Stub function to prevent errors

try {
	eval("const foo = true; let bar = false; () => {};");
}
catch (err) {
	// gtag call removed - ads disabled
	
	if (!CRAWLER_MODE)
		alert("Please update your browser! The game may not work");
}

if (typeof GAME_ID !== 'string')
    console.error('GAME_ID is not defined');
if (typeof REVISION === 'undefined')
    REVISION = null;

// https://support.cloudflare.com/hc/en-us/articles/200172516-Which-file-extensions-does-Cloudflare-cache-for-static-content-
if (typeof LOBBY_FILE_EXT === 'undefined')
    LOBBY_FILE_EXT = 'png';
if (typeof PACKAGE_FILE_EXT === 'undefined')
    PACKAGE_FILE_EXT = 'png';
if (typeof WASM_FILE_EXT === 'undefined')
    WASM_FILE_EXT = 'class'; // be sure your backend web server treat .class as application/wasm MIME type

if (typeof FILESYSTEM_FILE_EXT === 'undefined')
    FILESYSTEM_FILE_EXT = 'json';
if (typeof PACKAGES_PATH === 'undefined')
    PACKAGES_PATH = 'data/';

const ENABLE_FUNNEL = false;
const PWA_MODE = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || !!(navigator && navigator.standalone);
const MOBILE_DEVICE = navigator.maxTouchPoints || 'ontouchstart' in document.documentElement;

function LoadScript(e,t) {var n,a=document.createElement("script");a.setAttribute("src",e),a.onreadystatechange=a.onload=function(){n||(n=!0,t&&t())},document.getElementsByTagName("head")[0].appendChild(a)}
function trace() {if(void 0!=window.console&&"function"==typeof window.console.log){var o=Array.prototype.slice.call(arguments,0);try{window.console.log.apply(window.console,o)}catch(n){}}}							

if (typeof USE_SENTRY !== 'undefined' && !!USE_SENTRY) {
	LoadScript('https://browser.sentry-cdn.com/5.9.1/bundle.min.js', function () {
		Sentry.init({
			dsn: 'https://a8f0d9c1a2074ebeaeb8e93e680080ff@sentry.io/1838424',
			attachStacktrace: true,
			onunhandledrejection: false,
			onerror: false
		});
		
		JS_OnException = function (e) {
			Sentry.captureException(e);			
		};
	});
}

window.addEventListener('error', function(event) {
	if (event.message === 'Script error.') // https://dzone.com/articles/what-the-heck-is-script-error
		return;
	
	if (typeof __error_registered !== 'undefined')
		return;
	
	let desc = event.filename + " (" + event.lineno + "): " + event.message + "; " + JSON.stringify(event.error).substring(0, 80);		
	// gtag removed - ads disabled
	// gtag('event', 'except', {
	// 	'event_category': 'error',
	// 	'event_label': desc,
	// 	'non_interaction': true
	// });
	
	console.error("exception logged...", desc);
	//trace(event.error.stack);
	
	__error_registered = true;
});

const QUERY_PARAMS = new Object();
(function () {
	var e,
		a = /\+/g,
		r = /([^&=]+)=?([^&]*)/g,
		d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
		q = window.location.search.substring(1);
	while (e = r.exec(q))
		QUERY_PARAMS[d(e[1])] = d(e[2]);
})();

(function(){'use strict';var module={options:[],header:[navigator.platform,navigator.userAgent,navigator.appVersion,navigator.vendor,window.opera],dataos:[{name:'Windows Phone',value:'Windows Phone',version:'OS'},{name:'Windows',value:'Win',version:'NT'},{name:'iPhone',value:'iPhone',version:'OS'},{name:'iPad',value:'iPad',version:'OS'},{name:'Kindle',value:'Silk',version:'Silk'},{name:'Android',value:'Android',version:'Android'},{name:'PlayBook',value:'PlayBook',version:'OS'},{name:'BlackBerry',value:'BlackBerry',version:'/'},{name:'Macintosh',value:'Mac',version:'OS X'},{name:'Linux',value:'Linux',version:'rv'},{name:'Palm',value:'Palm',version:'PalmOS'}],databrowser:[{name:'Chrome',value:'Chrome',version:'Chrome'},{name:'Firefox',value:'Firefox',version:'Firefox'},{name:'Safari',value:'Safari',version:'Version'},{name:'Internet Explorer',value:'MSIE',version:'MSIE'},{name:'Opera',value:'Opera',version:'Opera'},{name:'BlackBerry',value:'CLDC',version:'CLDC'},{name:'Mozilla',value:'Mozilla',version:'Mozilla'}],init:function(){var agent=this.header.join(' '),os=this.matchItem(agent,this.dataos),browser=this.matchItem(agent,this.databrowser);window.os=os;window.browser=browser;},matchItem:function(string,data){var i=0,j=0,html='',regex,regexv,match,matches,version;for(i=0;i<data.length;i+=1){regex=new RegExp(data[i].value,'i');match=regex.test(string);if(match){regexv=new RegExp(data[i].version+'[- /:;]([\\d._]+)','i');matches=string.match(regexv);version='';if(matches){if(matches[1]){matches=matches[1];}}
if(matches){matches=matches.split(/[._]+/);for(j=0;j<matches.length;j+=1){if(j===0){version+=matches[j]+'.';}else{version+=matches[j];}}}else{version='0';}
return{name:data[i].name,version:parseFloat(version)};}}
return{name:'unknown',version:0};}};module.init();}());

function ListenTabFocus(onBlurCallback,onFocusCallback){var hidden,visibilityState,visibilityChange;if(typeof document.hidden!=="undefined"){hidden="hidden";visibilityChange="visibilitychange";visibilityState="visibilityState";}else if(typeof document.mozHidden!=="undefined"){hidden="mozHidden";visibilityChange="mozvisibilitychange";visibilityState="mozVisibilityState";}else if(typeof document.msHidden!=="undefined"){hidden="msHidden";visibilityChange="msvisibilitychange";visibilityState="msVisibilityState";}else if(typeof document.webkitHidden!=="undefined"){hidden="webkitHidden";visibilityChange="webkitvisibilitychange";visibilityState="webkitVisibilityState";}
if(typeof document.addEventListener==="undefined"||typeof hidden==="undefined"){}else{document.addEventListener(visibilityChange,function(){switch(document[visibilityState]){case"visible":if(onFocusCallback)onFocusCallback();break;case"hidden":if(onBlurCallback)onBlurCallback();break;}},false);}}


var __time_measure = (function (self) {
	let start_time;
	self.start = function () {start_time = new Date();};
	self.finish = function () {return ((new Date()) - start_time) * 0.001;};
	return self;
})({});

if (browser.name === "Internet Explorer") {
	if (!CRAWLER_MODE)
		alert('Warning: Internet Explorer is not supported. Please use any modern browser to play this game.');
}

const DEV_VERSION = QUERY_PARAMS.dev === '1';

const BROWSER_LANG = (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage).split('-')[0].toLowerCase();
const EXACT_LANG = QUERY_PARAMS.locale || BROWSER_LANG;

const NOCACHE = '?nocache' + ((new Date).getTime() % 99999);

const CDN_DOMAIN = 'clash3d.com';
const CDN_PATH = (typeof GAME_BASE_PATH !== 'undefined') ? GAME_BASE_PATH : '';
	
const FS_BASEPATH = "thug";

const gamemodule_path = CDN_PATH;

// NOTE: keep in mind that service worker does not respect cache control
const gamemodule_file = DEV_VERSION ? '/embed/farm_dev/index.js' + NOCACHE : (!REVISION ? "index.js" : "index_r" + REVISION.module + ".js");
const lobby_file = DEV_VERSION ? String.fromCharCode(108, 111, 98, 98, 121, 46, 115, 119, 102) + NOCACHE : (REVISION ? "lobby_r" + REVISION.lobby + "." + LOBBY_FILE_EXT : "lobby." + LOBBY_FILE_EXT);
const paks_path = CDN_PATH + PACKAGES_PATH;
const paks_filesystem_file = "filesystem." + FILESYSTEM_FILE_EXT + (REVISION ? '?r=' + REVISION.filesystem : (DEV_VERSION ? NOCACHE : ''));
if (DEV_VERSION)
	console.warn("Attention. Using developer version:", gamemodule_file, lobby_file);

// https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
// chrome.exe --disable-features=AutoplayIgnoreWebAudio
// https://gist.github.com/surma/301c9c377aaf90a3fdae615d4840bb2e 
var audiocontext_list = [];
var acontext = window.AudioContext || window.webkitAudioContext;
if (acontext) {
	try {
		var acproxy = new Proxy(acontext, {
			construct(target, args) {
				var result = new target(...args);
				audiocontext_list.push(result);
				trace('AudioContext created with state: ', result.state);
				return result;
			}
		});	
		if (window.AudioContext)
			window.AudioContext = acproxy;
		else if (window.webkitAudioContext) // iOS Safari
			window.webkitAudioContext = acproxy;
	} catch (err) {
		console.error(err);
	}
}

function JS_MuteAudio() {
	audiocontext_list.forEach(function (ctx) {
        if (ctx.state == 'running') {
            ctx.suspend().then(() => {
                if (DEV_VERSION)
					trace('muting audio context, new state:', ctx.state);						    
            });            
        }
    });
}

function JS_UnMuteAudio() {
	audiocontext_list.forEach(function (ctx) {
        if (ctx.state != 'running') {
            ctx.resume().then(() => {
				if (DEV_VERSION)
					trace('unmuting audio context, new state:', ctx.state);						
            });
        }
    });
}

ListenTabFocus(function () {
	trace('muting audio context on blur:');
    JS_MuteAudio();
    
}, function () {
	trace('unmuting audio context on focus:');						
	JS_UnMuteAudio();    
});

function LogError(msg) {
	// gtag removed - ads disabled
	// gtag('event', 'except', {
    //     'event_category': 'com_error',
    //     'event_label': msg,
    //     'non_interaction': true
    // });
    
    console.error("error logged...", msg);
}

// onload(ArrayBuffer), onprogress([0-1.0])
function FetchArrayBuffer(url, onload, onprogress) {
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.responseType = "arraybuffer";
	req.onload = function(event) {
		var arrayBuffer = req.response;
		onload(arrayBuffer);
	};
    if (typeof onprogress == 'function')
        req.onprogress = function (event) {
            if (event.lengthComputable)
                onprogress(event.loaded / event.total);
        };
	req.send();
}

// onload(parsed_json_object), onprogress([0-1.0])
function FetchJSONObject(url, onload, onprogress) {
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.responseType = "json";
	req.onload = function (event) {
		onload(req.response);
	};
    if (typeof onprogress == 'function')
        req.onprogress = function (event) {
            if (event.lengthComputable)
                onprogress(event.loaded / event.total);
        };
	req.send();
}

function FetchTextObject(url, onload) {
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.responseType = "text";
	req.onload = function (event) {
		onload(req.response);
	};
	req.send();
}

function FetchHeaders(url, onload) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);    
    req.onreadystatechange = function() {
        if (this.readyState == this.HEADERS_RECEIVED) {
            //req.getResponseHeader("X-Payload");
            onload(req);
            req.abort();
        }
    };
    req.send();
}

trace(os.name, os.version, browser.name, browser.version, gamemodule_path, PWA_MODE ? 'pwa mode' : '');

var GameModule;
var GAMEMODULE_FILESYSTEM;
var GAMEMODULE_CONFIG;

function UpdateProgressBar(progress) {
    $(".meter > span").each(function() {
        $(this).width('' + 100 * progress + '%');
    });
}

function AnimateProgressBar(progress, target_progress, duration_ms) {
    $(".meter > span").each(function() {
        $(this)
            .width('' + 100 * progress + '%')
            .animate({ width: '' + 100 * target_progress + '%' }, duration_ms)
            ;
    });
}

const __funnel_base_time = new Date().getTime();
function BootstrapFunnelStage(id) {
	if (ENABLE_FUNNEL) {
		var time_delta = (new Date().getTime() - __funnel_base_time) / 1000;
		// gtag('event', id, {
		// 	'event_category': 'funnel',
		// 	'value': time_delta | 0,
		// 	'non_interaction': true
		// });
	}
}

// NOTE: 2.0 if transformed by @media
function CanvasDotsPerPixel() {
    var element = document.getElementById('canvas');
    return element.offsetWidth / element.getBoundingClientRect().width;
}

function ReplaceFileExtension(filename, new_ext) {
    var parts = filename.split('.');
    parts.pop();
    parts.push(new_ext);
    return parts.join('.');
}

function DownloadAndStoreAssets(on_complete) {
	var paks = GAMEMODULE_FILESYSTEM.preload_paks.concat();	
	var map_filename = GAMEMODULE_FILESYSTEM.map_paks[GAME_ID];
	paks.push(map_filename);
	
	var paks_remain = paks.length;
	
	function load_pak(filename) {
		var pak_url = paks_path + ReplaceFileExtension(filename, PACKAGE_FILE_EXT);
		
		FetchArrayBuffer(pak_url, function (arraybuffer) {
			trace("storing", filename, "to file system");
            FS.createPreloadedFile("/" + FS_BASEPATH, ReplaceFileExtension(filename, 'png'), new Uint8Array(arraybuffer), true, false); // REF: library_fs.js: createPreloadedFile
			// NOTE: MEMFS doesnt require FS.syncfs			
			if (--paks_remain == 0)
				on_complete();
		});
	}
		
	for (var i in paks)		
		load_pak(paks[i]);
}

function CreateGameModule() {
	return {
        noImageDecoding: true,
        
		preRun: [],
        postRun: [],
		
        onAbort: function (what) {
            if (DEV_VERSION) {
                trace('abort', what);
                debugger;
            }
        },
        
		locateFile: function (filename, script_dir) {
            trace('locateFile:', filename, script_dir);
            
            var filename_parts = filename.split('.');
            var ext = filename_parts.pop();            
            if (ext === "wasm") {
                var name = filename_parts.shift();
                
				if (DEV_VERSION)
					return '/embed/farm_dev/' + filename + NOCACHE;
                else if (REVISION)
                    return gamemodule_path + name + "_r" + REVISION.module + "." + WASM_FILE_EXT;
                else
                    return gamemodule_path + ReplaceFileExtension(filename, WASM_FILE_EXT);
            }
            else
                return gamemodule_path + filename;
		},
		
		preInit: function () {
			trace('GameModule.preInit');
			
            UpdateProgressBar(0.25);
            
			var args = [];			
            
            trace("loading lobby...");            
			GameModule.addRunDependency('loading lobby');
			FetchArrayBuffer(gamemodule_path + lobby_file, function (lobby_file) {
				GameModule['FS_createPreloadedFile']("/", "lobby.png", new Uint8Array(lobby_file), true, false); // REF: library_fs.js: createPreloadedFile
				trace('lobby loaded');
				GameModule.removeRunDependency('loading lobby');                                
                BootstrapFunnelStage('LobbyLoaded');
                
			}, function (progress) {
                UpdateProgressBar(0.25 + progress * 0.15);
                
                if (progress == 1)
                    AnimateProgressBar(0.4, 1.0, 15000);
            });
			
			FS.mkdir(FS_BASEPATH, 511); // octal 0777 is not supported in strict mode
            
			GameModule.arguments = args;
			GameModule.viewport = document.getElementById("viewport");
			
            GameModule.addRunDependency('waiting for GAMEMODULE_FILESYSTEM');
            var GAMEMODULE_FILESYSTEM_waiting = setInterval(function () {
                if (GAMEMODULE_FILESYSTEM) {
                    clearInterval(GAMEMODULE_FILESYSTEM_waiting);                        
                    GameModule.removeRunDependency('waiting for GAMEMODULE_FILESYSTEM');
                    trace('GAMEMODULE_FILESYSTEM waiting finished');
                }
            }, 100);
            
            GameModule.addRunDependency('waiting for GAMEMODULE_CONFIG');
            var GAMEMODULE_CONFIG_waiting = setInterval(function () {
                if (GAMEMODULE_CONFIG) {
                    clearInterval(GAMEMODULE_CONFIG_waiting);                        
                    GameModule.removeRunDependency('waiting for GAMEMODULE_CONFIG');
                    trace('GAMEMODULE_CONFIG waiting finished');
                }
            }, 100);
			
			GameModule.addOnPreMain(function () {
				trace('GameModule.addOnPreMain');
				
				var canvas = document.getElementById("canvas");
				
				$('#canvas').on('click touchstart', function() {
					window.focus();
					canvas.focus();
					
                    audiocontext_list.forEach(function (ctx) {
                        if (ctx.state != 'running') {
                            ctx.resume().then(() => {
                                trace('resuming audio context on click, new state:', ctx.state);						
                            });
                        }
                    });
				});
												
				GameModule['canvas'] = canvas;
                
				GameModule.postRun.push(function() {				
					trace('GameModule.postRun');
					
					canvas.focus();
                    
                    trace("data packages loading");
                    DownloadAndStoreAssets(function () {
                        trace("all data packages downloaded");
                        GameModule.all_resources_downloaded = true;
                        BootstrapFunnelStage('PackagesLoaded');
                    });
				});
			});
			
		}		
	};
}

function JS_OnGameplayStarted() {
    trace('JS_OnGameplayStarted');
    
    try { if (typeof parent.JS_OnLobbyShown === 'function') parent.JS_OnLobbyShown(); } catch (e) {}
    
    setTimeout(function () {
        $("#preloader").remove();
    }, 180);
    
    // gtag('event', 'game', {
    //   'event_category': 'gameplay',
    //   'event_label': 'started',
    //   'value': 1
    // });
    
    BootstrapFunnelStage('LobbyStarted');
    
    try { if (typeof JS_AfterGameplayStarted === 'function') JS_AfterGameplayStarted(); } catch (e) {}; // NOTE: defined somewhere else
}

function wasmAvailable() {
	try {
		var bin = new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]);
		var mod = new WebAssembly.Module(bin);
		var inst = new WebAssembly.Instance(mod, {});

		// test storing to and loading from a non-zero location via a parameter.
		// Safari on iOS 11.2.5 returns 0 unexpectedly at non-zero locations
		return (inst.exports.test(4) !== 0);
		
	} catch (e) {
		return false;
	}
}

var config_url = '//clash3d.com/config/' + GAME_ID + '.required';
if (DEV_VERSION)
    config_url += '?dev=1';
var network_config_waiting_timer = setTimeout(function () {
    trace("network config was not loaded, using stub");
    GAMEMODULE_CONFIG = {};
    
    // gtag('event', 'site', {
    //     'event_category': 'config',
    //     'event_label': 'fetch_failed',
    //     'value': 1,
    //     'non_interaction': true
    // });
}, 2500);

FetchJSONObject(config_url, function (obj) {
    trace("network config loaded");
    GAMEMODULE_CONFIG = obj;
    clearTimeout(network_config_waiting_timer);
    BootstrapFunnelStage('ConfigLoaded');
});

FetchJSONObject(paks_path + paks_filesystem_file, function (filesystem) {
    trace("game module file system loaded");
    GAMEMODULE_FILESYSTEM = filesystem;
    BootstrapFunnelStage('FilesystemLoaded');

}, function (progress) {
    UpdateProgressBar(0.05 + 0.05 * progress);
});

setTimeout(function () {
    LoadScript("//clash3d.com/ads.js");
}, 1);

$(document).ready(function () {
    BootstrapFunnelStage('DocumentReady');
    
	if (console && console.re) {
        trace('embedding console.re intercepting functions');
        
        var orig_log = console.log;
        var orig_info = console.info;
        var orig_warn = console.warn;
        var orig_error = console.error;
        
        function new_warn() { console.warn = orig_warn; console.re.warn(Array.prototype.slice.call(arguments, 0).join(' ')); console.warn = new_warn; }        
        console.warn = new_warn;
        
        function new_log() { console.log = orig_log; console.re.log(Array.prototype.slice.call(arguments, 0).join(' ')); console.log = new_log; }        
        console.log = new_log;
        
        function new_info() { console.info = orig_info; console.re.info(Array.prototype.slice.call(arguments, 0).join(' ')); console.info = new_info; }        
        console.info = new_info;
        
        function new_error() { console.error = orig_error; console.re.error(Array.prototype.slice.call(arguments, 0).join(' ')); console.error = new_error; }        
        console.error = new_error;
                
        trace('console.re embedding success');
    }

    trace("document ready", paks_path + paks_filesystem_file);
    
    if (browser.name === 'Chrome' && browser.version < 59) {
        // gtag('event', 'site', {
        //     'event_category': 'compatibility',
        //     'event_label': 'outdated_chrome',
        //     'value': 1,
        //     'non_interaction': true
        // });
        
		if (!CRAWLER_MODE)
			alert('Warning: Google Chrome 59 or greater is required to play this game. Please update your browser.');
    }
    else
    if (browser.name === 'Firefox' && browser.version < 52) {
        // gtag('event', 'site', {
        //     'event_category': 'compatibility',
        //     'event_label': 'outdated_firefox',
        //     'value': 1,
        //     'non_interaction': true
        // });
        
		if (!CRAWLER_MODE)
			alert('Warning: Firefox 52 or greater is required to play this game. Please update your browser.');
    }
    else
	if (!wasmAvailable()) {
        // gtag('event', 'site', {
        //     'event_category': 'compatibility',
        //     'event_label': 'wasm_unsupported',
        //     'value': 1,
        //     'non_interaction': true
        // });
        
		if (!CRAWLER_MODE)
			alert("Warning: your browser doesn't support WebAssembly, please update it to play the game.");        
    }
		
	trace("loading game module script...");
	
        // gtag('event', 'site', {
		// 'event_category': 'compatibility',
		// 'event_label': 'success',
		// 'value': 1,
		// 'non_interaction': true
	// });
	
	GameModule = CreateGameModule();
	LoadScript(gamemodule_path + gamemodule_file, function () {            
		trace("game module script loaded");
		BootstrapFunnelStage('WasmLoaded');
	});
	
	// https://www.khronos.org/webgl/wiki/HandlingContextLost
	var canvas = document.getElementById('canvas');
	canvas.addEventListener("webglcontextlost", function (event) {
		event.preventDefault();
		console.error("WebGL context lost, waiting for context restored...");
		setTimeout(function () {
			console.error("WebGL context restore timeout, last chance redirect...");
			try {
				window.parent.location.replace('//clash3d.com');
			} catch (e) {
				window.location.replace('//clash3d.com');
			}
		}, 2000);
	}, false);	
	canvas.addEventListener("webglcontextrestored", function (event) {
		console.info("WebGL context restored!");
		if (!CRAWLER_MODE)
			alert('Press button to reload the game.');
		try {
			window.parent.location.reload(false);                
		} catch(e) {
			window.location.reload(false);                
		}
	}, false);    
});

/*
setTimeout(function () {
    function ExtractSLD(full_hostname) {
        full_hostname = full_hostname.split('//', 2).pop();
        full_hostname = full_hostname.split('/', 2).shift();

        var parts = full_hostname.toLowerCase().split('.');
        if (parts.length < 2)
            return "";
        else
            return parts[parts.length - 2] + '.' + parts[parts.length - 1];
    }

    var hostname = ExtractSLD(window.location.hostname);
    var referrer = ExtractSLD(window.document.referrer);

    if (hostname !== referrer) {
        FetchTextObject(new URL(window.document.referrer).origin + '/ads.txt', function (content) {
            if (typeof content === 'string')
                window.__ads_txt = content;
        });
    }
}, 10);
*/

// https://github.com/richtr/NoSleep.js/pull/65/commits/f7a6122f5d6700f18a68bff2c4114b81fdf6fa55
function EnableWakeLock() {
    let webm = 'data:video/webm;base64, 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';
    let mp4 = 'data:video/mp4;base64, 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';
    
    function _addSourceToVideo(element, type, dataURI) {
        let source = document.createElement('source');
        source.src = dataURI;
        source.type = `video/${type}`;
        element.appendChild(source);
    }
    
    let noSleepVideo = document.createElement('video');

    noSleepVideo.setAttribute('muted', '');
    noSleepVideo.setAttribute('title', 'No Sleep');
    noSleepVideo.setAttribute('playsinline', '');

    _addSourceToVideo(noSleepVideo, 'webm', webm);
    _addSourceToVideo(noSleepVideo, 'mp4', mp4);

    noSleepVideo.addEventListener('loadedmetadata', () => {
        if (noSleepVideo.currentSrc.includes('video/webm')) {
            noSleepVideo.setAttribute('loop', '');

        } else { // mp4 source
            noSleepVideo.addEventListener('timeupdate', () => {
                if (noSleepVideo.currentTime > 0.5) {
                    noSleepVideo.currentTime = Math.random();
                }
            });
        }
    });
    
    noSleepVideo.play();
    
    return noSleepVideo;
}

if (MOBILE_DEVICE)
	document.addEventListener('click', function enableNoSleep() {
		document.removeEventListener('click', enableNoSleep, false);
		window.__wakelock = EnableWakeLock();
	}, false);
