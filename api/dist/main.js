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

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _process$env = process.env,\n    DB_NAME = \"auth\",\n    HOST = \"postgres\",\n    DB_USER = \"postgres\",\n    DB_PASS = \"devpostgresauth\"; //console.log(DB_NAME, HOST, DB_USER, DB_PASS);\n\nmodule.exports = new Sequelize(DB_NAME, DB_USER, DB_PASS, {\n  host: HOST,\n  dialect: 'postgres',\n  pool: {\n    max: 5,\n    min: 0,\n    acquire: 30000,\n    idle: 1000\n  },\n  define: {\n    timestamps: false\n  } //logging: false\n\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/controllers/resetTicket/createResetTicket.js":
/*!**********************************************************!*\
  !*** ./src/controllers/resetTicket/createResetTicket.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar PasswordResetTicket = __webpack_require__(/*! ../../models/PasswordResetTicket */ \"./src/models/PasswordResetTicket.js\");\n\nvar uuid = __webpack_require__(/*! uuid */ \"uuid\");\n\nvar getHashedData = __webpack_require__(/*! ../../utils/getHashedData */ \"./src/utils/getHashedData.js\");\n\nvar createResetTicket = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {\n    var user_id, _ref$emailSent, emailSent, ip, TICKET_LIFE, genTime, expirationTime, token, tokenHash, ticket;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            user_id = _ref.user_id, _ref$emailSent = _ref.emailSent, emailSent = _ref$emailSent === void 0 ? true : _ref$emailSent, ip = _ref.ip;\n            TICKET_LIFE = 21; // 20 minutes\n\n            genTime = new Date().getTime().toString();\n            expirationTime = new Date();\n            expirationTime.setMinutes(TICKET_LIFE);\n            expirationTime = expirationTime.getTime().toString();\n            token = uuid();\n            _context.next = 9;\n            return getHashedData(token);\n\n          case 9:\n            tokenHash = _context.sent;\n            _context.next = 12;\n            return PasswordResetTicket.create({\n              user_id: user_id,\n              tokenHash: tokenHash,\n              genTime: genTime,\n              expirationTime: expirationTime,\n              tokenUsed: false,\n              emailSent: emailSent,\n              ip: ip\n            });\n\n          case 12:\n            ticket = _context.sent;\n            return _context.abrupt(\"return\", token);\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function createResetTicket(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nmodule.exports = createResetTicket;\n\n//# sourceURL=webpack:///./src/controllers/resetTicket/createResetTicket.js?");

/***/ }),

/***/ "./src/controllers/resetTicket/getTicket.js":
/*!**************************************************!*\
  !*** ./src/controllers/resetTicket/getTicket.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar util = __webpack_require__(/*! util */ \"util\");\n\nvar getTicket = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {\n    var token, genTime, user_id, tickets, ticketInRecords, matches;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            token = _ref.token, genTime = _ref.genTime, user_id = _ref.user_id;\n            _context.next = 3;\n            return PasswordResetTicket.findAll({\n              where: {\n                genTime: genTime\n              }\n            });\n\n          case 3:\n            tickets = _context.sent;\n            ticketInRecords = tickets[tickets.findIndex(function (t) {\n              return t.user_id == user_id && !t.tokenUsed;\n            })];\n\n            if (ticketInRecords) {\n              _context.next = 7;\n              break;\n            }\n\n            return _context.abrupt(\"return\", null);\n\n          case 7:\n            bcrypt.compare = util.promisify(bcrypt.compare);\n            _context.next = 10;\n            return bcrypt.compare(token, tokenHash);\n\n          case 10:\n            matches = _context.sent;\n\n            if (!matches) {\n              _context.next = 15;\n              break;\n            }\n\n            return _context.abrupt(\"return\", ticketInRecords);\n\n          case 15:\n            return _context.abrupt(\"return\", null);\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getTicket(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/controllers/resetTicket/getTicket.js?");

/***/ }),

/***/ "./src/controllers/session/addCookie.js":
/*!**********************************************!*\
  !*** ./src/controllers/session/addCookie.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// @ param req is the request object\n// @param user is the user fetched from the database\n// function sets data to the cookie\nvar addCookie = function addCookie(req, userInRecords) {\n  req.session.user = {};\n  /*REMOVE LATER*/\n\n  req.session.user.email = userInRecords.email;\n  req.session.user.id = userInRecords.id;\n};\n\nmodule.exports = addCookie;\n\n//# sourceURL=webpack:///./src/controllers/session/addCookie.js?");

/***/ }),

/***/ "./src/controllers/session/deleteSessionFromRedis.js":
/*!***********************************************************!*\
  !*** ./src/controllers/session/deleteSessionFromRedis.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../../store */ \"./src/store.js\"); // warning: doesn't work\n// delete session data from redis by id\n\n\nvar deleteSessionFromRedis = function deleteSessionFromRedis(session_to_delete) {\n  store.destroy(session_to_delete, function (err) {\n    if (err) {\n      console.error('Failed to delete session: ' + session_to_delete);\n      throw err;\n    }\n\n    console.log(session_to_delete + ' session deleted');\n  });\n};\n\nmodule.exports = deleteSessionFromRedis;\n\n//# sourceURL=webpack:///./src/controllers/session/deleteSessionFromRedis.js?");

/***/ }),

/***/ "./src/controllers/session/deleteUserSession.js":
/*!******************************************************!*\
  !*** ./src/controllers/session/deleteUserSession.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar getUser = __webpack_require__(/*! ../user/getUser */ \"./src/controllers/user/getUser.js\");\n\nvar updateUser = __webpack_require__(/*! ../user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar deleteSessionFromRedis = __webpack_require__(/*! ../session/deleteSessionFromRedis */ \"./src/controllers/session/deleteSessionFromRedis.js\");\n\nvar deleteUserSession = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user_id, sessionID, toDeleteAll) {\n    var userInRecords, login_sessions, new_login_sessions;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('***deleting user session***');\n            console.log(user_id);\n            _context.next = 4;\n            return getUser({\n              user_id: user_id\n            });\n\n          case 4:\n            userInRecords = _context.sent;\n            login_sessions = userInRecords.login_sessions;\n\n            if (!toDeleteAll) {\n              _context.next = 11;\n              break;\n            }\n\n            _context.next = 9;\n            return updateUser(user_id, {\n              login_sessions: []\n            });\n\n          case 9:\n            // -- and redis\n            login_sessions.forEach(function (sessionInfo) {\n              deleteSessionFromRedis(sessionInfo.sessionID);\n            });\n            return _context.abrupt(\"return\");\n\n          case 11:\n            if (sessionID) {\n              _context.next = 13;\n              break;\n            }\n\n            throw \"No sessionID to delete\";\n\n          case 13:\n            // delete given session from redis and db\n            new_login_sessions = login_sessions.filter(function (sessionInfo) {\n              return sessionInfo.sessionID !== sessionID;\n            });\n            _context.next = 16;\n            return updateUser(user_id, {\n              login_sessions: new_login_sessions\n            });\n\n          case 16:\n            deleteSessionFromRedis(sessionID);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function deleteUserSession(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = deleteUserSession;\n\n//# sourceURL=webpack:///./src/controllers/session/deleteUserSession.js?");

