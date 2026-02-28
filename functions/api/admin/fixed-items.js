export async function onRequestGet({ env }) {
    const data = await env.ADMIN_KV.get('fixed_items');
    return Response.json({ success: true, fixedItems: JSON.parse(data || '[]') });
}

export async function onRequestPost({ request, env }) {
    const { title, action } = await request.json();
    let fixedItems = JSON.parse(await env.ADMIN_KV.get('fixed_items') || '[]');

    if (action === 'add' && !fixedItems.includes(title)) {
        fixedItems.push(title);
    } else if (action === 'remove') {
        fixedItems = fixedItems.filter(t => t !== title);
    }

    await env.ADMIN_KV.put('fixed_items', JSON.stringify(fixedItems));
    return Response.json({ success: true });
}
