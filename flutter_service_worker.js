'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "0874c6208332898d93a9fc822fc75232",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "388971131df074daaba51374c5202e3b",
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
".git/index": "e3778b3b7978abcfc493af6a5fdb09cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1f63477eb2093a7605fc14eba0f4776c",
".git/logs/refs/heads/master": "1f63477eb2093a7605fc14eba0f4776c",
".git/logs/refs/remotes/origin/master": "0105b7b809ddb76a5b25ada9740a94be",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/168334d52287ed4d140e2d3571ce9ebb112f8c": "8d3af10d72e40409e4061bc9108673b1",
".git/objects/0c/a7ce46a4dd63c449a45b0d1cc542b32f6ab537": "0aedd20ff53b7c669dfd53b57420f7b2",
".git/objects/13/4d1b1874b07ea3cec21a1fae38e489df8fde4d": "7b47dd8a62f3e40dcf6d037db8c1c3dd",
".git/objects/16/64c038c2f2b2070074ecba74f394f235859ba9": "281b0a24e539d8a10b834cda187b9adf",
".git/objects/1a/6804d80ad34d73945b9d09456ee30b3fe09e9e": "922767ee3943f2140b4e9a1c57960598",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/215aaca71077907aa9312881622abfdeb94390": "9e317ca9b456d0d3086ef0015ad191bf",
".git/objects/24/a52fe439b8980f9df182ffd0677446310e4151": "b31ed8b537c7441ddab02ae37d8f284b",
".git/objects/27/8beff407a87aec3593c2219d1e7dd74fb85298": "0d31444bf5df960f701beac20727248a",
".git/objects/2a/09a1eeba6f1741c76d7dd7b0f24ca1a841e218": "86156b72650d1d19603d56a4f91a28d8",
".git/objects/2b/2458a71a5f318a30722cdbab5ce85ba9fa6414": "fe8bed03ce225ee393ce9439a3db2d3a",
".git/objects/30/238d0938e11073ee0faa349f5e98ff920fae0a": "76ce3b2108a84cd16a1869617b56f806",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/bb9c016733a4ab19645ab6317356d7e109b792": "dc2007d93a7b974ce0e75adef399bd91",
".git/objects/37/f8995defe2e6c104c5191717a802ef0a90dc1f": "145716bdc20503171471761060fd66d3",
".git/objects/3b/7b1e7705079e0f9cc3dc4c22657af91617ba42": "4cf2d555e6fe1d019f90b77e2d7a9969",
".git/objects/3f/1b6ddea841def2a14e39e438d0dd07b4586056": "535c593b7b74a337dfeb43f0e5f3885c",
".git/objects/42/59153f4ce6c431db83da6417a776685df6b5dd": "b53c863238f18945fb4ea1670b928f7e",
".git/objects/45/0c18147e46e6e22adbfa75c0a1232f883d03a8": "82c3e8261dd3b7c4d87faef829ca3e22",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/f736dbaf86459ec12a6f6f847223331f5d891f": "67a7247e08e1a4e382f0d9ed19cb7a65",
".git/objects/52/f4b57c59065575ce2f26cd045e5fa0b7d05a7b": "f6a94f9bae96a112496dcd973df35aec",
".git/objects/55/3b3c535cb2f49a9039635b6222188860b6d54b": "d0a8087211e80e3b84c8e8966476e121",
".git/objects/5a/0e915e7804e66400b99a5dbaf8da38326bfe33": "df43e738410d8c8c6a6b490096b1efb9",
".git/objects/5b/4215f7ad5bda33ccff0f47573d5e2ab078d2e9": "b6b87e6e5da00d9cbc126dd101f73e3c",
".git/objects/5b/511ec6ec875aa8f78a8a94793b24fb8821c74d": "07f453d34a7b0cfdb0aa363d4dbfa4de",
".git/objects/5b/92fa7d90eef26ac689e34984ec599f98d6f697": "8a4c86b855765692a1a33470d87fed71",
".git/objects/5f/a78eb250b94e998516243563749038eaa5b47d": "11776ee410e438471b1c616961216915",
".git/objects/63/27cbbbf04dda8f48a604c9330c2b07d39edb87": "d2f608622b80a49eed66bad8d78d9e2f",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/67/74bdfb1a077d1c4c518ec5102885f458fa5401": "38cf749cac8eba3724a3ed4a40c84ef7",
".git/objects/6d/a61e48f1fccc44fe83d67786d5090d270a6473": "f80efb9281efbe725ea6371405bedf71",
".git/objects/6f/ef5c3b231ae8a6976fe7b7074ec0355890a722": "1d5a805759a8e2a0f0c68f2c9c30596e",
".git/objects/74/311c52e128d1bc5db59851cf391440189e3d75": "f1e735ce12b4f10c5514b3f787aa67ba",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/8b66ee0915cdaea54424f91a022392ac0d84d7": "6737073f0cd7b8267a56606c63915237",
".git/objects/7f/8714710b9161d874ad3725e21c3ebad63218d1": "7b8e1bb72d5dab0de3e08e2f9bca3e8d",
".git/objects/82/56b7493f6121e00da21673e3bab5df6976f167": "d6d201a162927391e9d2efa39d577cf2",
".git/objects/84/18cb6aec00451ffae02a6a84fa858cbdd308bf": "014390008927b25ae511cb5538203dcb",
".git/objects/85/823c8a9a07784b0786ad632efe47594a71c1fe": "3ed008c94d53abef8cfcc5aa5b827f29",
".git/objects/86/08db56f069d1e27c9bcfa9fb7783fe885d4dec": "0fe090c1522d10aff3f10bdb8e80e337",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f2b50ee29b3961244a357abce4bfd6ea27234c": "9d93bdf06d6f32c16f78dd1845ba2e32",
".git/objects/8b/5df80e0dac6028cadb174c993ae15574fa0018": "10b8ca825dfda1bfb41c4e0a51bfec21",
".git/objects/8c/8751dd3865fa56c558ee1fef3e456ee99db8aa": "c6b6e901330e097d95e23d59c2eec82b",
".git/objects/97/dd7071681c757f6b302c92dced0befd2df70ed": "9cabb2eaae53ef3e998de21ab1e791a0",
".git/objects/9b/401684fb1e57688e1907d7d3953dcca6053f30": "4e5604e4c01f29b8e1e726c67f8c84dc",
".git/objects/9d/304079781687be85584bfa6817844a9ca04d0d": "f517a110ea79f4088ad7c612c01fa431",
".git/objects/a0/9d55ba9a1f23ba21a232e1ec58d4c6930e1c34": "9c13ffa859c31408f4e699c7601fe389",
".git/objects/a0/d5badde8ceac83071e83848124c6bfd7824045": "d5962bc4839069c7bb8606e9bb23ffb8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/58fec4ff1ad0422e80cf0704e29e43b4aa31ee": "52c0b9c84f10d5c91216affecbc0d0a9",
".git/objects/a3/b34de0f021da73bd1c8d10cbbec18b180e9c96": "e14c9d79c3c0d9ceadb6033aaa7e81e0",
".git/objects/a5/3a4a27e4f6c4f7c163a1c5b3efcb2e87ac18f7": "82a3d54b82a77abda0e9b18c1fe6512a",
".git/objects/a7/cdac1ac7f0c782cb62fba5b7bdc49bbe419246": "25fa8c19023fac603515d8bc4ce9b860",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/05db9c5c2ec024fafe15c4147c691c219959f3": "e042ce6f0fe7bf88e1e7d1b5745398b7",
".git/objects/aa/d799d3e14430b8cc156e7bc89a7b3318532e65": "79ea14853ada1a0ff3da6013b574cac2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/dfa8ee352225cf603dde6dfa83bda690a8d9ef": "b844d9078a0d46078264cf440fdeaedb",
".git/objects/ab/f4c037fb10fc57089e77284ba1c73954f49554": "577241b224f2469cf888b54459f9bae6",
".git/objects/ad/6acee303a02a4cf5c4ac4bf8769218318669be": "85049238781aac319ebeaa218a1e3f34",
".git/objects/ad/82af1fcc20683351dbf529cebe37fe02d192ef": "207e01ad0d594901e6261c83ce328abe",
".git/objects/ae/18a7585f78b9359ad0999ba6bce97f56da8798": "3915132f44906924754a38521a5048ca",
".git/objects/b2/3dfab399fd4062b51b57cba50f3981fb82dfe5": "0776b155666105f67e91ec2bc9a7a9a8",
".git/objects/b4/4f837eb61f0fb0678f50e11a34ca1afc99afaf": "b395ae0d0de76ee4a8a9e7667a5cf26a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/942f1b69a5c53ee97513e2621fef6a2f103edf": "25b5bcc99a617a4d79d499de3d83f354",
".git/objects/ba/00245e2fcb3288cd706b675acdb203029ee6f1": "6fceb0f903cb5b114974c065adad5529",
".git/objects/be/2dbfe05686dc0be62cbd107dea5b8d3c3bf8b8": "45966eb6c95a7b569270d521a90d8f04",
".git/objects/bf/00540f7cc010bdd9414f67fcb1e5c2d4b9310e": "5cf926947fd01ea5cd284de5af7652cb",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/c6/c08e33475c6013c6416053003b64cd11e6780d": "644539d765405ecae73633cabad4dcb2",
".git/objects/c6/c7308b986abe0b03d525ccc1a95824d07be1a1": "452234f0315483a55f0f2b8b7ba9bcea",
".git/objects/cb/682377ff4dcebe22f501f0f555d02e92ddd854": "895ae1c36b87c52959f0103d2fca4f76",
".git/objects/d1/691c109850408f0e06261c8b33682bd5820c24": "dc336a2d866bc301b33c88d32214a8d5",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/147cd7ae40d5915f5b18ba7b77717431e705f8": "5019e0b0626246f41ae3032e99cbc9c0",
".git/objects/ee/c92ff5660f77160582aac6b3b0de49487370a6": "e496d0716ea375930728782dc058354e",
".git/objects/f1/239a9a564bcc326747ebb644e9565e37ac5962": "7ac674f42a2ae41585aab10af1775149",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/2ee4ff3424f2c1ea146b799220f6b6a7a62890": "d0b90945677e8e581a70e62df3f6a6a4",
".git/objects/f5/cb0ec252f4378b76679c7e3e532b3dd7a8f161": "013b2444161cfd8f64b577f044d9ac27",
".git/objects/f9/469bcc6008e839e29e33e4954b51dcbf346b35": "56602f0ecb1debed6bfaa0d974042a03",
".git/objects/fc/d74caa41360636b6afa68d43ed564d9809df5e": "98d275e8809be71d5590bf902ab1a2e4",
".git/ORIG_HEAD": "e37b7db0f58c7acc7538c8a11f988e76",
".git/refs/heads/master": "28a2dc0247bc191d204bbf2a754ec718",
".git/refs/remotes/origin/master": "28a2dc0247bc191d204bbf2a754ec718",
"assets/AssetManifest.json": "112a9da4b377898ceec07423ff2b6eea",
"assets/assets/discordicon.svg": "7594b796fb440fa1ef63ca65f6b59c55",
"assets/assets/githubicon.svg": "1bb027109345a90a9eab1e929d8669c2",
"assets/assets/henry.png": "98afc6e1356eb0d1a43b7c59ba1eb117",
"assets/assets/magicicon.svg": "bc9d074c38dd59634bcaf9126821ff5a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ae756e59974ea6588fbb1d35eb41b2f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "9bd90093a23b24e37c8220ba016de09c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b846c391baba11ec3f8908a69844f4b9",
"/": "b846c391baba11ec3f8908a69844f4b9",
"main.dart.js": "561567c8197e1a5cc7f4afd9f7a292b7",
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