/***/ }),

/***/ "./src/controllers/session/isSessionAlive.js":
/*!***************************************************!*\
  !*** ./src/controllers/session/isSessionAlive.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redisClient = __webpack_require__(/*! ../../redisClient */ \"./src/redisClient.js\");\n\nvar isSessionAlive = function isSessionAlive(sessionID) {\n  redisClient.get(sessionID, function (err, reply) {\n    if (err) throw \"Error reading session from redis: \" + err;\n    return reply !== null;\n  });\n};\n\nmodule.exports = isSessionAlive;\n\n//# sourceURL=webpack:///./src/controllers/session/isSessionAlive.js?");

/***/ }),

/***/ "./src/controllers/session/updateLoginSessions.js":
/*!********************************************************!*\
  !*** ./src/controllers/session/updateLoginSessions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ../user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar store = __webpack_require__(/*! ../../store */ \"./src/store.js\");\n\nvar isSessionAlive = __webpack_require__(/*! ../../controllers/session/isSessionAlive */ \"./src/controllers/session/isSessionAlive.js\");\n\nvar deleteSessionFromRedis = __webpack_require__(/*! ../../controllers/session/deleteSessionFromRedis */ \"./src/controllers/session/deleteSessionFromRedis.js\");\n/*\n * `user` here is freshly retrieved from database\n*/\n\n\nvar MAX_SESSIONS = 4; //use common variable for this and for redis sessions\n\nvar updateSessionData = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, userInRecords) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            req.session.user_id = userInRecords.user_id; // just userId for now\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function updateSessionData(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, user) {\n    var currentSessionID, _req$useragent, browser, os, newSessionInfo, new_login_sessions, session_to_delete;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            currentSessionID = req.sessionID;\n            _req$useragent = req.useragent, browser = _req$useragent.browser, os = _req$useragent.os;\n            newSessionInfo = {\n              sessionID: currentSessionID,\n              ip: req.ip,\n              loginTime: new Date().getTime(),\n              geoLocation: undefined,\n              browser: browser,\n              os: os\n            };\n            new_login_sessions = _toConsumableArray(user.login_sessions); // update db login_sessions to remove dead sessions\n\n            new_login_sessions.filter(function (login_session) {\n              return isSessionAlive(login_session.sessionID);\n            }); // add new session\n\n            new_login_sessions.unshift(newSessionInfo); // If number of browsers exceeds MAX_SESSIONS\n\n            if (new_login_sessions.length > MAX_SESSIONS) {\n              // delete from db\n              session_to_delete = new_login_sessions[new_login_sessions.length - 1].sessionID;\n              new_login_sessions.pop(); //delete from redis\n\n              deleteSessionFromRedis(session_to_delete);\n            }\n\n            _context2.next = 9;\n            return updateSessionData(req, user);\n\n          case 9:\n            _context2.next = 11;\n            return updateUser(user.user_id, {\n              login_sessions: new_login_sessions\n            });\n\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/controllers/session/updateLoginSessions.js?");

/***/ }),

/***/ "./src/controllers/session/updateSessionIDs.js":
/*!*****************************************************!*\
  !*** ./src/controllers/session/updateSessionIDs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ../user/updateUser */ \"./src/controllers/user/updateUser.js\"); // takes the user fetched from the database freshly,\n// and updates it's session_ids on the database\n// -- keep number of session id below 5\n\n\nvar MAX_SESSIONS = 4;\n\nvar updateSessionIDs = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user, sessionID) {\n    var session_ids;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (sessionID) {\n              _context.next = 2;\n              break;\n            }\n\n            throw \"No sessionID given to updateSessionIDs\";\n\n          case 2:\n            session_ids = user.session_ids || [];\n            console.log('new session_id', sessionID);\n            console.log('old session_ids', session_ids);\n            console.log('typeof session_ids', _typeof(session_ids.length));\n\n            if (typeof session_ids.length === 'number') {\n              session_ids.unshift(sessionID);\n\n              if (session_ids.length > MAX_SESSIONS) {\n                session_ids.pop();\n              }\n            }\n\n            console.log('updated session_ids', session_ids); // save last accessed time as well\n\n            _context.next = 10;\n            return updateUser(user.id, {\n              session_ids: session_ids,\n              last_accessed: new Date().getTime()\n            });\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function updateSessionIDs(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = updateSessionIDs;\n\n//# sourceURL=webpack:///./src/controllers/session/updateSessionIDs.js?");

/***/ }),

/***/ "./src/controllers/user/createUser.js":
/*!********************************************!*\
  !*** ./src/controllers/user/createUser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar getHashedData = __webpack_require__(/*! ../../utils/getHashedData */ \"./src/utils/getHashedData.js\");\n\nvar createUser = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {\n    var fullname, email, password, joined, auth_system, photo, hashedPassword, createdUser;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            fullname = _ref.fullname, email = _ref.email, password = _ref.password, joined = _ref.joined, auth_system = _ref.auth_system, photo = _ref.photo;\n            console.log('NOW CREATING USER');\n            console.log('GENERATING HASH');\n            _context.next = 5;\n            return getHashedData(password);\n\n          case 5:\n            hashedPassword = _context.sent;\n            _context.next = 8;\n            return User.create({\n              fullname: fullname,\n              email: email,\n              pass: hashedPassword,\n              login_sessions: [],\n              joined: joined,\n              auth_system: auth_system,\n              photo: photo\n            });\n\n          case 8:\n            createdUser = _context.sent;\n            return _context.abrupt(\"return\", createdUser);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function createUser(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nmodule.exports = createUser;\n\n//# sourceURL=webpack:///./src/controllers/user/createUser.js?");

/***/ }),

/***/ "./src/controllers/user/deleteUser.js":
/*!********************************************!*\
  !*** ./src/controllers/user/deleteUser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar getUser = __webpack_require__(/*! ../../controllers/user/getUser */ \"./src/controllers/user/getUser.js\");\n\nvar updateUser = __webpack_require__(/*! ../../controllers/user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar deleteUserSession = __webpack_require__(/*! ../session/deleteUserSession */ \"./src/controllers/session/deleteUserSession.js\");\n\nmodule.exports = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user_id) {\n    var userInRecords;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return getUser({\n              user_id: user_id\n            });\n\n          case 2:\n            userInRecords = _context.sent;\n\n            if (userInRecords) {\n              _context.next = 5;\n              break;\n            }\n\n            throw \"Couldn't delete user with user_id \".concat(user_id, \". User doesn't even exist\");\n\n          case 5:\n            _context.next = 7;\n            return updateUser(user_id, {\n              deleted: true\n            });\n\n          case 7:\n            _context.next = 9;\n            return deleteUserSession(user_id, undefined, true);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/controllers/user/deleteUser.js?");

