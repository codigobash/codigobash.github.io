importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "dist/css/global.css",
    "revision": "2220eca85f2f2257e0d13e32ab130697"
  },
  {
    "url": "images/icon512x512.png",
    "revision": "ec6b24a01876fc59892fc9e85dafce0f"
  },
  {
    "url": "images/markus-oberlehner-2017-06.jpg",
    "revision": "829a4add97f893021aaf51345e1a75e4"
  },
  {
    "url": "images/markus-oberlehner-meta-2017-06.jpg",
    "revision": "431eefb9971a751210fc11e60909810d"
  },
  {
    "url": "images/markus-oberlehner-mobile-2017-06.jpg",
    "revision": "64d725e5621a31a389b3d87951d068f4"
  },
  {
    "url": "index.html",
    "revision": "a63bea687ad73d4fb97f916086ff529a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
