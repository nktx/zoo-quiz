"use strict";var precacheConfig=[["/zoo-quiz/index.html","5b8a101c14653f903051fbfe9db45fdb"],["/zoo-quiz/static/css/main.63e3daab.css","1c743900532195ea4b6579c5793cf953"],["/zoo-quiz/static/js/main.86faccb8.js","52e027115541bf5d732240cc67bed2e7"],["/zoo-quiz/static/media/avatar.06fc52f7.svg","06fc52f7ea836ee6f2af524480543d0b"],["/zoo-quiz/static/media/background.9bcd15a7.svg","9bcd15a764cc26ed284dcf08682899bf"],["/zoo-quiz/static/media/bat.c1618032.svg","c16180322de5cd477581fd5fb89b3de0"],["/zoo-quiz/static/media/bird.373f05d8.svg","373f05d8457ac8adfbabedef2e398670"],["/zoo-quiz/static/media/branch.8e778158.svg","8e7781584634307250ed7106b99535ac"],["/zoo-quiz/static/media/cat.095927f8.svg","095927f8ee17d3d9a826a182ffda31bf"],["/zoo-quiz/static/media/dialog.5ff5564f.svg","5ff5564ffb1b41b2f544f1df0b5de05e"],["/zoo-quiz/static/media/grass.d004ae51.svg","d004ae51849a319a7678b967e2151e67"],["/zoo-quiz/static/media/illustration-failure.03912d94.svg","03912d94795eeffd9f399a542124bc4b"],["/zoo-quiz/static/media/illustration-failure.16dd4979.svg","16dd4979d0eabe8bbab99c88e129c278"],["/zoo-quiz/static/media/illustration-failure.37e5c6f7.svg","37e5c6f70015dc666cd9d61afb7485ab"],["/zoo-quiz/static/media/illustration-failure.3f51e7a2.svg","3f51e7a279fb67fe4297faca6769c26d"],["/zoo-quiz/static/media/illustration-failure.c68ee8f5.svg","c68ee8f58452451b253db99b45f7278f"],["/zoo-quiz/static/media/illustration-success.3e81113f.svg","3e81113f9a9f06dcf39c3694e441e375"],["/zoo-quiz/static/media/illustration-success.66126abe.svg","66126abe727903c3b8e167f151b8aa4b"],["/zoo-quiz/static/media/illustration-success.7985f405.svg","7985f40524db2b72b60d2f063c08861e"],["/zoo-quiz/static/media/illustration-success.a2440fe7.svg","a2440fe7fde6444267901e27aaf07367"],["/zoo-quiz/static/media/illustration-success.c387b69d.svg","c387b69de23f2aeeee999019a310ac4b"],["/zoo-quiz/static/media/illustration.08753da4.svg","08753da4fe19a64836bde112743b44ef"],["/zoo-quiz/static/media/illustration.16d09ef4.svg","16d09ef4eacbcabd52790df5aea270be"],["/zoo-quiz/static/media/illustration.1b912b6a.svg","1b912b6a6253ba9e886ff62885a9fe22"],["/zoo-quiz/static/media/illustration.59978720.svg","59978720ac79a2975fb73fd462d97c8d"],["/zoo-quiz/static/media/illustration.c4eb7f1a.svg","c4eb7f1ac77cf9839de693f24f6b80d8"],["/zoo-quiz/static/media/lizard.9cd2ff52.svg","9cd2ff52cb4021f4358664a45bfe8d5e"],["/zoo-quiz/static/media/logo.eb501115.svg","eb501115bbe84a29932aeb37bfe9523c"],["/zoo-quiz/static/media/mouse.b122529c.svg","b122529c246afb1d5b8b3ff26e968b9a"],["/zoo-quiz/static/media/title.7ed2acd3.svg","7ed2acd36ad927a673bb9f0513f47645"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,i){var s=new URL(e);return i&&s.pathname.match(i)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],i=new URL(t,self.location),s=createCacheKey(i,hashParamName,a,/\.\w{8}\./);return[i.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(i){return setOfCachedUrls(i).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return i.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),i="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,i),e=urlsToCacheKeys.has(a));var s="/zoo-quiz/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});