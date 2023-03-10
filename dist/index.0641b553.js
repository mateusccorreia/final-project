// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lKzq4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var _contactDetailsPageJs = require("./scripts/pages/contact-details.page.js");
var _contactsPageJs = require("./scripts/pages/contacts.page.js");
var _loginPageJs = require("./scripts/pages/login.page.js");
var _notFoundPageJs = require("./scripts/pages/not-found.page.js");
var _signupPageJs = require("./scripts/pages/signup.page.js");
var _contactCreatePageJs = require("./scripts/pages/contact-create.page.js");
function redirectPage() {
    const root = document.querySelector("#root");
    const Router = {
        "#login": {
            component: (0, _loginPageJs.Login),
            private: false
        },
        "#signup": {
            component: (0, _signupPageJs.Signup),
            private: false
        },
        "#404": {
            component: (0, _notFoundPageJs.NotFound),
            private: false
        },
        "#contacts": {
            component: (0, _contactsPageJs.Contacts),
            private: true
        },
        "#contact-datails": {
            component: (0, _contactDetailsPageJs.ContactDetails),
            private: true
        },
        "#create-contact": {
            component: (0, _contactCreatePageJs.CreateContact),
            private: true
        }
    };
    // recupera a rota pela hash, se não existir recupera a rota #404
    const route = Router[window.location.hash] || Router["#404"];
    // valida se o usuário está autenticado em uma rota privada
    const notAuthenticated = route.private && !sessionStorage.getItem("@token");
    // verifica se não possui hash, ou seja, se é a rota raiz
    const isRootRoute = !window.location.hash;
    if (isRootRoute || notAuthenticated) {
        window.location.href = "/#login";
        return;
    }
    root.innerHTML = null;
    root.append(route.component());
}
window.addEventListener("load", ()=>{
    redirectPage();
    window.addEventListener("hashchange", redirectPage);
});

},{"./scripts/pages/contact-details.page.js":"6fDJG","./scripts/pages/contacts.page.js":"ab8dj","./scripts/pages/login.page.js":"2wcBy","./scripts/pages/not-found.page.js":"2Boad","./scripts/pages/signup.page.js":"5S5EB","./scripts/pages/contact-create.page.js":"jcAs1"}],"6fDJG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContactDetails", ()=>ContactDetails);
var _headerComponentJs = require("../components/header.component.js");
const root = document.getElementById("root");
const contactsDetails = document.createElement("div");
contactsDetails.setAttribute("id", "p-contact-details");
const ContactDetails = ()=>{
    const header = (0, _headerComponentJs.Header)();
    root.append(header);
    const contato = window.history.state;
    contactsDetails.innerHTML = `
        <a href="/#contacts">Voltar para contatos</a>

        <br>
        <p><b>Nome:</b>${contato.nome}</p>
        <p><b>Apelido:</b>${contato.apelido}</p>
        <p><b>E-mail:</b>${contato.email}</p>
        <p><b>Notas:</b>${contato.notas}</p>

        <br>
        <h3>Endereço</h3>
        <p><b>CEP:</b>${contato.endereco.cep}</p>
        <p><b>Logradouro:</b>${contato.endereco.logradouro}</p>
        <p><b>Cidade:</b>${contato.endereco.cidade}</p>
        <p><b>Estado:</b>${contato.endereco.estado}</p>
        <p><b>País:</b>${contato.endereco.pais}</p>  
        
        <br>
        <h3>Telefone</h3>
        `;
    contato.telefones.forEach((telefone)=>{
        contactsDetails.innerHTML += `
            <hr>
            <p>${telefone.tipo}</p>        
            <p>${telefone.numero}</p>        
        `;
    });
    return contactsDetails;
};

},{"../components/header.component.js":"5Zcf5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Zcf5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>Header);
const Header = ()=>{
    const header = document.createElement("header");
    header.setAttribute("id", "c-header");
    const usuario = JSON.parse(sessionStorage.getItem("@user"));
    const events = ()=>{
        const btnSair = header.querySelector("#btn-sair");
        btnSair.addEventListener("click", ()=>{
            sessionStorage.clear();
            history.replaceState(null, "", "/#login") // modifica a rota sem reload
            ;
            window.location.reload() // força o reload da página com a nova hash
            ;
        });
    };
    header.innerHTML = `
        <span>${usuario.nome}</span>
        <span>Lista de Contatos</span>
        <button id="btn-sair" type="button">Sair</button>
    `;
    events();
    return header;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ab8dj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Contacts", ()=>Contacts);
var _cardContactComponentJs = require("../components/card-contact.component.js");
var _headerComponentJs = require("../components/header.component.js");
var _contactServiceJs = require("../services/contact.service.js");
const root = document.getElementById("root");
const contacts = document.createElement("div");
contacts.setAttribute("id", "p-contacts");
const events = ()=>{
    (0, _contactServiceJs.buscarContatos)().then((contatos)=>{
        const cards = contacts.querySelector("#cards");
        contatos.data.forEach((item)=>{
            const cardContact = (0, _cardContactComponentJs.CardContact)(item);
            cards.append(cardContact);
        });
    });
};
const Contacts = ()=>{
    const header = (0, _headerComponentJs.Header)();
    root.append(header);
    contacts.innerHTML = `
        <div id="lista-contatos">
            <h1>Lista de contatos</h1>
        </div>
        <div id="cards"></div>
        <button id="btn-cadastrar" style="width: 200px;
         background: black">
         <a href="/#create-contact">
         Criar contato
         </a></button>
    `;
    events();
    return contacts;
};

},{"../components/card-contact.component.js":"cvKEN","../components/header.component.js":"5Zcf5","../services/contact.service.js":"bHr4j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvKEN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CardContact", ()=>CardContact);
var _contactService = require("../services/contact.service");
const CardContact = (contato)=>{
    const cardContact = document.createElement("div");
    cardContact.setAttribute("id", "c-card-contact");
    const events = (contato)=>{
        const [anchorDelete, anchorDetail] = cardContact.querySelectorAll("a");
        anchorDelete.addEventListener("click", (e)=>{
            e.preventDefault();
            const confirm = window.confirm(`Deseja deletar o contato ${contato.nome}?`);
            if (confirm) (0, _contactService.excluirContato)(contato.id).then(()=>{
                window.location.reload();
            });
        });
        anchorDetail.addEventListener("click", (e)=>{
            e.preventDefault();
            window.history.replaceState(contato, "", "/#contact-datails");
            window.location.reload();
        });
    };
    const text = contato.telefones.length > 1 ? "telefones cadastrados" : "telefone cadastrado";
    cardContact.innerHTML = `
        <h3>${contato.nome}</h3>
        <p>Possui <b>${contato.telefones.length}</b> ${text}</p>
        <a href="/#contacts">Excluir</a>
        <a href="/#contacts">Detalhar</a>
    `;
    events(contato);
    return cardContact;
};

},{"../services/contact.service":"bHr4j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHr4j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "criarContato", ()=>criarContato);
parcelHelpers.export(exports, "buscarContatos", ()=>buscarContatos);
parcelHelpers.export(exports, "excluirContato", ()=>excluirContato);
var _appSettings = require("../../../appSettings");
var _appSettingsDefault = parcelHelpers.interopDefault(_appSettings);
const url = `${(0, _appSettingsDefault.default).baseUrl}/contact`;
const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", sessionStorage.getItem("@token"));
const criarContato = async (data)=>{
    const options = {
        headers,
        body: JSON.stringify(data),
        method: "POST"
    };
    const response = await fetch(url, options);
    return await response.json();
};
const buscarContatos = async ()=>{
    const options = {
        headers,
        method: "GET"
    };
    const response = await fetch(url, options);
    return await response.json();
};
const excluirContato = async (idContato)=>{
    const options = {
        headers,
        body: JSON.stringify({
            idContato
        }),
        method: "DELETE"
    };
    const response = await fetch(url, options);
    return await response.json();
};

},{"../../../appSettings":"99wdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"99wdA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    baseUrl: "http://localhost:5000/v1"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wcBy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Login", ()=>Login);
var _authServiceJs = require("../services/auth.service.js");
const login = document.createElement("form");
login.setAttribute("id", "p-login");
const events = ()=>{
    login.addEventListener("submit", async (e)=>{
        e.preventDefault();
        const fd = new FormData(login);
        const data = Object.fromEntries(fd);
        (0, _authServiceJs.entrar)(data).then((response)=>{
            sessionStorage.setItem("@user", JSON.stringify(response.data));
            sessionStorage.setItem("@token", response.data.token);
            history.replaceState(null, "", "/#contacts") // modifica a rota sem reload
            ;
            window.location.reload() // força o reload da página com a nova hash
            ;
        });
    });
};
const Login = ()=>{
    login.innerHTML = `
        <h2>Faça seu login</h2>
        <div>
            <label for="email">Usuário</label>
            <input id="email" name="email" type="email" placeholder="nome do usuário"/>

            <label for="senha">Senha</label>
            <input id="senha" name="senha" type="password" placeholder="sua senha" />
        </div>

        <fildset>
            <label for="salvar">Salvar</label>
            <input name="salvar" id="salvar" type="radio" value="true" checked="checked"/>
            <label for="nao-salvar">Não salvar</label>
            <input name="salvar" id="nao-salvar" type="radio" value="false" />
        </fildset>

        <div>
            <button id="btn-entrar">Fazer login</button>
        </div>
        <p>Não tem conta? <a href="/#signup">Crie agora!</a></p>
    `;
    events();
    return login;
};

},{"../services/auth.service.js":"icwmM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"icwmM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "entrar", ()=>entrar);
var _appSettings = require("../../../appSettings");
var _appSettingsDefault = parcelHelpers.interopDefault(_appSettings);
const url = `${(0, _appSettingsDefault.default).baseUrl}/auth`;
const headers = new Headers();
headers.append("Content-Type", "application/json");
const entrar = async (data)=>{
    const options = {
        headers,
        body: JSON.stringify(data),
        method: "POST"
    };
    const response = await fetch(url, options);
    return await response.json();
};

},{"../../../appSettings":"99wdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Boad":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotFound", ()=>NotFound);
const notFound = document.createElement("div");
notFound.setAttribute("id", "p-not-found");
const SECONDS_TO_REDIRECT = 10;
let secondsToRedirect = SECONDS_TO_REDIRECT;
let interval = null;
const clear = ()=>{
    secondsToRedirect = SECONDS_TO_REDIRECT;
    clearInterval(interval);
};
const contador = ()=>{
    const em = notFound.querySelector("em");
    clearInterval(interval);
    interval = setInterval(()=>{
        em.innerHTML = --secondsToRedirect;
        console.log(secondsToRedirect);
        if (secondsToRedirect === 0) {
            clear();
            window.location.href = "/#login";
        }
    }, 1000);
};
const ancora = ()=>{
    const anchor = notFound.querySelector("a");
    anchor.addEventListener("click", clear);
};
const events = ()=>{
    contador();
    ancora();
};
const NotFound = ()=>{
    notFound.innerHTML = `
        <p>Você será redirecionado <em>${secondsToRedirect}</em></p>
        <a href="/#login">Voltar ao início</a>
    `;
    events();
    return notFound;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5S5EB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Signup", ()=>Signup);
var _userService = require("../services/user.service");
const signup = document.createElement("form");
signup.setAttribute("id", "p-signup");
const events = ()=>{
    signup.addEventListener("submit", (e)=>{
        e.preventDefault();
        const fd = new FormData(signup);
        const data = Object.fromEntries(fd);
        (0, _userService.criarUsuario)(data).then((response)=>{
            const retorno = signup.querySelector("#retorno");
            if (response.status === 409) retorno.innerText = response.mensagem;
            if (response.status === 200) window.location.href = "/#login";
        }).catch((error)=>{
            console.error(error);
        });
    });
};
const Signup = ()=>{
    signup.innerHTML = `
        <h3>Novo cadastro</h3>
        <label for="nome">Nome</label>
        <input id="nome" name="nome" type="text" />

        <label for="email">E-mail</label>
        <input id="email" name="email" type="text" />

        <label for="senha">Senha</label>
        <input id="senha" name="senha" type="password" />

        <button id="btn-criar">Criar</button>
        <p>Já tem conta? <a href="/#login">Acesse agora!</a></p>
        
        <br>

        <label id="retorno"></label>
    `;
    events();
    return signup;
};

},{"../services/user.service":"cFUX9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cFUX9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "criarUsuario", ()=>criarUsuario);
var _appSettings = require("../../../appSettings");
var _appSettingsDefault = parcelHelpers.interopDefault(_appSettings);
const url = `${(0, _appSettingsDefault.default).baseUrl}/user`;
const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Qualquer-Coisa", "Banana");
const criarUsuario = async (data)=>{
    const options = {
        headers,
        body: JSON.stringify(data),
        method: "POST"
    };
    const response = await fetch(url, options);
    return await response.json();
};

},{"../../../appSettings":"99wdA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcAs1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateContact", ()=>CreateContact);
var _contactService = require("../services/contact.service");
const createContact = document.createElement("form");
createContact.setAttribute("id", "p-create-contact");
const events = ()=>{
    createContact.addEventListener("submit", (e)=>{
        e.preventDefault();
        const fd = new FormData(createContact);
        console.log(fd);
        const data = Object.fromEntries(fd);
        console.log(data);
        const telefones = [
            {
                tipo: data["tipo-telefone-1"],
                numero: data["numero-1"]
            },
            {
                tipo: data["tipo-telefone-2"],
                numero: data["numero-2"]
            },
            {
                tipo: data["tipo-telefone-3"],
                numero: data["numero-3"]
            }
        ];
        data.telefones = telefones;
        delete data.numero;
        delete data.numero;
        delete data.numero;
        console.log(data);
        (0, _contactService.criarContato)(data).then((response)=>{
            const retorno = createContact.querySelector("#retorno");
            if (response.status === 409) retorno.innerText = response.mensagem;
            if (response.status === 200) window.location.href = "/#contacts";
        }).catch((error)=>{
            console.error(error);
        });
    });
};
const CreateContact = ()=>{
    createContact.innerHTML = `
        <h3 id="novo-contato">Novo contato</h3>
        <div id="label-cadastro">
            <label for="nome">Nome</label>
            <input id="nome" name="nome" type="text" placeholder="Insira o nome"/>
            <label for="email">E-mail</label>
            <input id="email" name="email" type="text" placeholder="Insira o e-mail"/>

            <h4>Telefones</h4>

            <fieldset>
                <select name="tipo-telefone-1" style="display: block;">
                    <option value="casa">Casa</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="celular">Celular</option>
                </select>
                <input name="numero-1" type="phone" placeholder="insira o número">
            
                <select name="tipo-telefone-2" style="display: block;">
                    <option value="casa">Casa</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="celular">Celular</option>
                </select>
                <input name="numero-2" type="phone" placeholder="insira o número">
            
                <select name="tipo-telefone-3" style="display: block";>
                    <option value="casa">Casa</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="celular">Celular</option>
                </select>
                <input name="numero-3" type="phone" placeholder="insira o número">
            </fieldset>

        </div>

        <button id="btn-criar" style="width: 150px">Salvar</button>

        <br>

        <label id="retorno"></label>
    `;
    events();
    return createContact;
};

},{"../services/contact.service":"bHr4j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lKzq4","bNKaB"], "bNKaB", "parcelRequire63f4")

//# sourceMappingURL=index.0641b553.js.map
