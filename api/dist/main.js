/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var app = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nvar PORT = process.env.PORT;\nvar port = PORT || 5000;\napp.listen(port, function () {\n  console.log(\"listening at port \".concat(port));\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar expressip = __webpack_require__(/*! express-ip */ \"express-ip\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar app = express();\n\nvar uuid = __webpack_require__(/*! uuid */ \"uuid\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar api = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\"); // configure middlewares\n\n\napp.set('trust proxy', true);\napp.use(express.json());\napp.use(express.urlencoded({\n  extended: true\n}));\napp.use(cors({\n  credentials: true,\n  origin: true\n}));\napp.use(expressip().getIpInfoMiddleware);\napp.use(api);\n\nif (false) {}\n\nmodule.exports = app;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/middlewares/loginMid.js":
/*!*************************************!*\
  !*** ./src/middlewares/loginMid.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar _require = __webpack_require__(/*! google-auth-library */ \"google-auth-library\"),\n    auth = _require.auth;\n\nvar client = auth.fromAPIKey(\"367830743096-1kekcsp2u216kna860tde6s39h27t0cr.apps.googleusercontent.com\");\n\nvar loginMid = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var serverError, oauthError, _req$body, email, password, tokenId, viaGoogle, userData, googleRes, userInfo;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // server side validation\n            serverError = {\n              err: 'Server error: Something went wrong checking authorization'\n            };\n            oauthError = {\n              err: 'OAuth failed to give email and name!'\n            };\n            _context.prev = 2;\n            _req$body = req.body, email = _req$body.email, password = _req$body.password, tokenId = _req$body.tokenId; // console.log('trying to login with', req.body);\n            // logging in via email\n\n            console.log(req.body);\n\n            if (!(password && email)) {\n              _context.next = 9;\n              break;\n            }\n\n            viaGoogle = false;\n            _context.next = 14;\n            break;\n\n          case 9:\n            if (!tokenId) {\n              _context.next = 13;\n              break;\n            }\n\n            viaGoogle = true;\n            _context.next = 14;\n            break;\n\n          case 13:\n            return _context.abrupt(\"return\", res.status(422).send({\n              err: 'Please fill all fields'\n            }));\n\n          case 14:\n            if (!viaGoogle) {\n              _context.next = 26;\n              break;\n            }\n\n            _context.next = 17;\n            return client.verifyIdToken({\n              idToken: tokenId\n            });\n\n          case 17:\n            googleRes = _context.sent;\n            // console.log(\"getting user info\");\n            userInfo = googleRes.getPayload();\n            name = userInfo.name;\n            email = userInfo.email;\n\n            if (!(!name || !email)) {\n              _context.next = 23;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(500).send(oauthError));\n\n          case 23:\n            userData = {\n              email: email,\n              google_oauth: true\n            }; // console.log(\"got user data from google\", userData);\n\n            _context.next = 27;\n            break;\n\n          case 26:\n            userData = {\n              email: email.trim().toLowerCase(),\n              password: password,\n              google_oauth: false\n            };\n\n          case 27:\n            req.body.user = userData; // console.log('login data',userData);\n\n            return _context.abrupt(\"return\", next());\n\n          case 31:\n            _context.prev = 31;\n            _context.t0 = _context[\"catch\"](2);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send(serverError));\n\n          case 35:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 31]]);\n  }));\n\n  return function loginMid(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = loginMid;\n\n//# sourceURL=webpack:///./src/middlewares/loginMid.js?");

/***/ }),

/***/ "./src/routes/auth/index.js":
/*!**********************************!*\
  !*** ./src/routes/auth/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar login = __webpack_require__(/*! ./login */ \"./src/routes/auth/login.js\"); // const changePassword = require('./changePassword');\n// const recoverPassword = require('./recoverPassword');\n\n\nvar loginMid = __webpack_require__(/*! ../../middlewares/loginMid */ \"./src/middlewares/loginMid.js\"); // const logout = require('./logout');\n\n\nrouter.post('/login', login); // router.post('/recoverPassword', recoverPassword);\n// router.post('/changePassword', changePassword);\n// router.post('/logout', logout);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/auth/index.js?");

/***/ }),

/***/ "./src/routes/auth/login.js":
/*!**********************************!*\
  !*** ./src/routes/auth/login.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// determine if native or google auth is being requestsed from\n// route accordingly\n// learn an api response standard\n// learn how to do proper error handling\nvar getLoginMode = function getLoginMode(_ref) {\n  var email = _ref.email,\n      password = _ref.password,\n      tokenId = _ref.tokenId;\n\n  if (email && password) {\n    return 'native_auth';\n  } else if (tokenId) {\n    return 'oauth';\n  } else {\n    return 'insufficient';\n  }\n};\n\nmodule.exports = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$body, email, password, tokenId, LOGIN_MODE;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _req$body = req.body, email = _req$body.email, password = _req$body.password, tokenId = _req$body.tokenId;\n            LOGIN_MODE = getLoginMode(req.body);\n\n            if (!(LOGIN_MODE === 'oauth')) {\n              _context.next = 7;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.send('loging in via oauth'));\n\n          case 7:\n            if (!(LOGIN_MODE === 'native_auth')) {\n              _context.next = 11;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.send('loging in via native auth'));\n\n          case 11:\n            return _context.abrupt(\"return\", res.status(422).send('Please fill in all fields, insufficient data'));\n\n          case 12:\n            return _context.abrupt(\"return\", res.send('logged in!'));\n\n          case 15:\n            _context.prev = 15;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            res.send('500 error');\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 15]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/routes/auth/login.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar router = __webpack_require__(/*! express */ \"express\").Router();\n\nvar authRouter = __webpack_require__(/*! ./auth */ \"./src/routes/auth/index.js\");\n\nrouter.get('/', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", res.send('Server is running but under construction'));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nrouter.use('/', authRouter);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi @babel/polyfill ./src/app.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/app.js */\"./src/app.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/app.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-ip":
/*!*****************************!*\
  !*** external "express-ip" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-ip\");\n\n//# sourceURL=webpack:///external_%22express-ip%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "google-auth-library":
/*!**************************************!*\
  !*** external "google-auth-library" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"google-auth-library\");\n\n//# sourceURL=webpack:///external_%22google-auth-library%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });