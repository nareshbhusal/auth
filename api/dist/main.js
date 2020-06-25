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

/***/ "./src/api/auth/changePassword.js":
/*!****************************************!*\
  !*** ./src/api/auth/changePassword.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ../../controllers/user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar getUser = __webpack_require__(/*! ../../controllers/user/getUser */ \"./src/controllers/user/getUser.js\");\n\nvar recoveryWindowPassed = __webpack_require__(/*! ../../utils/recoveryWindowPassed */ \"./src/utils/recoveryWindowPassed.js\");\n\nvar isHashValid = function isHashValid(incoming_hash, user) {\n  var pass_recovery_blob = user.pass_recovery_blob;\n  var hash = pass_recovery_blob.hash;\n  console.log(!!hash, hash == incoming_hash, !recoveryWindowPassed(pass_recovery_blob));\n  return hash && hash == incoming_hash && !recoveryWindowPassed(pass_recovery_blob);\n};\n\nvar isPassFormatValid = function isPassFormatValid(password) {\n  var minPassLength = 8;\n\n  if (password && typeof password === 'string' && password.length >= minPassLength) {\n    return true;\n  }\n\n  return false;\n};\n\nvar changePassword = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var passLengthError, _req$body, hash, password, email, user, id, pass_recovery_blob, newPass_recovery_blob;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            passLengthError = {\n              err: \"Password too short, minumum length: \".concat(minPassLength, \".\")\n            };\n            _context.prev = 1;\n            _req$body = req.body, hash = _req$body.hash, password = _req$body.password;\n\n            if (isPassFormatValid(password)) {\n              _context.next = 5;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(409).send(passLengthError));\n\n          case 5:\n            email = hash.slice(44);\n            _context.next = 8;\n            return getUser({\n              email: email\n            });\n\n          case 8:\n            user = _context.sent;\n            console.log(user.name);\n\n            if (!user) {\n              _context.next = 19;\n              break;\n            }\n\n            id = user.id, pass_recovery_blob = user.pass_recovery_blob;\n            newPass_recovery_blob = _objectSpread(_objectSpread({}, pass_recovery_blob), {}, {\n              hash: '',\n              genTime: ''\n            });\n            console.log(isHashValid(hash, user), password);\n\n            if (!isHashValid(hash, user)) {\n              _context.next = 18;\n              break;\n            }\n\n            _context.next = 17;\n            return updateUser(id, {\n              password: password,\n              pass_recovery_blob: newPass_recovery_blob\n            });\n\n          case 17:\n            return _context.abrupt(\"return\", res.send({\n              msg: 'Password changed successfully!',\n              id: id\n            }));\n\n          case 18:\n            return _context.abrupt(\"return\", res.status(400).send({\n              err: \"Recovery token isn't present or expired.\"\n            }));\n\n          case 19:\n            return _context.abrupt(\"return\", res.status(400).send({\n              err: 'Unknown issue. Please contact support!'\n            }));\n\n          case 22:\n            _context.prev = 22;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Error changing password!'\n            }));\n\n          case 26:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 22]]);\n  }));\n\n  return function changePassword(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = changePassword;\n\n//# sourceURL=webpack:///./src/api/auth/changePassword.js?");

/***/ }),

/***/ "./src/api/auth/index.js":
/*!*******************************!*\
  !*** ./src/api/auth/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar login = __webpack_require__(/*! ./login */ \"./src/api/auth/login.js\");\n\nvar changePassword = __webpack_require__(/*! ./changePassword */ \"./src/api/auth/changePassword.js\");\n\nvar recoverPassword = __webpack_require__(/*! ./recoverPassword */ \"./src/api/auth/recoverPassword.js\");\n\nvar loginMid = __webpack_require__(/*! ../../middlewares/loginMid */ \"./src/middlewares/loginMid.js\");\n\nvar logout = __webpack_require__(/*! ./logout */ \"./src/api/auth/logout.js\");\n\nrouter.post('/login', loginMid, login);\nrouter.post('/recoverPassword', recoverPassword);\nrouter.post('/changePassword', changePassword);\nrouter.post('/logout', logout);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/api/auth/index.js?");

/***/ }),

/***/ "./src/api/auth/login.js":
/*!*******************************!*\
  !*** ./src/api/auth/login.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateSessionIDs = __webpack_require__(/*! ../../controllers/session/updateSessionIDs */ \"./src/controllers/session/updateSessionIDs.js\");\n\nvar addCookie = __webpack_require__(/*! ../../controllers/session/addCookie */ \"./src/controllers/session/addCookie.js\");\n\nvar getUser = __webpack_require__(/*! ../../controllers/user/getUser */ \"./src/controllers/user/getUser.js\");\n\nvar login = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var user, userInRecords, id;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            user = req.body.user; //\treturn res.send('Login via native auth please')\n\n            _context.prev = 1;\n            _context.next = 4;\n            return getUser({\n              email: user.email\n            });\n\n          case 4:\n            userInRecords = _context.sent;\n\n            if (!userInRecords) {\n              _context.next = 18;\n              break;\n            }\n\n            if (!(userInRecords.google_oauth && user.password)) {\n              _context.next = 11;\n              break;\n            }\n\n            console.log(\"registered via google\"); // registered via google but attempting to\n            // log in with password\n\n            return _context.abrupt(\"return\", res.status(401).send({\n              err: 'Try login in with google!'\n            }));\n\n          case 11:\n            if (!(userInRecords.google_oauth || userInRecords.password === user.password)) {\n              _context.next = 18;\n              break;\n            }\n\n            // google oauth verified or correct password\n            console.log(\"google oauth verified or correct password\");\n            _context.next = 15;\n            return updateSessionIDs(userInRecords, req.sessionID);\n\n          case 15:\n            // set user on cookie\n            addCookie(req, userInRecords);\n            id = userInRecords.id;\n            return _context.abrupt(\"return\", res.send({\n              msg: 'Logged in!',\n              id: id\n            }));\n\n          case 18:\n            console.log(\"email doesn't exist\");\n            return _context.abrupt(\"return\", res.status(401).send({\n              err: 'Wrong password or email!'\n            }));\n\n          case 22:\n            _context.prev = 22;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Something went wrong logging in!'\n            }));\n\n          case 26:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 22]]);\n  }));\n\n  return function login(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = login;\n\n//# sourceURL=webpack:///./src/api/auth/login.js?");

/***/ }),

/***/ "./src/api/auth/logout.js":
/*!********************************!*\
  !*** ./src/api/auth/logout.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar getUser = __webpack_require__(/*! ../../controllers/user/getUser */ \"./src/controllers/user/getUser.js\");\n\nvar clearSession = __webpack_require__(/*! ../../controllers/session/clearSession */ \"./src/controllers/session/clearSession.js\");\n\nvar logout = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var userId, user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // if (!req.session) {\n            //     return res.status(400).send({ err: 'Already logged out!' });\n            // }\n            // Clear session_id from the database\n            console.log(req.session, req.sessionID);\n\n            if (!req.session.user) {\n              _context.next = 16;\n              break;\n            }\n\n            _context.prev = 2;\n            userId = req.session.user.id;\n            _context.next = 6;\n            return getUser({\n              id: userId\n            });\n\n          case 6:\n            user = _context.sent;\n\n            if (!user) {\n              _context.next = 11;\n              break;\n            }\n\n            _context.next = 10;\n            return clearSession(req, user);\n\n          case 10:\n            return _context.abrupt(\"return\", res.status(200).send({\n              msg: 'User logged out!'\n            }));\n\n          case 11:\n            _context.next = 16;\n            break;\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](2);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'something went wrong while trying to log out!'\n            }));\n\n          case 16:\n            return _context.abrupt(\"return\", res.status(200).send({\n              msg: 'Already logged out but okay!'\n            }));\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 13]]);\n  }));\n\n  return function logout(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = logout;\n\n//# sourceURL=webpack:///./src/api/auth/logout.js?");

/***/ }),

/***/ "./src/api/auth/recoverPassword.js":
/*!*****************************************!*\
  !*** ./src/api/auth/recoverPassword.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ../../controllers/user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar getUser = __webpack_require__(/*! ../../controllers/user/getUser */ \"./src/controllers/user/getUser.js\");\n\nvar uuid = __webpack_require__(/*! uuid */ \"uuid\");\n\nvar sendRecoveryEmail = __webpack_require__(/*! ../../utils/sendRecoveryEmail */ \"./src/utils/sendRecoveryEmail.js\");\n\nvar recoveryWindowPassed = __webpack_require__(/*! ../../utils/recoveryWindowPassed */ \"./src/utils/recoveryWindowPassed.js\");\n\nvar recoverPassword = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var email, userInRecords, id, pass_recovery_blob, new_recovery_blob, name, google_oauth, _pass_recovery_blob, hash;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            console.log('request to recover password');\n            email = req.body.email;\n\n            if (email) {\n              _context.next = 5;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(400).send({\n              err: 'Email not provided'\n            }));\n\n          case 5:\n            _context.next = 7;\n            return getUser({\n              email: email\n            });\n\n          case 7:\n            userInRecords = _context.sent;\n\n            if (!userInRecords) {\n              _context.next = 23;\n              break;\n            }\n\n            console.log('valid email');\n            id = userInRecords.id, pass_recovery_blob = userInRecords.pass_recovery_blob;\n            pass_recovery_blob = pass_recovery_blob || {}; // evaluate if last recovery attempt window is still open\n\n            if (!recoveryWindowPassed(pass_recovery_blob)) {\n              _context.next = 22;\n              break;\n            }\n\n            // if not, attach a json blob with uuid and generation time\n            new_recovery_blob = {\n              hash: \"\".concat(uuid().toString().slice(0, 36), \"/?email=\").concat(email),\n              genTime: new Date().getTime().toString(),\n              requests: pass_recovery_blob.requests || 0 + 1\n            };\n            _context.next = 16;\n            return updateUser(id, {\n              pass_recovery_blob: new_recovery_blob\n            });\n\n          case 16:\n            // SEND EMAIL\n            name = userInRecords.name, google_oauth = userInRecords.google_oauth;\n            _pass_recovery_blob = pass_recovery_blob, hash = _pass_recovery_blob.hash;\n            _context.next = 20;\n            return sendRecoveryEmail({\n              email: email,\n              name: name,\n              hash: hash,\n              google_oauth: google_oauth\n            });\n\n          case 20:\n            _context.next = 23;\n            break;\n\n          case 22:\n            return _context.abrupt(\"return\", res.status(300).send({\n              err: 'Please wait 30 minutes before attempting again.'\n            }));\n\n          case 23:\n            return _context.abrupt(\"return\", res.status(200).send({\n              msg: 'You should get an email if the email is registered.'\n            }));\n\n          case 26:\n            _context.prev = 26;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Server error recovering password'\n            }));\n\n          case 30:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 26]]);\n  }));\n\n  return function recoverPassword(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = recoverPassword;\n\n//# sourceURL=webpack:///./src/api/auth/recoverPassword.js?");

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar router = __webpack_require__(/*! express */ \"express\").Router();\n\nvar authRouter = __webpack_require__(/*! ./auth */ \"./src/api/auth/index.js\");\n\nrouter.get('/', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", res.send('Server is running!'));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nrouter.use('/', authRouter);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/api/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var app = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nvar PORT = process.env.PORT;\nvar port = PORT || 5000;\napp.listen(port, function () {\n  console.log(\"listening at port \".concat(port));\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _process$env = process.env,\n    DB_NAME = \"auth\",\n    HOST = \"postgres\",\n    DB_USER = \"postgres\",\n    DB_PASS = \"devpostgresauth\"; //console.log(DB_NAME, HOST, DB_USER, DB_PASS);\n\nmodule.exports = new Sequelize(DB_NAME, DB_USER, DB_PASS, {\n  host: HOST,\n  dialect: 'postgres',\n  pool: {\n    max: 5,\n    min: 0,\n    acquire: 30000,\n    idle: 1000\n  },\n  define: {\n    timestamps: false\n  } //logging: false\n\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/controllers/session/addCookie.js":
/*!**********************************************!*\
  !*** ./src/controllers/session/addCookie.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// @ param req is the request object\n// @param user is the user fetched from the database\n// function sets data to the cookie\nvar addCookie = function addCookie(req, userInRecords) {\n  req.session.user = {};\n  /*REMOVE LATER*/\n\n  req.session.user.email = userInRecords.email;\n  req.session.user.id = userInRecords.id;\n};\n\nmodule.exports = addCookie;\n\n//# sourceURL=webpack:///./src/controllers/session/addCookie.js?");

/***/ }),

/***/ "./src/controllers/session/clearSession.js":
/*!*************************************************!*\
  !*** ./src/controllers/session/clearSession.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ../user/updateUser */ \"./src/controllers/user/updateUser.js\"); // clear session id from the browser and the database\n\n\nvar clearSession = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, user) {\n    var session_ids;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            session_ids = user.session_ids;\n            session_ids = session_ids.filter(function (session_id) {\n              return session_id !== req.sessionID;\n            });\n            _context.next = 4;\n            return updateUser(user.id, {\n              session_ids: session_ids\n            });\n\n          case 4:\n            req.session.destroy(function (err) {\n              if (err) {\n                return console.log(err);\n              }\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function clearSession(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = clearSession;\n\n//# sourceURL=webpack:///./src/controllers/session/clearSession.js?");

/***/ }),

/***/ "./src/controllers/session/updateSessionIDs.js":
/*!*****************************************************!*\
  !*** ./src/controllers/session/updateSessionIDs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ../user/updateUser */ \"./src/controllers/user/updateUser.js\"); // takes the user fetched from the database freshly,\n// and updates it's session_ids on the database\n// logic -- keep number of session id below 5\n\n\nvar updateSessionIDs = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user, sessionID) {\n    var MAX_SESSIONS, session_ids;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            MAX_SESSIONS = 4;\n            session_ids = user.session_ids || [];\n            console.log('new session_id', sessionID);\n            console.log('old session_ids', session_ids);\n            console.log('typeof session_ids', _typeof(session_ids.length));\n\n            if (typeof session_ids.length === 'number') {\n              session_ids.unshift(sessionID);\n\n              if (session_ids.length > MAX_SESSIONS) {\n                session_ids.pop();\n              }\n            }\n\n            console.log('updated session_ids', session_ids);\n            _context.prev = 7;\n            _context.next = 10;\n            return updateUser(user.id, {\n              session_ids: session_ids,\n              last_accessed: new Date().getTime()\n            });\n\n          case 10:\n            _context.next = 15;\n            break;\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](7);\n            console.log(_context.t0);\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[7, 12]]);\n  }));\n\n  return function updateSessionIDs(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = updateSessionIDs;\n\n//# sourceURL=webpack:///./src/controllers/session/updateSessionIDs.js?");

/***/ }),

/***/ "./src/controllers/user/getUser.js":
/*!*****************************************!*\
  !*** ./src/controllers/user/getUser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\"); // @param userData is an object with the user data to match in db\n\n\nvar getUser = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userData) {\n    var userInRecords;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('getting user from db');\n            _context.next = 3;\n            return User.findOne({\n              where: _objectSpread({}, userData)\n            });\n\n          case 3:\n            userInRecords = _context.sent;\n            console.log(userInRecords);\n            return _context.abrupt(\"return\", userInRecords);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getUser(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getUser;\n\n//# sourceURL=webpack:///./src/controllers/user/getUser.js?");

/***/ }),

/***/ "./src/controllers/user/updateUser.js":
/*!********************************************!*\
  !*** ./src/controllers/user/updateUser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\"); // @param id - user id\n// @param dataToUpdate - object with user data to update\n\n\nvar updateUser = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, dataToUpdate) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return User.update(_objectSpread({}, dataToUpdate), {\n              where: {\n                id: id\n              }\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function updateUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = updateUser;\n\n//# sourceURL=webpack:///./src/controllers/user/updateUser.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar expressip = __webpack_require__(/*! express-ip */ \"express-ip\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar db = __webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar app = express();\n\nvar uuid = __webpack_require__(/*! uuid */ \"uuid\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar api = __webpack_require__(/*! ./api */ \"./src/api/index.js\"); // configure middlewares\n\n\napp.set('trust proxy', true);\napp.use(express.json());\napp.use(express.urlencoded({\n  extended: true\n}));\napp.use(cors({\n  credentials: true,\n  origin: true\n})); // connect with db\n\ndb.authenticate().then(function () {\n  return console.log('DATABASE CONNECTED!');\n})[\"catch\"](function (err) {\n  return console.log('DATABASE AUTHENTICATION FAILED!', err);\n});\napp.use(expressip().getIpInfoMiddleware);\napp.use(api);\n\nif (false) {}\n\nmodule.exports = app;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/middlewares/loginMid.js":
/*!*************************************!*\
  !*** ./src/middlewares/loginMid.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar _require = __webpack_require__(/*! google-auth-library */ \"google-auth-library\"),\n    auth = _require.auth;\n\nvar client = auth.fromAPIKey(\"367830743096-1kekcsp2u216kna860tde6s39h27t0cr.apps.googleusercontent.com\");\n\nvar loginMid = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var serverError, oauthError, _req$body, email, password, tokenId, viaGoogle, userData, googleRes, userInfo;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // server side validation\n            serverError = {\n              err: 'Server error: Something went wrong checking authorization'\n            };\n            oauthError = {\n              err: 'OAuth failed to give email and name!'\n            };\n            _context.prev = 2;\n            _req$body = req.body, email = _req$body.email, password = _req$body.password, tokenId = _req$body.tokenId; // console.log('trying to login with', req.body);\n            // logging in via email\n\n            console.log(req.body);\n\n            if (!(password && email)) {\n              _context.next = 9;\n              break;\n            }\n\n            viaGoogle = false;\n            _context.next = 14;\n            break;\n\n          case 9:\n            if (!tokenId) {\n              _context.next = 13;\n              break;\n            }\n\n            viaGoogle = true;\n            _context.next = 14;\n            break;\n\n          case 13:\n            return _context.abrupt(\"return\", res.status(422).send({\n              err: 'Please fill all fields'\n            }));\n\n          case 14:\n            if (!viaGoogle) {\n              _context.next = 26;\n              break;\n            }\n\n            _context.next = 17;\n            return client.verifyIdToken({\n              idToken: tokenId\n            });\n\n          case 17:\n            googleRes = _context.sent;\n            // console.log(\"getting user info\");\n            userInfo = googleRes.getPayload();\n            name = userInfo.name;\n            email = userInfo.email;\n\n            if (!(!name || !email)) {\n              _context.next = 23;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(500).send(oauthError));\n\n          case 23:\n            userData = {\n              email: email,\n              google_oauth: true\n            }; // console.log(\"got user data from google\", userData);\n\n            _context.next = 27;\n            break;\n\n          case 26:\n            userData = {\n              email: email.trim().toLowerCase(),\n              password: password,\n              google_oauth: false\n            };\n\n          case 27:\n            req.body.user = userData; // console.log('login data',userData);\n\n            return _context.abrupt(\"return\", next());\n\n          case 31:\n            _context.prev = 31;\n            _context.t0 = _context[\"catch\"](2);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send(serverError));\n\n          case 35:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 31]]);\n  }));\n\n  return function loginMid(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = loginMid;\n\n//# sourceURL=webpack:///./src/middlewares/loginMid.js?");

/***/ }),

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar db = __webpack_require__(/*! ../config/database */ \"./src/config/database.js\");\n\nvar user = db.define('user', {\n  user_id: {\n    type: Sequelize.INTEGER,\n    autoIncrement: true,\n    primaryKey: true\n  },\n  fullname: {\n    type: Sequelize.STRING\n  },\n  email: {\n    type: Sequelize.STRING\n  },\n  pass: {\n    type: Sequelize.STRING\n  },\n  auth_system: {\n    type: Sequelize.STRING\n  },\n  session_ids: {\n    type: Sequelize.ARRAY(Sequelize.STRING)\n  },\n  last_accessed: {\n    type: Sequelize.STRING\n  },\n  pass_recovery_blob: {\n    type: Sequelize.JSON\n  },\n  sub_type: {\n    type: Sequelize.STRING\n  },\n  joined: {\n    type: Sequelize.STRING\n  }\n}); //SQL command to create the table\n\n/*\n\nCREATE TABLE users (\n\tuser_id SERIAL PRIMARY KEY,\n\tfullname VARCHAR(30) DEFAULT '',\n\temail VARCHAR(100),\n\tpass VARCHAR(26),\n\tauth_system VARCHAR(10) NOT NULL,\n\tsession_ids VARCHAR[],\n\tlast_accessed VARCHAR(50),\n\tpass_recovery_blob JSON DEFAULT '{}',\n\tsub_type VARCHAR(30),\n\tjoined VARCHAR(50) NOT NULL\n)\n\n*/\n\nmodule.exports = user;\n\n//# sourceURL=webpack:///./src/models/User.js?");