/***/ }),

/***/ "./src/controllers/user/getUser.js":
/*!*****************************************!*\
  !*** ./src/controllers/user/getUser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\"); // @param userData is an object with the user data to match in db\n\n\nvar getUser = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userData) {\n    var userInRecords;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('getting user from db');\n            console.log(userData);\n            _context.next = 4;\n            return User.findOne({\n              where: _objectSpread({}, userData)\n            });\n\n          case 4:\n            userInRecords = _context.sent;\n            return _context.abrupt(\"return\", userInRecords);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getUser(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getUser;\n\n//# sourceURL=webpack:///./src/controllers/user/getUser.js?");

/***/ }),

/***/ "./src/controllers/user/googleAuth.js":
/*!********************************************!*\
  !*** ./src/controllers/user/googleAuth.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar _require = __webpack_require__(/*! google-auth-library */ \"google-auth-library\"),\n    auth = _require.auth;\n\nvar authClient = auth.fromAPIKey(\"367830743096-1kekcsp2u216kna860tde6s39h27t0cr.apps.googleusercontent.com\");\n\nvar googleAuth = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {\n    var accessToken, tokenId, response, _response$getPayload, email, name, picture, userData;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            accessToken = _ref.accessToken, tokenId = _ref.tokenId;\n            _context.next = 3;\n            return authClient.verifyIdToken({\n              idToken: tokenId\n            });\n\n          case 3:\n            response = _context.sent;\n            _response$getPayload = response.getPayload(), email = _response$getPayload.email, name = _response$getPayload.name, picture = _response$getPayload.picture;\n            userData = {\n              email: email,\n              name: name,\n              photo: picture.slice(0, 254)\n            };\n            return _context.abrupt(\"return\", userData);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function googleAuth(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nmodule.exports = googleAuth;\n\n//# sourceURL=webpack:///./src/controllers/user/googleAuth.js?");

/***/ }),

/***/ "./src/controllers/user/isLoggedIn.js":
/*!********************************************!*\
  !*** ./src/controllers/user/isLoggedIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar getUser = __webpack_require__(/*! ./getUser */ \"./src/controllers/user/getUser.js\");\n\nvar isLoggedIn = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (req.session) {\n              _context.next = 4;\n              break;\n            }\n\n            return _context.abrupt(\"return\", false);\n\n          case 4:\n            if (req.session.user_id) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", false);\n\n          case 6:\n            return _context.abrupt(\"return\", true);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function isLoggedIn(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = isLoggedIn;\n\n//# sourceURL=webpack:///./src/controllers/user/isLoggedIn.js?");

/***/ }),

/***/ "./src/controllers/user/updateUser.js":
/*!********************************************!*\
  !*** ./src/controllers/user/updateUser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar User = __webpack_require__(/*! ../../models/User */ \"./src/models/User.js\");\n\nvar getHashedData = __webpack_require__(/*! ../../utils/getHashedData */ \"./src/utils/getHashedData.js\"); // @param id - user id\n// @param dataToUpdate - object with user data to update\n\n\nvar updateUser = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user_id, dataToUpdate) {\n    var password, hashedPassword;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            delete dataToUpdate.user_id;\n            console.log('UPDATING USER');\n            console.log(user_id); // selectively hash password\n\n            password = dataToUpdate.pass;\n\n            if (!password) {\n              _context.next = 9;\n              break;\n            }\n\n            _context.next = 7;\n            return getHashedData(password);\n\n          case 7:\n            hashedPassword = _context.sent;\n            dataToUpdate.pass = hashedPassword;\n\n          case 9:\n            _context.next = 11;\n            return User.update(_objectSpread({}, dataToUpdate), {\n              where: {\n                user_id: user_id\n              }\n            });\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function updateUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = updateUser;\n\n//# sourceURL=webpack:///./src/controllers/user/updateUser.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar db = __webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar app = express();\n\nvar uuid = __webpack_require__(/*! uuid */ \"uuid\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar sessionStore = __webpack_require__(/*! ./store */ \"./src/store.js\");\n\nvar api = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\nvar useragent = __webpack_require__(/*! express-useragent */ \"express-useragent\"); // configure middlewares\n\n\napp.use(cors({\n  credentials: true,\n  origin: true\n})); // TODO: and this?\n\napp.set('trust proxy', true); //TODO: what does this do?\n\napp.use(express.json());\napp.use(express.urlencoded({\n  extended: true\n}));\napp.use(useragent.express()); // setup redis\n\napp.use(session({\n  genid: function genid(req) {\n    return uuid(); //use UUIDs for session IDs\n  },\n  secret: \"session_top_secret_mediumclone\",\n  saveUninitialized: true,\n  resave: true,\n  httpOnly: true,\n  // don't let javascript access cookies\n  cookie: {//secure: true, // prevents mitm by forcing http through tls encryption\n    //uncomment above after adding tls\n    //maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days //in ms\n    //cookie.maxAge sets a date to expires property, and that\n    //takes dominance over store's ttl\n  },\n  store: sessionStore\n})); // connect with db\n\ndb.authenticate().then(function () {\n  return console.log('DATABASE CONNECTED!');\n})[\"catch\"](function (err) {\n  return console.log('DATABASE AUTHENTICATION FAILED!', err);\n});\napp.use(api);\n\nif (false) {}\n\nmodule.exports = app;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/middlewares/logLastAccess.js":
/*!******************************************!*\
  !*** ./src/middlewares/logLastAccess.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ../controllers/user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar OLD_ENOUGH_AGE = 30; // 30minutes\n\nvar isOldEnough = function isOldEnough(last_accessed) {\n  return (new Date().getTime() - last_accessed) / 1000 / 60 >= OLD_ENOUGH_AGE;\n}; // use in /user and /auth routes\n// last_accessed is updated on redis on every request\n// and updated on db every $OLD_ENOUGH_AGE request\n\n\nmodule.exports = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var _req$session, last_accessed, user_id, new_last_accessed;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('RUNNING logLastAccess');\n            req.session.last_accessed = req.session.last_accessed || 0; // check if last_accessd is old enough\n\n            _req$session = req.session, last_accessed = _req$session.last_accessed, user_id = _req$session.user_id;\n\n            if (!isOldEnough(last_accessed)) {\n              _context.next = 11;\n              break;\n            }\n\n            new_last_accessed = new Date().getTime();\n            req.session.last_accessed = new_last_accessed;\n            req.session.save(); // save last accessed time\n\n            console.log('Updating last_accesssed ' + last_accessed + ' too old, for user_id: ' + user_id);\n            console.log(req.session.last_accessed);\n            _context.next = 11;\n            return updateUser(user_id, {\n              last_accessed: new_last_accessed\n            });\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/middlewares/logLastAccess.js?");

/***/ }),

