'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "350c983f5d4be34834c3a7f826f82218",
".git/config": "0874c6208332898d93a9fc822fc75232",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4db61d7922ffdea86c8a71e0d2404bfe",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a541f21f423c5db8be101f458c293914",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91a01a91ef9e7e467b0bf5522f8d7852",
".git/logs/refs/heads/master": "91a01a91ef9e7e467b0bf5522f8d7852",
".git/logs/refs/remotes/origin/master": "dafe2fb1bf93fbdd1727fd08aa3e3a1d",
".git/objects/03/8e88db258cbb122f1503bfd996debc872b43fe": "4d38f4721a128c01bb5188b6b2e91daf",
".git/objects/03/c370734b0ae19e321875d0f8df4fe37e7204c8": "81ba901897905e134d80ca6fe8b858e9",
".git/objects/04/168334d52287ed4d140e2d3571ce9ebb112f8c": "8d3af10d72e40409e4061bc9108673b1",
".git/objects/19/8f4beba7959cd843904ffca45f8602b560a468": "576f035cf7e53c69ba6b0490d69a9dd0",
".git/objects/1a/146fe7a9ee2553dd9676eee93be510225b2e98": "1b282c6cef9eaa2b139410216d9d5d16",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/215aaca71077907aa9312881622abfdeb94390": "9e317ca9b456d0d3086ef0015ad191bf",
".git/objects/2a/09a1eeba6f1741c76d7dd7b0f24ca1a841e218": "86156b72650d1d19603d56a4f91a28d8",
".git/objects/30/f5b9f65efcae58d4edf331478892bfda62a04e": "f530dac4c5d7e60956c69d4ad3ad7c74",
".git/objects/30/fb5b62bd9d126801c0eec2fdd50204421ce2aa": "41ea7dc2029df51bc40030d3c0f8ac14",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/625b90ac3847cc949ae837bb446bea6a2e8faf": "ab3d64d6a9df12945e8ab2546066c245",
".git/objects/43/23c4489bfd78c43a6fd62b9fe4a58163da35da": "be44f13db8e0d44bafad0d8e72b4f972",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2201de45caab1035fbd8813354a7a8a87c38c0": "78a095c37afc328f9488f15bf467d097",
".git/objects/4d/78492842fcd5e9529a3f6de05dae00ba1553fc": "6575651655b0db63dffde8362dab7827",
".git/objects/55/52b4f16ea43e896e0a83fa88d708a83c7cb90b": "6d6e75c4c283c69bb5e9aff2d447c089",
".git/objects/5f/61c2194e06a6da573418b0ae7ad34bd843ec4d": "ac629784b50f02b682a180f62676f911",
".git/objects/63/7f920bbf555e07c44ed9111e6e3de5d09e4a86": "d0c33dc91f750ff9f4fed4f2786f3a02",
".git/objects/63/a23c5e778b0101a829eeae38166f7884d35397": "0e863de2dcdda1a51edfcaa6774c2291",
".git/objects/65/5b5b586c2e2dbb6956580fc1c5d9d6000d1fa5": "3cdce9070a5efdfb97e970c644ba6959",
".git/objects/65/e63590f3fcbdf5e94b20cbeb86136a7a14107c": "3968fffe972673880472fe321669f5e7",
".git/objects/6c/b7fe7f064e8c0cfa38ab5773f0ce9933fd765a": "3fab91d4e68b3c6be8dba461be674904",
".git/objects/6d/a61e48f1fccc44fe83d67786d5090d270a6473": "f80efb9281efbe725ea6371405bedf71",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/eac889d07d03203a6cd0578b2f7ab3cd658b19": "21dadb17c001a3db230c5dfa81228c82",
".git/objects/7e/96402604113851f1f22bfe021a16614aaa9c66": "95186b13b9f1770bc59d8407b4410028",
".git/objects/82/56b7493f6121e00da21673e3bab5df6976f167": "d6d201a162927391e9d2efa39d577cf2",
".git/objects/84/999a5600be5b7c89dafbabccbc55a06c1c99a1": "b23ffb88829f5ba10b7e15a1b0a42a4b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/2576c054bc54e3d53c7a08b9c0131f81e7f176": "5c794fe2487977551ac23daa163bb8df",
".git/objects/a0/d5badde8ceac83071e83848124c6bfd7824045": "d5962bc4839069c7bb8606e9bb23ffb8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/bf27b82c4a7798a3d58fc5bb163859c8fe628a": "44b24581ee30b64fddf76669d57c4c30",
".git/objects/a5/5b7521a128e647a6ccc6c15448e6d2ac945473": "c732ec87da19846a1b97db106853f271",
".git/objects/a7/cdac1ac7f0c782cb62fba5b7bdc49bbe419246": "25fa8c19023fac603515d8bc4ce9b860",
".git/objects/a8/0d9577d7f1879534dca6b3222a775d8f6cc9d6": "b10f00966a09cb77f86302f0332d1c9e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/eb8e955ce333a27f3356178d9894f787ca27ee": "35531104fba544a24741a9e4e2441591",
".git/objects/aa/05db9c5c2ec024fafe15c4147c691c219959f3": "e042ce6f0fe7bf88e1e7d1b5745398b7",
".git/objects/aa/54b02750484d380b29d9f14e0e0af16ce1b00a": "4ac213bb65f6619b4ea424d35f2022a8",
".git/objects/aa/d799d3e14430b8cc156e7bc89a7b3318532e65": "79ea14853ada1a0ff3da6013b574cac2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/f4c037fb10fc57089e77284ba1c73954f49554": "577241b224f2469cf888b54459f9bae6",
".git/objects/b4/727fe53e737168e53d01f398dc1531bc993172": "7aa659792207ca617de5bbbb9dbe2b35",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/8c150ad4b7bc2f0da4fa7f27ed721c1c53dba9": "d6514ddbd002b13cb2dd4349b52a9491",
".git/objects/bd/21e4c6f1bac4eaca957b17f440134b991d7651": "17d4d16ad6c543390ed4ef56135da7f4",
".git/objects/bd/c77f03a846b5474146b1667592884edd8d7462": "22b4b4d8e295d5c2d63afd7358a21df4",
".git/objects/be/2dbfe05686dc0be62cbd107dea5b8d3c3bf8b8": "45966eb6c95a7b569270d521a90d8f04",
".git/objects/cb/682377ff4dcebe22f501f0f555d02e92ddd854": "895ae1c36b87c52959f0103d2fca4f76",
".git/objects/cd/09eef4d2ad4327cdc1686179b80b47f868f519": "15b7578c99b67558f58b7b0b120cf11b",
".git/objects/db/e4dcb1a650f0ea136ef227c988689bf298f21f": "0c5716b7daf3b7735b711231d626cbf3",
".git/objects/de/7cea0200f96e53b07be29dd28a9d222a9d2cf5": "ad9fbd94c147b5d8890a7918fdc2c3a1",
".git/objects/e3/102025af3cccff11c73955e64bf3d8b4f35a9b": "dcf8223775350a7178f483d6af70b55b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/efbeace0e3ad15e432744e2d6a25a260051cb9": "0620e441ff1c1978acd2ae4d5b0358aa",
".git/objects/e9/147cd7ae40d5915f5b18ba7b77717431e705f8": "5019e0b0626246f41ae3032e99cbc9c0",
".git/objects/ec/0781e73aef7a9365a373bee2649248fe6d4368": "a162bf6e86ab5e5cfc7e0e9a08a7e463",
".git/objects/f5/cb0ec252f4378b76679c7e3e532b3dd7a8f161": "013b2444161cfd8f64b577f044d9ac27",
".git/objects/f6/ce3fbb9e10d13f8c6cd9bd724b38500ce059d2": "717b038781398f706220a813d1e1a028",
".git/objects/fa/068fd1ee18347bfe7be20eec76ae2522204b1e": "63399649e7fce8c098d124369d5a7d60",
".git/ORIG_HEAD": "335e7d3a17be02fde955de1a0ef1cdca",
".git/refs/heads/master": "7203030fb04cf349278e366198bcf462",
".git/refs/remotes/origin/master": "7203030fb04cf349278e366198bcf462",
"assets/AssetManifest.json": "ee8e7a14d5f68023a2bac7991f06f7ec",
"assets/assets/discordicon.svg": "7594b796fb440fa1ef63ca65f6b59c55",
"assets/assets/githubicon.svg": "1bb027109345a90a9eab1e929d8669c2",
"assets/assets/magicicon.svg": "bc9d074c38dd59634bcaf9126821ff5a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ae756e59974ea6588fbb1d35eb41b2f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "8cf3e6fec612eec7f0e99bb274f8f034",
"favicon.png": "9bd90093a23b24e37c8220ba016de09c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "20e1ff6d9f9dadf0850db92db85f3f48",
"/": "20e1ff6d9f9dadf0850db92db85f3f48",
"main.dart.js": "e7cbfe1dffcc98656d07a4772c3a14c7",
"manifest.json": "a12712bc2f0379d490e1fb88ac9400bf",
"version.json": "281f2a7b1646c3dea6feea25f04fa556"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
