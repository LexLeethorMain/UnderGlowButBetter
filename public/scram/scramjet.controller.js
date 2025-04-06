(() => { // webpackBootstrap
var __webpack_modules__ = ({
"./src/controller/frame.ts": 
/*!*********************************!*\
  !*** ./src/controller/frame.ts ***!
  \*********************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScramjetFrame: () => (ScramjetFrame)
});
/* ESM import */var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbols */ "./src/symbols.ts");
/* provided dependency */ var dbg = __webpack_require__(/*! ./src/log.ts */ "./src/log.ts")["default"];

class ScramjetFrame extends EventTarget {
    controller;
    frame;
    constructor(controller, frame){
        super(), this.controller = controller, this.frame = frame;
        frame[_symbols__WEBPACK_IMPORTED_MODULE_0__.SCRAMJETFRAME] = this;
    }
    get client() {
        return this.frame.contentWindow.window[_symbols__WEBPACK_IMPORTED_MODULE_0__.SCRAMJETCLIENT];
    }
    get url() {
        return this.client.url;
    }
    go(url) {
        if (url instanceof URL) url = url.toString();
        dbg.log("navigated to", url);
        this.frame.src = this.controller.encodeUrl(url);
    }
    back() {
        this.frame.contentWindow?.history.back();
    }
    forward() {
        this.frame.contentWindow?.history.forward();
    }
    reload() {
        this.frame.contentWindow?.location.reload();
    }
}


}),
"./src/log.ts": 
/*!********************!*\
  !*** ./src/log.ts ***!
  \********************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    fmt: function(severity, message, ...args) {
        const old = Error.prepareStackTrace;
        Error.prepareStackTrace = (_, stack)=>{
            stack.shift(); // stack();
            stack.shift(); // fmt();
            stack.shift();
            let fmt = "";
            for(let i = 1; i < Math.min(2, stack.length); i++){
                if (stack[i].getFunctionName()) {
                    // const f = stack[i].getThis()?.constructor?.name;
                    // if (f) fmt += `${f}.`
                    fmt += `${stack[i].getFunctionName()} -> ` + fmt;
                }
            }
            fmt += stack[0].getFunctionName() || "Anonymous";
            return fmt;
        };
        const fmt = function stack() {
            try {
                throw new Error();
            } catch (e) {
                return e.stack;
            }
        }();
        Error.prepareStackTrace = old;
        const fn = console[severity] || console.log;
        const bg = {
            log: "#000",
            warn: "#f80",
            error: "#f00",
            debug: "transparent"
        }[severity];
        const fg = {
            log: "#fff",
            warn: "#fff",
            error: "#fff",
            debug: "gray"
        }[severity];
        const padding = {
            log: 2,
            warn: 4,
            error: 4,
            debug: 0
        }[severity];
        fn(`%c${fmt}%c ${message}`, `
		background-color: ${bg};
		color: ${fg};
		padding: ${padding}px;
		font-weight: bold;
		font-family: monospace;
		font-size: 0.9em;
	`, `${severity === "debug" ? "color: gray" : ""}`, ...args);
    },
    log: function(message, ...args) {
        this.fmt("log", message, ...args);
    },
    warn: function(message, ...args) {
        this.fmt("warn", message, ...args);
    },
    error: function(message, ...args) {
        this.fmt("error", message, ...args);
    },
    debug: function(message, ...args) {
        this.fmt("debug", message, ...args);
    }
});


}),
"./src/scramjet.ts": 
/*!*************************!*\
  !*** ./src/scramjet.ts ***!
  \*************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  $scramjet: () => ($scramjet),
  flagEnabled: () => (flagEnabled),
  loadCodecs: () => (loadCodecs)
});
if (!("$scramjet" in self)) {
    // @ts-expect-error ts stuff
    self.$scramjet = {
        version: {
            build: "cbad5ac",
            version: "1.0.2-dev"
        },
        codec: {},
        flagEnabled
    };
}
const $scramjet = self.$scramjet;
const nativeFunction = Function;
function loadCodecs() {
    $scramjet.codec.encode = nativeFunction("url", $scramjet.config.codec.encode);
    $scramjet.codec.decode = nativeFunction("url", $scramjet.config.codec.decode);
}
function flagEnabled(flag, url) {
    const value = $scramjet.config.flags[flag];
    for(const regex in $scramjet.config.siteFlags){
        const partialflags = $scramjet.config.siteFlags[regex];
        if (new RegExp(regex).test(url.href) && flag in partialflags) {
            return partialflags[flag];
        }
    }
    return value;
}


}),
"./src/symbols.ts": 
/*!************************!*\
  !*** ./src/symbols.ts ***!
  \************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SCRAMJETCLIENT: () => (SCRAMJETCLIENT),
  SCRAMJETCLIENTNAME: () => (SCRAMJETCLIENTNAME),
  SCRAMJETFRAME: () => (SCRAMJETFRAME)
});
// see types.d.ts for what these mean
const SCRAMJETCLIENTNAME = "scramjet client global";
const SCRAMJETCLIENT = Symbol.for(SCRAMJETCLIENTNAME);
const SCRAMJETFRAME = Symbol.for("scramjet frame handle");


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {

/*!*********************************!*\
  !*** ./src/controller/index.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScramjetController: () => (ScramjetController)
});
/* ESM import */var _frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frame */ "./src/controller/frame.ts");
/* ESM import */var _scramjet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scramjet */ "./src/scramjet.ts");
/* provided dependency */ var dbg = __webpack_require__(/*! ./src/log.ts */ "./src/log.ts")["default"];