/***/ }),

/***/ "./src/utils/recoveryWindowPassed.js":
/*!*******************************************!*\
  !*** ./src/utils/recoveryWindowPassed.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var PASS_RECOVERY_WINDOW = 600;\nvar RECOVERY_LINK_EXPIRY = 3 * PASS_RECOVERY_WINDOW;\n\nvar recoveryWindowPassed = function recoveryWindowPassed(pass_recovery_blob) {\n  // check if the password recovery blob's hash has expired\n  // return true;\n  var hash = pass_recovery_blob.hash,\n      genTime = pass_recovery_blob.genTime;\n  var currentTime = new Date().getTime();\n\n  if (!hash || !genTime) {\n    return true;\n  }\n\n  var secondsPassed = Math.abs(currentTime - genTime) / 1000;\n  return secondsPassed > RECOVERY_LINK_EXPIRY;\n};\n\nmodule.exports = recoveryWindowPassed;\n\n//# sourceURL=webpack:///./src/utils/recoveryWindowPassed.js?");

/***/ }),

/***/ "./src/utils/sendRecoveryEmail.js":
/*!****************************************!*\
  !*** ./src/utils/sendRecoveryEmail.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar sgMail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n\nvar _process$env = process.env,\n    SENDGRID_API_KEY = _process$env.SENDGRID_API_KEY,\n    BASE_URL = _process$env.BASE_URL;\n\nvar sendRecoveryEmail = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {\n    var email, name, hash, google_oauth, htmlMessage, msg;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            email = _ref.email, name = _ref.name, hash = _ref.hash, google_oauth = _ref.google_oauth;\n            htmlMessage = \"\\n        <p>Did you forget your password, \".concat(name, \"?</p>\\n        <p>If you did, follow this link to reset your password:</p>\\n        <a href=\\\"\").concat(BASE_URL, \"/reset-password/\").concat(hash, \"\\\">CHANGE PASSWORD</a>\\n        <p>The link will expire in 30 minutes.</p>\\n        <br />\\n        <p>Ignore this message if it wasn't requested by you. Please don't hesitate to reach out to support for <i>any</i> concern.</p>\\n        <br />\\n        <p>Thank you.</p>\\n    \");\n\n            if (google_oauth) {\n              htmlMessage = \"\\n        <p>Did you forget your password, \".concat(name, \"?</p>\\n        <p>It seems that you had originally logged in via google authentication. If that isn't working, please let me know, and, follow this link to reset your password:</p>\\n        <a href=\\\"\").concat(BASE_URL, \"/reset-password/\").concat(hash, \"\\\">CHANGE PASSWORD</a>\\n        <p>The link will expire in 30 minutes.</p>\\n        <br />\\n        <p>Ignore this message if it wasn't requested by you. Please don't hesitate to reach out to support for <i>any</i> concern.</p>\\n        <br />\\n        <p>Thank you.</p>\\n    \");\n            }\n\n            if (!(!name || !email)) {\n              _context.next = 5;\n              break;\n            }\n\n            throw \"Arguments not given\";\n\n          case 5:\n            sgMail.setApiKey(SENDGRID_API_KEY);\n            msg = {\n              to: email,\n              from: email,\n              subject: \"Recover password for SaaS\",\n              html: htmlMessage\n            };\n            _context.next = 9;\n            return sgMail.send(msg);\n\n          case 9:\n            console.log('email sent');\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function sendRecoveryEmail(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nmodule.exports = sendRecoveryEmail;\n\n//# sourceURL=webpack:///./src/utils/sendRecoveryEmail.js?");

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

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sendgrid/mail\");\n\n//# sourceURL=webpack:///external_%22@sendgrid/mail%22?");

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

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

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