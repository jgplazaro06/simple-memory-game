
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/main"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 700, hash: 'ba7d5d6c6a0b6058c149250ebceaee17b15191b0f3e843a4885a30f49d88dbf6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '96c3e9a30ef1d6a772ae54b1e44e51ed36307314c639c673eba396337bca79e6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main/index.html': {size: 5570, hash: 'f7b12d84eaeaa05b340383e081a4d2feec3955f8d2c2194d2507e09c6782c471', text: () => import('./assets-chunks/main_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5570, hash: 'f7b12d84eaeaa05b340383e081a4d2feec3955f8d2c2194d2507e09c6782c471', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ATOQ2X7S.css': {size: 81, hash: '2qCQm4AOB2c', text: () => import('./assets-chunks/styles-ATOQ2X7S_css.mjs').then(m => m.default)}
  },
};