/***/ "./src/middlewares/requireLogin.js":
/*!*****************************************!*\
  !*** ./src/middlewares/requireLogin.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar isLoggedIn = __webpack_require__(/*! ../controllers/user/isLoggedIn */ \"./src/controllers/user/isLoggedIn.js\");\n\nvar updateUser = __webpack_require__(/*! ../controllers/user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar requireLogin = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var authError, serverError, loggedIn, user_id;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            authError = {\n              err: 'Please login or signup first!'\n            };\n            serverError = {\n              err: 'Server error: Something went wrong checking authorization'\n            };\n            _context.prev = 2;\n            _context.next = 5;\n            return isLoggedIn(req);\n\n          case 5:\n            loggedIn = _context.sent;\n\n            if (!loggedIn) {\n              _context.next = 12;\n              break;\n            }\n\n            console.log('updating access record');\n            user_id = req.session.user_id;\n            return _context.abrupt(\"return\", next());\n\n          case 12:\n            return _context.abrupt(\"return\", res.status(403).send(authError));\n\n          case 13:\n            next();\n            _context.next = 20;\n            break;\n\n          case 16:\n            _context.prev = 16;\n            _context.t0 = _context[\"catch\"](2);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send(serverError));\n\n          case 20:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 16]]);\n  }));\n\n  return function requireLogin(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = requireLogin;\n\n//# sourceURL=webpack:///./src/middlewares/requireLogin.js?");

/***/ }),

/***/ "./src/models/PasswordResetTicket.js":
/*!*******************************************!*\
  !*** ./src/models/PasswordResetTicket.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar db = __webpack_require__(/*! ../config/database */ \"./src/config/database.js\");\n\nvar PasswordResetTicket = db.define('passwordresetticket', {\n  user_id: {\n    type: Sequelize.INTEGER\n  },\n  tokenHash: {\n    type: Sequelize.STRING,\n    primaryKey: true\n  },\n  genTime: {\n    type: Sequelize.STRING\n  },\n  expirationTime: {\n    type: Sequelize.STRING\n  },\n  tokenUsed: {\n    type: Sequelize.BOOLEAN\n  },\n  emailSent: {\n    type: Sequelize.BOOLEAN\n  },\n  ip: {\n    type: Sequelize.STRING\n  }\n});\nmodule.exports = PasswordResetTicket;\n/*\n *\n * create table PasswordResetTickets(\n    user_id integer NOT NULL,\n    tokenHash varchar(65) NOT NULL,\n    genTime varchar(15) NOT NULL,\n\texpirationTime varchar(15) NOT NULL,\n    tokenUsed boolean NOT NULL,\n\temailSent boolean NOT NULL,\n    ip VARCHAR(50)\n)\n *\n */\n\n//# sourceURL=webpack:///./src/models/PasswordResetTicket.js?");

/***/ }),

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar db = __webpack_require__(/*! ../config/database */ \"./src/config/database.js\");\n\nvar user = db.define('user', {\n  user_id: {\n    type: Sequelize.INTEGER,\n    autoIncrement: true,\n    primaryKey: true\n  },\n  fullname: {\n    type: Sequelize.STRING\n  },\n  email: {\n    type: Sequelize.STRING\n  },\n  photo: {\n    type: Sequelize.STRING\n  },\n  pass: {\n    type: Sequelize.STRING\n  },\n  auth_system: {\n    type: Sequelize.STRING //`native_auth` or `g_auth`\n\n  },\n  login_sessions: {\n    type: Sequelize.ARRAY(Sequelize.JSON)\n  },\n  session_ids: {\n    type: Sequelize.ARRAY(Sequelize.STRING)\n  },\n  last_accessed: {\n    type: Sequelize.STRING\n  },\n  pass_recovery_blob: {\n    type: Sequelize.JSON\n  },\n  sub_type: {\n    type: Sequelize.STRING\n  },\n  joined: {\n    type: Sequelize.STRING\n  },\n  deleted: {\n    type: Sequelize.BOOLEAN\n  }\n}); //SQL command to create the table\n\n/*\n\nCREATE TABLE users (\n\tuser_id SERIAL PRIMARY KEY,\n\tfullname VARCHAR(30) DEFAULT '',\n\temail VARCHAR(100) NOT NULL,\n    photo VARCHAR(255) NOT NULL,\n\tpass VARCHAR(65) NOT NULL,\n\tauth_system VARCHAR(10) NOT NULL,\n\t//session_ids VARCHAR[],\n\tlogin_sessions JSON[] NOT NULL,\n\tlast_accessed VARCHAR(50),\n\tpass_recovery_blob JSON[] DEFAULT '{}',\n\tsub_type VARCHAR(30),\n\tjoined VARCHAR(15) NOT NULL\n)\n\n*/\n\nmodule.exports = user;\n\n//# sourceURL=webpack:///./src/models/User.js?");

/***/ }),

/***/ "./src/redisClient.js":
/*!****************************!*\
  !*** ./src/redisClient.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var session = __webpack_require__(/*! express-session */ \"express-session\"); // redis\n\n\nvar redis = __webpack_require__(/*! redis */ \"redis\");\n\nvar redisClient = redis.createClient({\n  host: \"redis-server\",\n  port: 6379,\n  auth_pass: \"iuduhe9fib3948y0244riy34949ru49rweiiofj092i-23d34j9j4fg09enf49r340920\"\n});\nredisClient.on('connect', function () {\n  console.log('Redis connected!');\n});\nredisClient.on('error', console.error);\nmodule.exports = redisClient;\n\n//# sourceURL=webpack:///./src/redisClient.js?");

/***/ }),