class ScramjetController {
    db;
    constructor(config){
        // sane ish defaults
        const defaultConfig = {
            prefix: "/scramjet/",
            globals: {
                wrapfn: "$scramjet$wrap",
                wrapthisfn: "$scramjet$wrapthis",
                trysetfn: "$scramjet$tryset",
                importfn: "$scramjet$import",
                rewritefn: "$scramjet$rewrite",
                metafn: "$scramjet$meta",
                setrealmfn: "$scramjet$setrealm",
                pushsourcemapfn: "$scramjet$pushsourcemap"
            },
            files: {
                wasm: "/scramjet.wasm.js",
                shared: "/scramjet.shared.js",
                worker: "/scramjet.worker.js",
                client: "/scramjet.client.js",
                sync: "/scramjet.sync.js"
            },
            flags: {
                serviceworkers: false,
                syncxhr: false,
                naiiveRewriter: false,
                strictRewrites: true,
                rewriterLogs: false,
                captureErrors: true,
                cleanErrors: false,
                scramitize: false,
                sourcemaps: true
            },
            siteFlags: {},
            codec: {
                encode: `if (!url) return url;
					return encodeURIComponent(url);`,
                decode: `if (!url) return url;
					return decodeURIComponent(url);`
            }
        };
        const deepMerge = (target, source)=>{
            for(const key in source){
                if (source[key] instanceof Object && key in target) {
                    Object.assign(source[key], deepMerge(target[key], source[key]));
                }
            }
            return Object.assign(target || {}, source);
        };
        _scramjet__WEBPACK_IMPORTED_MODULE_1__.$scramjet.config = deepMerge(defaultConfig, config);
    }
    async init() {
        (0,_scramjet__WEBPACK_IMPORTED_MODULE_1__.loadCodecs)();
        await this.openIDB();
        navigator.serviceWorker.controller?.postMessage({
            scramjet$type: "loadConfig",
            config: _scramjet__WEBPACK_IMPORTED_MODULE_1__.$scramjet.config
        });
        dbg.log("config loaded");
    }
    createFrame(frame) {
        if (!frame) {
            frame = document.createElement("iframe");
        }
        return new _frame__WEBPACK_IMPORTED_MODULE_0__.ScramjetFrame(this, frame);
    }
    encodeUrl(url) {
        if (url instanceof URL) url = url.toString();
        return _scramjet__WEBPACK_IMPORTED_MODULE_1__.$scramjet.config.prefix + _scramjet__WEBPACK_IMPORTED_MODULE_1__.$scramjet.codec.encode(url);
    }
    decodeUrl(url) {
        if (url instanceof URL) url = url.toString();
        return _scramjet__WEBPACK_IMPORTED_MODULE_1__.$scramjet.codec.decode(url);
    }
    async openIDB() {
        const db = indexedDB.open("$scramjet", 1);
        return new Promise((resolve, reject)=>{
            db.onsuccess = async ()=>{
                this.db = db.result;
                await this.#saveConfig();
                resolve(db.result);
            };
            db.onupgradeneeded = ()=>{
                const res = db.result;
                if (!res.objectStoreNames.contains("config")) {
                    res.createObjectStore("config");
                }
                if (!res.objectStoreNames.contains("cookies")) {
                    res.createObjectStore("cookies");
                }
            };
            db.onerror = ()=>reject(db.error);
        });
    }
    async #saveConfig() {
        if (!this.db) {
            console.error("Store not ready!");
            return;
        }
        const tx = this.db.transaction("config", "readwrite");
        const store = tx.objectStore("config");
        console.log(store.getAll());
        const req = store.put(_scramjet__WEBPACK_IMPORTED_MODULE_1__.$scramjet.config, "config");
        return new Promise((resolve, reject)=>{
            req.onsuccess = resolve;
            req.onerror = reject;
        });
    }
    async modifyConfig(config) {
        _scramjet__WEBPACK_IMPORTED_MODULE_1__.$scramjet.config = Object.assign({}, _scramjet__WEBPACK_IMPORTED_MODULE_1__.$scramjet.config, config);
        (0,_scramjet__WEBPACK_IMPORTED_MODULE_1__.loadCodecs)();
        await this.#saveConfig();
    }
}
window.ScramjetController = ScramjetController;

})();

})()
;
//# sourceMappingURL=scramjet.controller.js.map