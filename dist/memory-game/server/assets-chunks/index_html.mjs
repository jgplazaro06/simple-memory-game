export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>MemoryGame</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>html,body{height:100%;background-image:url(/checkers.jpg);background-size:cover}
</style><link rel="stylesheet" href="styles-ATOQ2X7S.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-ATOQ2X7S.css"></noscript><style ng-app-id="ng">main[_ngcontent-ng-c2678441144]{position:relative}app-main-board[_ngcontent-ng-c2678441144]{position:absolute;top:50%;left:50%;transform:translate(-50%,50%)}</style><style ng-app-id="ng">@font-face{font-family:Montserrat;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC73w0aXpsog.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC73w9aXpsog.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC73w2aXpsog.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC73w3aXpsog.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC73w5aXo.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.main--header[_ngcontent-ng-c520402391]{font-family:Montserrat,sans-serif;font-size:20px;display:flex;justify-content:space-between;border:1px solid;padding:10px;color:#fff;background-color:#5188b666;box-shadow:5px 10px #530e53}.main--header[_ngcontent-ng-c520402391]   .edge--div[_ngcontent-ng-c520402391]{display:flex;align-items:center;gap:15px}.block--header[_ngcontent-ng-c520402391]{margin:0}</style><style ng-app-id="ng">.winscreen--container[_ngcontent-ng-c4185033912]{position:fixed;height:100%;width:100%;display:flex;justify-content:center;align-items:center;top:0;left:0;color:#fff;background:#000;opacity:.8;z-index:9999}.block--container[_ngcontent-ng-c4185033912]{margin:auto}</style><style ng-app-id="ng">.winscreen--container[_ngcontent-ng-c939832506]{position:fixed;height:100%;width:100%;display:flex;justify-content:center;align-items:center;top:0;left:0;color:#fff;background:#000;opacity:1;z-index:9999}.block--container[_ngcontent-ng-c939832506]{margin:auto}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","input","compositionstart","compositionend"],["blur"]);</script>
  <app-root ng-version="19.2.2" _nghost-ng-c2678441144 ngh="2" ng-server-context="ssg"><app-header _ngcontent-ng-c2678441144 _nghost-ng-c520402391 ngh="0"><div _ngcontent-ng-c520402391 class="block--header"><nav _ngcontent-ng-c520402391 class="main--header"><h1 _ngcontent-ng-c520402391>MemoryGame</h1><div _ngcontent-ng-c520402391 class="edge--div"><button _ngcontent-ng-c520402391 jsaction="click:;">New Game?</button><p _ngcontent-ng-c520402391>Attempts: 0</p></div></nav></div></app-header><main _ngcontent-ng-c2678441144><app-win-screen _ngcontent-ng-c2678441144 _nghost-ng-c4185033912 ngh="1"><!----></app-win-screen><router-outlet _ngcontent-ng-c2678441144></router-outlet><app-deck-init _nghost-ng-c939832506 ngh="0"><div _ngcontent-ng-c939832506 class="winscreen--container"><div _ngcontent-ng-c939832506 class="block--container"><h1 _ngcontent-ng-c939832506>Please input deck size.</h1><input _ngcontent-ng-c939832506 type="number" required value="0" class="ng-untouched ng-pristine ng-valid" jsaction="input:;blur:;compositionstart:;compositionend:;"><button _ngcontent-ng-c939832506 jsaction="click:;">New Game</button></div></div></app-deck-init><!----></main></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-JHEGVMAU.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"0":"t0"},"c":{"0":[]}},{"c":{"3":[{"i":"c939832506","r":1}]}}]}</script></body></html>`;