/***/ "./src/routes/auth/changePassword.js":
/*!*******************************************!*\
  !*** ./src/routes/auth/changePassword.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ../../controllers/user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nvar PasswordResetTicket = __webpack_require__(/*! ../../models/PasswordResetTicket */ \"./src/models/PasswordResetTicket.js\");\n\nvar getTicket = __webpack_require__(/*! ../../controllers/resetTicket/getTicket */ \"./src/controllers/resetTicket/getTicket.js\");\n\nvar isPassFormatValid = __webpack_require__(/*! ../../utils/isPasswordFormatValid */ \"./src/utils/isPasswordFormatValid.js\");\n\nvar minPassLength = 6;\nvar passLengthError = {\n  err: \"Password too short, minumum length: \".concat(minPassLength, \".\")\n};\n\nvar changePassword = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var _req$body, token, genTime, password, email, user_id, ticketInRecords;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _req$body = req.body, token = _req$body.token, genTime = _req$body.genTime, password = _req$body.password, email = _req$body.email, user_id = _req$body.user_id;\n\n            if (isPassFormatValid(password)) {\n              _context.next = 4;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(409).send(passLengthError));\n\n          case 4:\n            _context.next = 6;\n            return getTicket({\n              token: token,\n              genTime: genTime\n            });\n\n          case 6:\n            ticketInRecords = _context.sent;\n\n            if (ticketInRecords) {\n              _context.next = 9;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(409).send({\n              msg: \"This reset link is not valid\"\n            }));\n\n          case 9:\n            if (!(ticketInRecords.expirationTime < new Date().getTime())) {\n              _context.next = 11;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(401).send({\n              msg: \"This reset key is no longer valid\"\n            }));\n\n          case 11:\n            _context.next = 13;\n            return updateUser(ticketInRecords.user_id, {\n              password: password\n            });\n\n          case 13:\n            _context.next = 15;\n            return PasswordResetTicket.update({\n              tokenUsed: true\n            }, {\n              where: {\n                genTime: genTime,\n                user_id: user_id\n              }\n            });\n\n          case 15:\n            res.send({\n              msg: 'Password changed successfully!',\n              id: id\n            });\n            next();\n            _context.next = 23;\n            break;\n\n          case 19:\n            _context.prev = 19;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Server error changing password!'\n            }));\n\n          case 23:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 19]]);\n  }));\n\n  return function changePassword(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = changePassword;\n\n//# sourceURL=webpack:///./src/routes/auth/changePassword.js?");

/***/ }),

/***/ "./src/routes/auth/index.js":
/*!**********************************!*\
  !*** ./src/routes/auth/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar login = __webpack_require__(/*! ./login */ \"./src/routes/auth/login.js\");\n\nvar register = __webpack_require__(/*! ./register */ \"./src/routes/auth/register.js\");\n\nvar changePassword = __webpack_require__(/*! ./changePassword */ \"./src/routes/auth/changePassword.js\");\n\nvar recoverPassword = __webpack_require__(/*! ./recoverPassword */ \"./src/routes/auth/recoverPassword.js\");\n\nvar logout = __webpack_require__(/*! ./logout */ \"./src/routes/auth/logout.js\");\n\nvar logLastAccess = __webpack_require__(/*! ../../middlewares/logLastAccess */ \"./src/middlewares/logLastAccess.js\");\n\nvar requireLogin = __webpack_require__(/*! ../../middlewares/requireLogin */ \"./src/middlewares/requireLogin.js\");\n\nrouter.post('/login', login, logLastAccess);\nrouter.post('/register', register, logLastAccess);\nrouter.post('/recoverPassword', recoverPassword, logLastAccess);\nrouter.post('/changePassword', changePassword, logLastAccess);\nrouter.post('/logout', requireLogin, logout);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/auth/index.js?");

/***/ }),

/***/ "./src/routes/auth/login.js":
/*!**********************************!*\
  !*** ./src/routes/auth/login.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateSessionIDs = __webpack_require__(/*! ../../controllers/session/updateSessionIDs */ \"./src/controllers/session/updateSessionIDs.js\");\n\nvar addLoginSession = __webpack_require__(/*! ../../controllers/session/updateLoginSessions */ \"./src/controllers/session/updateLoginSessions.js\");\n\nvar addCookie = __webpack_require__(/*! ../../controllers/session/addCookie */ \"./src/controllers/session/addCookie.js\");\n\nvar getUser = __webpack_require__(/*! ../../controllers/user/getUser */ \"./src/controllers/user/getUser.js\");\n\nvar bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar util = __webpack_require__(/*! util */ \"util\"); // determine if native or google auth is being requestsed from\n// route accordingly\n// learn an api response standard\n// learn how to do proper error handling\n\n\nvar NATIVE_AUTH = 'native_auth';\nvar OAUTH = 'oauth';\nvar INSUFFICIENT_INFO = 'insufficient'; // error responses\n\nvar INSUFFICIENT_INFO_ERROR = 'Please fill in all fields, insufficient data';\nvar INCORRECT_CRED = {\n  err: 'Wrong password or email!'\n};\n\nvar getLoginMode = function getLoginMode(_ref) {\n  var email = _ref.email,\n      password = _ref.password,\n      tokenId = _ref.tokenId;\n\n  if (email && password) {\n    return NATIVE_AUTH;\n  } else if (tokenId) {\n    return OAUTH;\n  } else {\n    return INSUFFICIENT_INFO;\n  }\n};\n/*\n\n*/\n\n\nvar passwordsMatch = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inputPassword, dbPasswordHash) {\n    var matches;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            bcrypt.compare = util.promisify(bcrypt.compare);\n            console.log(\"Checking if \".concat(inputPassword, \" matched the hash \").concat(dbPasswordHash));\n            _context.next = 4;\n            return bcrypt.compare(inputPassword, dbPasswordHash);\n\n          case 4:\n            matches = _context.sent;\n            return _context.abrupt(\"return\", matches);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function passwordsMatch(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nmodule.exports = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {\n    var requestedUser, _req$body, accessToken, tokenId, LOGIN_MODE, userInRecords, isPasswordCorrect;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            requestedUser = req.body;\n            _req$body = req.body, accessToken = _req$body.accessToken, tokenId = _req$body.tokenId; // determine login mode\n\n            LOGIN_MODE = getLoginMode(requestedUser);\n            console.log(LOGIN_MODE);\n\n            if (!(LOGIN_MODE === INSUFFICIENT_INFO)) {\n              _context2.next = 7;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(422).send(INSUFFICIENT_INFO_ERROR));\n\n          case 7:\n            if (!(LOGIN_MODE === OAUTH)) {\n              _context2.next = 11;\n              break;\n            }\n\n            _context2.next = 10;\n            return googleAuth({\n              accessToken: accessToken,\n              tokenId: tokenId\n            });\n\n          case 10:\n            requestedUser = _context2.sent;\n\n          case 11:\n            _context2.next = 13;\n            return getUser({\n              email: requestedUser.email\n            });\n\n          case 13:\n            userInRecords = _context2.sent;\n\n            if (userInRecords) {\n              _context2.next = 16;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(401).send({\n              err: 'Wrong password or email!'\n            }));\n\n          case 16:\n            if (!(LOGIN_MODE === OAUTH && userInRecords.auth_system === NATIVE)) {\n              _context2.next = 20;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(401).send({\n              err: 'Try login in with email!'\n            }));\n\n          case 20:\n            if (!(LOGIN_MODE === NATIVE_AUTH && userInRecords.auth_system === OAUTH)) {\n              _context2.next = 22;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(401).send({\n              err: 'Try login in with google!'\n            }));\n\n          case 22:\n            if (!(LOGIN_MODE === NATIVE_AUTH)) {\n              _context2.next = 28;\n              break;\n            }\n\n            _context2.next = 25;\n            return passwordsMatch(requestedUser.password, userInRecords.pass);\n\n          case 25:\n            isPasswordCorrect = _context2.sent;\n\n            if (isPasswordCorrect) {\n              _context2.next = 28;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(401).send(INCORRECT_CRED));\n\n          case 28:\n            _context2.next = 30;\n            return addLoginSession(req, userInRecords);\n\n          case 30:\n            res.send(\"logged in via \".concat(LOGIN_MODE));\n            next();\n            _context2.next = 38;\n            break;\n\n          case 34:\n            _context2.prev = 34;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.log(_context2.t0);\n            return _context2.abrupt(\"return\", res.status(500).send('500 error'));\n\n          case 38:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 34]]);\n  }));\n\n  return function (_x3, _x4, _x5) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/routes/auth/login.js?");

