
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
    'index.csr.html': {size: 700, hash: 'd7876b32a985abf30aec2f6449ec89681b5687bcc74b5a38295960cf5acbb05f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: 'afe12869269da81e7d68645c85636844f63ec4a247a4e893af3587a148a18ba6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5570, hash: '98530a171c686f519cc8cce9a8b02b3c1fad73cda1fd656c364d2ea25313ee9b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'main/index.html': {size: 5570, hash: '98530a171c686f519cc8cce9a8b02b3c1fad73cda1fd656c364d2ea25313ee9b', text: () => import('./assets-chunks/main_index_html.mjs').then(m => m.default)},
    'styles-ATOQ2X7S.css': {size: 81, hash: '2qCQm4AOB2c', text: () => import('./assets-chunks/styles-ATOQ2X7S_css.mjs').then(m => m.default)}
  },
};
