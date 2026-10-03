const CACHE = 'jimny-2027-v2';
const FOTOS = 'jimny-2027-fotos-v1';
const ARCHIVOS = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];
const HOSTS_FOTOS = ['suzukiautos.com.co', 'vtexassets.com', 'vteximg.com.br', 'i.ytimg.com'];

self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== FOTOS).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // Fotos de Suzuki y miniaturas de YouTube: se guardan la primera vez para verlas sin señal
  if (e.request.destination === 'image' && HOSTS_FOTOS.some(h => url.hostname.endsWith(h))) {
    e.respondWith(caches.open(FOTOS).then(async c => {
      const guardada = await c.match(e.request);
      if (guardada) return guardada;
      const r = await fetch(e.request);
      c.put(e.request, r.clone());
      return r;
    }));
    return;
  }
  if (url.origin !== location.origin) return; // videos, fuentes y WhatsApp van directo a la red
  e.respondWith(fetch(e.request).then(r => {
    const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r;
  }).catch(() => caches.match(e.request)));
});