/***/ }),

/***/ "./src/routes/auth/logout.js":
/*!***********************************!*\
  !*** ./src/routes/auth/logout.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar deleteUserSession = __webpack_require__(/*! ../../controllers/session/deleteUserSession */ \"./src/controllers/session/deleteUserSession.js\");\n\nmodule.exports = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var user_id, currentSessionID, fromAll;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            user_id = req.session.user_id;\n            currentSessionID = req.sessionID;\n            fromAll = req.body.fromAll; // if to logout from all devices\n\n            req.session.destroy(function (err) {\n              if (err) {\n                return console.log(err);\n              }\n            });\n            _context.next = 7;\n            return deleteUserSession(user_id, currentSessionID, fromAll);\n\n          case 7:\n            res.status(200).send('logout success!');\n            next();\n            _context.next = 15;\n            break;\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send('server error'));\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/routes/auth/logout.js?");

/***/ }),

/***/ "./src/routes/auth/recoverPassword.js":
/*!********************************************!*\
  !*** ./src/routes/auth/recoverPassword.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar getUser = __webpack_require__(/*! ../../controllers/user/getUser */ \"./src/controllers/user/getUser.js\");\n\nvar sendRecoveryEmail = __webpack_require__(/*! ../../utils/sendRecoveryEmail */ \"./src/utils/sendRecoveryEmail.js\");\n\nvar createResetTicket = __webpack_require__(/*! ../../controllers/resetTicket/createResetTicket */ \"./src/controllers/resetTicket/createResetTicket.js\");\n\nvar isEligibleForResetTicket = function isEligibleForResetTicket(user_id) {// implement rate limiter\n  //return res.status(300).send({ err: 'Please wait 30 minutes before attempting again.' })\n};\n\nvar SUCCESS_MESSAGE = \"Thanks, if the email address you entered is correct, you will be receiving an email shortly with instructions on how to reset your password\";\n\nvar recoverPassword = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var email, userInRecords, name, auth_system, user_id, _yield$createResetTic, token, ticket;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            email = req.body.email;\n\n            if (email) {\n              _context.next = 4;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(400).send({\n              err: 'Email not provided'\n            }));\n\n          case 4:\n            _context.next = 6;\n            return getUser({\n              email: email\n            });\n\n          case 6:\n            userInRecords = _context.sent;\n\n            if (!userInRecords) {\n              _context.next = 19;\n              break;\n            }\n\n            console.log('valid email');\n            name = userInRecords.name, auth_system = userInRecords.auth_system, user_id = userInRecords.user_id; // evaluate if last recovery attempt window is still open\n\n            _context.next = 12;\n            return isEligibleForResetTicket();\n\n          case 12:\n            _context.next = 14;\n            return createResetTicket({\n              user_id: user_id,\n              emailSent: true,\n              ip: req.ip\n            });\n\n          case 14:\n            _yield$createResetTic = _context.sent;\n            token = _yield$createResetTic.token;\n            ticket = _yield$createResetTic.ticket;\n            _context.next = 19;\n            return sendRecoveryEmail({\n              email: email,\n              name: name,\n              token: token,\n              genTime: ticket.genTime,\n              auth_system: auth_system\n            });\n\n          case 19:\n            res.status(200).send({\n              msg: SUCCESS_MESSAGE\n            });\n            next();\n            _context.next = 27;\n            break;\n\n          case 23:\n            _context.prev = 23;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send({\n              err: 'Server error recovering password'\n            }));\n\n          case 27:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 23]]);\n  }));\n\n  return function recoverPassword(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = recoverPassword;\n\n//# sourceURL=webpack:///./src/routes/auth/recoverPassword.js?");

/***/ }),

