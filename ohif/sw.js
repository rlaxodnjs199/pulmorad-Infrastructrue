!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=0)}([function(e,t){importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0-beta.1/workbox-sw.js"),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.routing.registerRoute(/\.(?:js|css)$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"static-resources"})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]}),new workbox.expiration.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30})]})),self.addEventListener("message",(function(e){if(e.data&&"SKIP_WAITING"===e.data.type)switch(e.data.type){case"SKIP_WAITING":break;default:console.warn("SW: Invalid message type: ".concat(e.data.type))}})),workbox.precaching.precacheAndRoute([{"revision":"7c99da997f67f65ced087ed7dba0d23a","url":"/0.0f20f2ce7aaf5e47040e.css"},{"revision":"5efef6708b989df209b5a40542f96e76","url":"/1.bundle.416e1b288f0227a56e9f.js"},{"revision":"c307d458d54c9e1524984b0ae1f3e612","url":"/1.bundle.416e1b288f0227a56e9f.js.LICENSE"},{"revision":"8fde18c5e19246ef20b50ad92535b81a","url":"/14.bundle.d5be10057ccbe886951a.js"},{"revision":"2ae9dab2b7458fc3693bb3986f0b5a18","url":"/14.bundle.d5be10057ccbe886951a.js.LICENSE"},{"revision":"bbc23705ee76c3937d7e34270c67f956","url":"/15.0f20f2ce7aaf5e47040e.css"},{"revision":"017871120529a7895bbe79bd1edfd99b","url":"/15.bundle.03de79a1f105dbd1601b.js"},{"revision":"55b05e2026991289c9d6261ddaf37c3c","url":"/16.bundle.b489badabaae5f0627cb.js"},{"revision":"7eb9e02d94f53a73c41bfbf4cad35e68","url":"/17.0f20f2ce7aaf5e47040e.css"},{"revision":"e4d0aa0cfe931575cf77f4bab4c611c2","url":"/17.bundle.0681ec3da0dfffbcae0f.js"},{"revision":"cb70e49805819d7264189d55afe0c34a","url":"/18.bundle.9d6264e4fa21162ab4e8.js"},{"revision":"39b4ad847e40f460dad4904a8421cf1e","url":"/19.bundle.824cc83e97bea684622d.js"},{"revision":"b1c0974c15d8777c09094758e13f0de2","url":"/20.bundle.658979fd92afcc082faf.js"},{"revision":"3fc6ff4c81cd6a523bee927348ab17ad","url":"/20.bundle.658979fd92afcc082faf.js.LICENSE"},{"revision":"63025716379126d1ef9402eed5f1d63c","url":"/2f98ce27043f24a0217e33892c551e1f.png"},{"revision":"199451fccf6645bd8f998b9c9a2423c4","url":"/3.0f20f2ce7aaf5e47040e.css"},{"revision":"f9fbed52f6757c7733ef72d1c1dc2b5b","url":"/7.0f20f2ce7aaf5e47040e.css"},{"revision":"a8a9b07a2386bd2914f17418d66563fe","url":"/8.0f20f2ce7aaf5e47040e.css"},{"revision":"07ed72b876f674dd4e6c1cfc0abf59b7","url":"/CallbackPage.bundle.7468c7841f72fc47687a.js"},{"revision":"00ebbc62793f532a3ed5e77fdca0f46b","url":"/ConnectedStandaloneRouting.bundle.c0e19a4f025746dfca1e.js"},{"revision":"2116ce47dc7bf88ec1d27d488a555c43","url":"/ConnectedStandaloneRouting~IHEInvokeImageDisplay~StudyListRouting~ViewerLocalFileData~ViewerRouting.bundle.36542aaafdd20e5c438c.js"},{"revision":"5540776e5d86630f38984da145c6059a","url":"/ConnectedStandaloneRouting~IHEInvokeImageDisplay~ViewerRouting.bundle.3348ff13510e04340467.js"},{"revision":"595a36a3856d0809dcfa62b12bad0b38","url":"/IHEInvokeImageDisplay.bundle.13cde61ddad1351a60a6.js"},{"revision":"9ee479c00e695f9185b2bef3e9ed7182","url":"/StudyListRouting.bundle.dfacfa2fcb44305aec20.js"},{"revision":"a0558903d4dd15dea1564a8a863a89d8","url":"/ViewerLocalFileData.bundle.9f4581094a94f664b7fb.js"},{"revision":"d3d4948a41c940c41ef7847cb6e13af3","url":"/ViewerRouting.bundle.336f8c00ca6735645e5a.js"},{"revision":"ebf2ec2a25714496dc935bc6c53b9a58","url":"/app-config.js"},{"revision":"a8db22f31c645baf13f9dde265e1130a","url":"/app.0f20f2ce7aaf5e47040e.css"},{"revision":"65f14f3d1d8447d373f26380816f4f33","url":"/app.bundle.f19c6b850d24a83b7447.js.LICENSE"},{"revision":"473e74a795f5a95dcfba304960bbcdf8","url":"/assets/Button_File.svg"},{"revision":"271da60b435c1445580caab72e656818","url":"/assets/Button_Folder.svg"},{"revision":"cb4f64534cdf8dd88f1d7219d44490db","url":"/assets/android-chrome-144x144.png"},{"revision":"5cde390de8a619ebe55a669d2ac3effd","url":"/assets/android-chrome-192x192.png"},{"revision":"e7466a67e90471de05401e53b8fe20be","url":"/assets/android-chrome-256x256.png"},{"revision":"9bbe9b80156e930d19a4e1725aa9ddae","url":"/assets/android-chrome-36x36.png"},{"revision":"5698b2ac0c82fe06d84521fc5482df04","url":"/assets/android-chrome-384x384.png"},{"revision":"56bef3fceec344d9747f8abe9c0bba27","url":"/assets/android-chrome-48x48.png"},{"revision":"3e8b8a01290992e82c242557417b0596","url":"/assets/android-chrome-512x512.png"},{"revision":"517925e91e2ce724432d296b687d25e2","url":"/assets/android-chrome-72x72.png"},{"revision":"4c3289bc690f8519012686888e08da71","url":"/assets/android-chrome-96x96.png"},{"revision":"cf464289183184df09292f581df0fb4f","url":"/assets/apple-touch-icon-1024x1024.png"},{"revision":"0857c5282c594e4900e8b31e3bade912","url":"/assets/apple-touch-icon-114x114.png"},{"revision":"4208f41a28130a67e9392a9dfcee6011","url":"/assets/apple-touch-icon-120x120.png"},{"revision":"cb4f64534cdf8dd88f1d7219d44490db","url":"/assets/apple-touch-icon-144x144.png"},{"revision":"977d293982af7e9064ba20806b45cf35","url":"/assets/apple-touch-icon-152x152.png"},{"revision":"6de91b4d2a30600b410758405cb567b4","url":"/assets/apple-touch-icon-167x167.png"},{"revision":"87bff140e3773bd7479a620501c4aa5c","url":"/assets/apple-touch-icon-180x180.png"},{"revision":"647386c34e75f1213830ea9a38913525","url":"/assets/apple-touch-icon-57x57.png"},{"revision":"0c200fe83953738b330ea431083e7a86","url":"/assets/apple-touch-icon-60x60.png"},{"revision":"517925e91e2ce724432d296b687d25e2","url":"/assets/apple-touch-icon-72x72.png"},{"revision":"c9989a807bb18633f6dcf254b5b56124","url":"/assets/apple-touch-icon-76x76.png"},{"revision":"87bff140e3773bd7479a620501c4aa5c","url":"/assets/apple-touch-icon-precomposed.png"},{"revision":"87bff140e3773bd7479a620501c4aa5c","url":"/assets/apple-touch-icon.png"},{"revision":"05fa74ea9c1c0c3931ba96467999081d","url":"/assets/apple-touch-startup-image-1182x2208.png"},{"revision":"9e2cd03e1e6fd0520eea6846f4278018","url":"/assets/apple-touch-startup-image-1242x2148.png"},{"revision":"5591e3a1822cbc8439b99c1a40d53425","url":"/assets/apple-touch-startup-image-1496x2048.png"},{"revision":"337de578c5ca04bd7d2be19d24d83821","url":"/assets/apple-touch-startup-image-1536x2008.png"},{"revision":"cafb4ab4eafe6ef946bd229a1d88e7de","url":"/assets/apple-touch-startup-image-320x460.png"},{"revision":"d9bb9e558d729eeac5efb8be8d6111cc","url":"/assets/apple-touch-startup-image-640x1096.png"},{"revision":"038b5b02bac8b82444bf9a87602ac216","url":"/assets/apple-touch-startup-image-640x920.png"},{"revision":"2177076eb07b1d64d663d7c03268be00","url":"/assets/apple-touch-startup-image-748x1024.png"},{"revision":"4fc097443815fe92503584c4bd73c630","url":"/assets/apple-touch-startup-image-750x1294.png"},{"revision":"2e29914062dce5c5141ab47eea2fc5d9","url":"/assets/apple-touch-startup-image-768x1004.png"},{"revision":"f692ec286b3a332c17985f4ed38b1076","url":"/assets/browserconfig.xml"},{"revision":"f3d9a3b647853c45b0e132e4acd0cc4a","url":"/assets/coast-228x228.png"},{"revision":"533ba1dcac7b716dec835a2fae902860","url":"/assets/favicon-16x16.png"},{"revision":"783e9edbcc23b8d626357ca7101161e0","url":"/assets/favicon-32x32.png"},{"revision":"0711f8e60267a1dfc3aaf1e3818e7185","url":"/assets/favicon.ico"},{"revision":"5df2a5b0cee399ac0bc40af74ba3c2cb","url":"/assets/firefox_app_128x128.png"},{"revision":"11fd9098c4b07c8a07e1d2a1e309e046","url":"/assets/firefox_app_512x512.png"},{"revision":"27cddfc922dca3bfa27b4a00fc2f5e36","url":"/assets/firefox_app_60x60.png"},{"revision":"6886cadbb55e625a4d3b724040d293bc","url":"/assets/manifest.webapp"},{"revision":"cb4f64534cdf8dd88f1d7219d44490db","url":"/assets/mstile-144x144.png"},{"revision":"334895225e16a7777e45d81964725a97","url":"/assets/mstile-150x150.png"},{"revision":"e295cca4af6ed0365cf7b014d91b0e9d","url":"/assets/mstile-310x150.png"},{"revision":"cbefa8c42250e5f2443819fe2c69d91e","url":"/assets/mstile-310x310.png"},{"revision":"aa411a69df2b33a1362fa38d1257fa9d","url":"/assets/mstile-70x70.png"},{"revision":"89783f0845797299e17d652f64a22df4","url":"/assets/pulmorad-logo-text.png"},{"revision":"63025716379126d1ef9402eed5f1d63c","url":"/assets/pulmorad-logo.png"},{"revision":"5609af4f69e40e33471aee770ea1d802","url":"/assets/yandex-browser-50x50.png"},{"revision":"cfea70d7ddc8f06f276ea0c85c4b2adf","url":"/assets/yandex-browser-manifest.json"},{"revision":"89783f0845797299e17d652f64a22df4","url":"/ce7f8a56f35158917d1fa98558677b4c.png"},{"revision":"0ca44a1b8719e835645ffa804a9d1395","url":"/es6-shim.min.js"},{"revision":"020b236e8206f4ca35f3143907de817e","url":"/google.js"},{"revision":"6461ed6331d984df95c0c79ca758503f","url":"/index.html"},{"revision":"4e41fd55c08031edf19119a1df1a0538","url":"/init-service-worker.js"},{"revision":"870f848acf5470b2cf369f6604fac737","url":"/manifest.json"},{"revision":"754d698a7b334af57c00f29723fd9751","url":"/oidc-client.min.js"},{"revision":"d05a380d50b74e629738ae6f62fb7e78","url":"/polyfill.min.js"},{"revision":"f528b6861c82ee4415fce0821fd695c1","url":"/silent-refresh.html"},{"revision":"f984a8a45f1e585ade3091456116cda6","url":"/vendors~ConnectedStandaloneRouting~IHEInvokeImageDisplay~ViewerLocalFileData~ViewerRouting.bundle.112b712173ca58113957.js"},{"revision":"ea3c22bb4a2e827914f03b71db5ab91a","url":"/vendors~StudyListRouting.bundle.399c2e1f8a8df34451bd.js"},{"revision":"65d5bbf4552b133e980d9f7b974cd470","url":"/vendors~StudyListRouting.bundle.399c2e1f8a8df34451bd.js.LICENSE"},{"revision":"a5ab3c4742c246572743ca170d1a96c7","url":"/vendors~ViewerLocalFileData.bundle.66b8d27a42c87406d8bf.js"},{"revision":"9ac25806a51ca286f2c4a85343e44329","url":"/vendors~dicom-microscopy-viewer.bundle.b51374f078c223f46e58.js"},{"revision":"2de3eb75701d6cb3d4158adbb65e9f3e","url":"/vendors~dicom-microscopy-viewer.bundle.b51374f078c223f46e58.js.LICENSE"}])}]);
//# sourceMappingURL=sw.js.map