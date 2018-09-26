/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ico",
    "revision": "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    "url": "favicon.png",
    "revision": "32471b747a8f17d7c5115a183f56de37"
  },
  {
    "url": "index.html",
    "revision": "d180ff204257db0303bf0727e004c7e7"
  },
  {
    "url": "static/css/main.f1826e2a.css",
    "revision": "8a83bc5865f9ab1cf1fa7ac79a805848"
  },
  {
    "url": "static/js/main.9f1b3861.js",
    "revision": "a03d1fe0bcbf1946548b740f2053961f"
  },
  {
    "url": "static/media/back Arrow.f59b4b82.JPG",
    "revision": "f59b4b82f71966d0ae423687138b6785"
  },
  {
    "url": "static/media/bgimage.6b355042.png",
    "revision": "6b3550421cfd49d51651c290a4d72a11"
  },
  {
    "url": "static/media/boy (2).8b03ee5b.png",
    "revision": "8b03ee5bee82b8909128def2f2b77b0f"
  },
  {
    "url": "static/media/roboto-latin-100.987b8457.woff2",
    "revision": "987b84570ea69ee660455b8d5e91f5f1"
  },
  {
    "url": "static/media/roboto-latin-100.e9dbbe8a.woff",
    "revision": "e9dbbe8a693dd275c16d32feb101f1c1"
  },
  {
    "url": "static/media/roboto-latin-100italic.6232f43d.woff2",
    "revision": "6232f43d15b0e7a0bf0fe82e295bdd06"
  },
  {
    "url": "static/media/roboto-latin-100italic.d704bb3d.woff",
    "revision": "d704bb3d579b7d5e40880c75705c8a71"
  },
  {
    "url": "static/media/roboto-latin-300.55536c8e.woff2",
    "revision": "55536c8e9e9a532651e3cf374f290ea3"
  },
  {
    "url": "static/media/roboto-latin-300.a1471d1d.woff",
    "revision": "a1471d1d6431c893582a5f6a250db3f9"
  },
  {
    "url": "static/media/roboto-latin-300italic.210a7c78.woff",
    "revision": "210a7c781f5a354a0e4985656ab456d9"
  },
  {
    "url": "static/media/roboto-latin-300italic.d69924b9.woff2",
    "revision": "d69924b98acd849cdeba9fbff3f88ea6"
  },
  {
    "url": "static/media/roboto-latin-400.5d4aeb4e.woff2",
    "revision": "5d4aeb4e5f5ef754e307d7ffaef688bd"
  },
  {
    "url": "static/media/roboto-latin-400.bafb105b.woff",
    "revision": "bafb105baeb22d965c70fe52ba6b49d9"
  },
  {
    "url": "static/media/roboto-latin-400italic.9680d5a0.woff",
    "revision": "9680d5a0c32d2fd084e07bbc4c8b2923"
  },
  {
    "url": "static/media/roboto-latin-400italic.d8bcbe72.woff2",
    "revision": "d8bcbe724fd6f4ba44d0ee6a2675890f"
  },
  {
    "url": "static/media/roboto-latin-500.28546717.woff2",
    "revision": "285467176f7fe6bb6a9c6873b3dad2cc"
  },
  {
    "url": "static/media/roboto-latin-500.de8b7431.woff",
    "revision": "de8b7431b74642e830af4d4f4b513ec9"
  },
  {
    "url": "static/media/roboto-latin-500italic.510dec37.woff2",
    "revision": "510dec37fa69fba39593e01a469ee018"
  },
  {
    "url": "static/media/roboto-latin-500italic.ffcc050b.woff",
    "revision": "ffcc050b2d92d4b14a4fcb527ee0bcc8"
  },
  {
    "url": "static/media/roboto-latin-700.037d8304.woff2",
    "revision": "037d830416495def72b7881024c14b7b"
  },
  {
    "url": "static/media/roboto-latin-700.cf6613d1.woff",
    "revision": "cf6613d1adf490972c557a8e318e0868"
  },
  {
    "url": "static/media/roboto-latin-700italic.010c1aee.woff2",
    "revision": "010c1aeee3c6d1cbb1d5761d80353823"
  },
  {
    "url": "static/media/roboto-latin-700italic.846d1890.woff",
    "revision": "846d1890aee87fde5d8ced8eba360c3a"
  },
  {
    "url": "static/media/roboto-latin-900.19b7a0ad.woff2",
    "revision": "19b7a0adfdd4f808b53af7e2ce2ad4e5"
  },
  {
    "url": "static/media/roboto-latin-900.8c2ade50.woff",
    "revision": "8c2ade503b34e31430d6c98aa29a52a3"
  },
  {
    "url": "static/media/roboto-latin-900italic.7b770d6c.woff2",
    "revision": "7b770d6c53423deb1a8e49d3c9175184"
  },
  {
    "url": "static/media/roboto-latin-900italic.bc833e72.woff",
    "revision": "bc833e725c137257c2c42a789845d82f"
  },
  {
    "url": "static/media/SignIcon.8b03ee5b.png",
    "revision": "8b03ee5bee82b8909128def2f2b77b0f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ cacheName: "images", plugins: [new workbox.expiration.Plugin({"maxEntries":500,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "fonts", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/graph.facebook.com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "avatars", plugins: [] }), 'GET');
workbox.routing.registerRoute(/todo/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 10, cacheName: "api-cache", plugins: [] }), 'GET');