/***/ "./src/routes/auth/register.js":
/*!*************************************!*\
  !*** ./src/routes/auth/register.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar getUser = __webpack_require__(/*! ../../controllers/user/getUser */ \"./src/controllers/user/getUser.js\");\n\nvar createUser = __webpack_require__(/*! ../../controllers/user/createUser */ \"./src/controllers/user/createUser.js\");\n\nvar googleAuth = __webpack_require__(/*! ../../controllers/user/googleAuth */ \"./src/controllers/user/googleAuth.js\");\n\nvar updateLoginSession = __webpack_require__(/*! ../../controllers/session/updateLoginSessions */ \"./src/controllers/session/updateLoginSessions.js\");\n\nvar NATIVE_AUTH = 'native_auth';\nvar OAUTH = 'oauth';\nvar INSUFFICIENT_INFO = 'insufficient';\n\nvar isEmailValid = __webpack_require__(/*! ../../utils/isEmailValid */ \"./src/utils/isEmailValid.js\");\n\nvar isPassFormatValid = __webpack_require__(/*! ../../utils/isPasswordFormatValid */ \"./src/utils/isPasswordFormatValid.js\"); // error responses\n\n\nvar INSUFFICIENT_INFO_ERROR = 'Please fill in all fields, insufficient data';\nvar INCORRECT_CRED = {\n  err: 'Wrong password or email!'\n};\nvar EMAIL_VALIDITY_ERROR = {\n  err: \"Email doesn't look valid, \\\nplease contact us if you think this is by our error\"\n};\nvar PASSWORD_LENTH_ERROR = {\n  err: 'Password should be atleast 6 characters long'\n};\n\nvar getSignInMode = function getSignInMode(_ref) {\n  var fullname = _ref.fullname,\n      email = _ref.email,\n      password = _ref.password,\n      tokenId = _ref.tokenId;\n\n  if (fullname && email && password) {\n    return NATIVE_AUTH;\n  } else if (tokenId) {\n    return OAUTH;\n  }\n\n  return INSUFFICIENT_INFO;\n};\n\nmodule.exports = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var userData, SIGNIN_MODE, userInRecords, userToCreate, createdUser;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            userData = req.body; // determine login mode\n\n            SIGNIN_MODE = getSignInMode(userData);\n\n            if (!(SIGNIN_MODE === INSUFFICIENT_INFO)) {\n              _context.next = 5;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(422).send(INSUFFICIENT_INFO_ERROR));\n\n          case 5:\n            _context.next = 7;\n            return getUser({\n              email: userData.email\n            });\n\n          case 7:\n            userInRecords = _context.sent;\n\n            if (!userInRecords) {\n              _context.next = 10;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(409).send({\n              err: 'Email is already in use'\n            }));\n\n          case 10:\n            // doesn't exist already\n            userToCreate = _objectSpread(_objectSpread({}, userData), {}, {\n              joined: new Date().getTime()\n            });\n\n            if (!(SIGNIN_MODE === OAUTH)) {\n              _context.next = 16;\n              break;\n            }\n\n            _context.next = 14;\n            return googleAuth({\n              accessToken: accessToken,\n              tokenId: tokenId\n            });\n\n          case 14:\n            userToCreate.userData = _context.sent;\n            userToCreate.auth_system = OAUTH;\n\n          case 16:\n            if (!(SIGNIN_MODE === NATIVE_AUTH)) {\n              _context.next = 24;\n              break;\n            }\n\n            if (isEmailValid(userData.email)) {\n              _context.next = 21;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(401).send(EMAIL_VALIDITY_ERROR));\n\n          case 21:\n            if (isPassFormatValid(userData.password)) {\n              _context.next = 23;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(401).send(PASSWORD_LENTH_ERROR));\n\n          case 23:\n            userToCreate.auth_system = NATIVE_AUTH;\n\n          case 24:\n            _context.next = 26;\n            return createUser(userToCreate);\n\n          case 26:\n            createdUser = _context.sent;\n            _context.next = 29;\n            return updateLoginSession(req, createdUser);\n\n          case 29:\n            res.send('user created successfully');\n            next();\n            _context.next = 37;\n            break;\n\n          case 33:\n            _context.prev = 33;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send('something went wrong'));\n\n          case 37:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 33]]);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/routes/auth/register.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar router = __webpack_require__(/*! express */ \"express\").Router();\n\nvar authRouter = __webpack_require__(/*! ./auth */ \"./src/routes/auth/index.js\");\n\nvar userRouter = __webpack_require__(/*! ./user */ \"./src/routes/user/index.js\");\n\nrouter.get('/', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", res.send('Server is running but under construction'));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nrouter.use('/', authRouter);\nrouter.use('/user', userRouter);\nrouter.get('/session', /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            return _context2.abrupt(\"return\", res.send(_objectSpread(_objectSpread({}, req.session), {}, {\n              sessionID: req.sessionID,\n              user_id: req.session.user_id,\n              last_accessed: req.session.last_accessed\n            })));\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nrouter.get('/cookie', /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            return _context3.abrupt(\"return\", res.send(JSON.stringify(res.cookie)));\n\n          case 1:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function (_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}());\nrouter.get('/session/:id', /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n    var redisClient, sessionID;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            redisClient = __webpack_require__(/*! ../redisClient */ \"./src/redisClient.js\");\n            sessionID = req.params.id;\n            redisClient.get(\"sess:\".concat(sessionID), function (err, reply) {\n              return res.send(reply);\n            });\n\n          case 3:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function (_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n}());\nrouter.get('/ip', /*#__PURE__*/function () {\n  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n    var ip;\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            ip = req.ip;\n            return _context5.abrupt(\"return\", res.send({\n              ip: req.ip,\n              //device: req.device,\n              ua: req.useragent\n            }));\n\n          case 2:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n\n  return function (_x9, _x10) {\n    return _ref5.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/user/deleteUser.js":
/*!***************************************!*\
  !*** ./src/routes/user/deleteUser.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar deleteUser = __webpack_require__(/*! ../../controllers/user/deleteUser */ \"./src/controllers/user/deleteUser.js\"); //delete user\n\n\nmodule.exports = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var user_id;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            user_id = req.session.user_id;\n            _context.next = 4;\n            return deleteUser(user_id);\n\n          case 4:\n            req.session.destroy(function (err) {\n              if (err) {\n                return console.log(err);\n              }\n            });\n            res.send('User deleted!');\n            next();\n            _context.next = 13;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send('server error'));\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 9]]);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/routes/user/deleteUser.js?");

/***/ }),

/***/ "./src/routes/user/editUserData.js":
/*!*****************************************!*\
  !*** ./src/routes/user/editUserData.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar updateUser = __webpack_require__(/*! ../../controllers/user/updateUser */ \"./src/controllers/user/updateUser.js\");\n\nmodule.exports = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var _req$body, fullname, email, password, user_id, newUserData;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _req$body = req.body, fullname = _req$body.fullname, email = _req$body.email, password = _req$body.password;\n\n            if (!(!fullname && !email && !password)) {\n              _context.next = 4;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(401).send('nothing changed'));\n\n          case 4:\n            user_id = req.session.user_id;\n            newUserData = {};\n            if (fullname) newUserData.fullname = fullname;\n            if (email) newUserData.email = email;\n            if (password) newUserData.pass = password;\n            _context.next = 11;\n            return updateUser(user_id, newUserData);\n\n          case 11:\n            res.send('user updated');\n            next();\n            _context.next = 19;\n            break;\n\n          case 15:\n            _context.prev = 15;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send('server error'));\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 15]]);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/routes/user/editUserData.js?");

/***/ }),

/***/ "./src/routes/user/getCurrentUserInfo.js":
/*!***********************************************!*\
  !*** ./src/routes/user/getCurrentUserInfo.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar getUser = __webpack_require__(/*! ../../controllers/user/getUser */ \"./src/controllers/user/getUser.js\"); // get current logged in user\n\n\nmodule.exports = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var user_id, userInRecords;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            console.log(req.session.user_id);\n            user_id = req.session.user_id;\n            _context.next = 5;\n            return getUser({\n              user_id: user_id\n            });\n\n          case 5:\n            userInRecords = _context.sent;\n\n            if (userInRecords) {\n              _context.next = 8;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(404).send({\n              err: 'No such user in record'\n            }));\n\n          case 8:\n            res.send(userInRecords);\n            next();\n            _context.next = 16;\n            break;\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).send('server error'));\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 12]]);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/routes/user/getCurrentUserInfo.js?");

/***/ }),

/***/ "./src/routes/user/index.js":
/*!**********************************!*\
  !*** ./src/routes/user/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar getCurrentUserInfo = __webpack_require__(/*! ./getCurrentUserInfo */ \"./src/routes/user/getCurrentUserInfo.js\");\n\nvar deleteUser = __webpack_require__(/*! ./deleteUser */ \"./src/routes/user/deleteUser.js\");\n\nvar editUser = __webpack_require__(/*! ./editUserData */ \"./src/routes/user/editUserData.js\");\n\nvar logLastAccess = __webpack_require__(/*! ../../middlewares/logLastAccess */ \"./src/middlewares/logLastAccess.js\");\n\nvar requireLogin = __webpack_require__(/*! ../../middlewares/requireLogin */ \"./src/middlewares/requireLogin.js\");\n\nrouter.get('/current', requireLogin, getCurrentUserInfo, logLastAccess);\nrouter[\"delete\"]('/delete', requireLogin, deleteUser, logLastAccess);\nrouter.put('/edit', requireLogin, editUser, logLastAccess);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/user/index.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var session = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar redisClient = __webpack_require__(/*! ./redisClient */ \"./src/redisClient.js\");\n\nvar RedisStore = __webpack_require__(/*! connect-redis */ \"connect-redis\")(session);\n\nvar store = new RedisStore({\n  client: redisClient,\n  ttl: 60 * 1 * 60 * 24 * 30 //in seconds // 30 days\n  //disableTouch: true //prevents resetting ttl on every request\n\n});\nmodule.exports = store;\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "./src/utils/getHashedData.js":
/*!************************************!*\
  !*** ./src/utils/getHashedData.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar util = __webpack_require__(/*! util */ \"util\");\n\nvar SALT_ROUNDS = 10;\n\nvar getHashedData = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data_to_hash) {\n    var salt, hashedData;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            bcrypt.genSalt = util.promisify(bcrypt.genSalt);\n            bcrypt.hash = util.promisify(bcrypt.hash);\n            _context.next = 4;\n            return bcrypt.genSalt(SALT_ROUNDS);\n\n          case 4:\n            salt = _context.sent;\n            _context.next = 7;\n            return bcrypt.hash(data_to_hash, salt);\n\n          case 7:\n            hashedData = _context.sent;\n            return _context.abrupt(\"return\", hashedData);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getHashedData(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = getHashedData;\n\n//# sourceURL=webpack:///./src/utils/getHashedData.js?");

/***/ }),

/***/ "./src/utils/isEmailValid.js":
/*!***********************************!*\
  !*** ./src/utils/isEmailValid.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var isEmailValid = function isEmailValid(email) {\n  var re = /\\S+@\\S+\\.\\S+/;\n  return re.test(email);\n};\n\nmodule.exports = isEmailValid;\n\n//# sourceURL=webpack:///./src/utils/isEmailValid.js?");

/***/ }),

/***/ "./src/utils/isPasswordFormatValid.js":
/*!********************************************!*\
  !*** ./src/utils/isPasswordFormatValid.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var isPassFormatValid = function isPassFormatValid(password) {\n  var MIN_PASSWORD_LENGTH = 6;\n  return typeof password === 'string' && password.length >= MIN_PASSWORD_LENGTH;\n};\n\nmodule.exports = isPassFormatValid;\n\n//# sourceURL=webpack:///./src/utils/isPasswordFormatValid.js?");

/***/ }),

/***/ "./src/utils/sendEmail.js":
/*!********************************!*\
  !*** ./src/utils/sendEmail.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar sgMail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n\nvar _process$env = process.env,\n    SENDGRID_API_KEY = _process$env.SENDGRID_API_KEY,\n    BASE_URL = _process$env.BASE_URL,\n    SENDGRID_SENDER = _process$env.SENDGRID_SENDER;\n\nvar sendEmail = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {\n    var to, subject, htmlMessage, msg;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            to = _ref.to, subject = _ref.subject, htmlMessage = _ref.htmlMessage;\n            sgMail.setApiKey(SENDGRID_API_KEY);\n            msg = {\n              to: to,\n              from: SENDGRID_SENDER,\n              subject: subject,\n              html: htmlMessage\n            };\n            _context.next = 5;\n            return sgMail.send(msg);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function sendEmail(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nmodule.exports = sendEmail;\n\n//# sourceURL=webpack:///./src/utils/sendEmail.js?");

/***/ }),

/***/ "./src/utils/sendRecoveryEmail.js":
/*!****************************************!*\
  !*** ./src/utils/sendRecoveryEmail.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar sendEmail = __webpack_require__(/*! ../utils/sendEmail */ \"./src/utils/sendEmail.js\");\n\nvar OAUTH = 'oauth';\n\nvar sendRecoveryEmail = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {\n    var email, name, token, genTime, auth_system, recoveryLink, ALLEGED_EXPIRY, htmlMessage, msg;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            email = _ref.email, name = _ref.name, token = _ref.token, genTime = _ref.genTime, auth_system = _ref.auth_system;\n            recoveryLink = \"\".concat(BASE_CLIENT_URL, \"/reset-password/\").concat(token, \"/\").concat(genTime);\n            ALLEGED_EXPIRY = \"30 minutes\";\n            htmlMessage = \"\\n        <p>Did you forget your password, \".concat(name, \"?</p>\\n        <p>If you did, follow this link to reset your password:</p>\\n        <a href=\\\"\").concat(recoveryLink, \"\\\">CHANGE PASSWORD</a>\\n        <p>The link will expire in \").concat(ALLEGED_EXPIRY, \".</p>\\n        <br />\\n        <p>Ignore this message if it wasn't requested by you.</p>\\n        <br />\\n        <p>Thank you.</p>\\n    \");\n\n            if (auth_system === OAUTH) {\n              htmlMessage = \"\\n        <p>Did you forget your password, \".concat(name, \"?</p>\\n        <p>It seems that you had originally logged in with google. If that isn't working, please let me know, or follow this link to create a password:</p>\\n        <i>You will not be able to use google to login if you create a password.</i>\\n        <br />\\n        <a href=\\\"\").concat(recoveryLink, \"\\\">SET PASSWORD</a>\\n        <p>The link will expire in \").concat(ALLEGED_EXPIRY, \".</p>\\n        <br />\\n        <p>Ignore this message if it wasn't requested by you. Please don't hesitate to reach out to support for <i>any</i> concern.</p>\\n        <br />\\n        <p>Thank you.</p>\\n    \");\n            }\n\n            msg = {\n              to: email,\n              subject: \"Recover password for SaaS\",\n              html: htmlMessage\n            };\n            _context.next = 8;\n            return sendEmail(msg);\n\n          case 8:\n            console.log('email sent');\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function sendRecoveryEmail(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nmodule.exports = sendRecoveryEmail;\n\n//# sourceURL=webpack:///./src/utils/sendRecoveryEmail.js?");

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

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "connect-redis":
/*!********************************!*\
  !*** external "connect-redis" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-redis\");\n\n//# sourceURL=webpack:///external_%22connect-redis%22?");

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

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "express-useragent":
/*!************************************!*\
  !*** external "express-useragent" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-useragent\");\n\n//# sourceURL=webpack:///external_%22express-useragent%22?");

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

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");\n\n//# sourceURL=webpack:///external_%22redis%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

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