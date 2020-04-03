webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Link */ "./components/Link.js");





var _jsxFileName = "/home/damisgarcia/projects/sites/next-luz-do-saber-fundamental/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Header = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = _super.call(this, props);
    _this.selected = "";
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var elementsSelected = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(this).getElementsByClassName("selected");

      for (var index = 0; index < elementsSelected.length; index++) {
        var element = elementsSelected[index];
        element.classList.remove("selected");
        console.log(element.classList);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: "jsx-2703776257" + " " + "d-flex row main-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-2703776257" + " " + "col-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-2703776257" + " " + "row logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }, __jsx("h1", {
        className: "jsx-2703776257" + " " + "hidden-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, "LUZ DO SABER - PORTAL"), __jsx("img", {
        src: "static/logo-rosto-0.png",
        alt: "Logo Sol Luz do Saber",
        width: "55%",
        className: "jsx-2703776257" + " " + "logo-rosto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }), __jsx("img", {
        src: "static/logo-raios.png",
        alt: "Logo Sol Luz do Saber",
        width: "55%",
        className: "jsx-2703776257" + " " + "logo-sol",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }))), __jsx("div", {
        className: "jsx-2703776257" + " " + "col-sm-8 nav-search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-2703776257" + " " + "row search-bar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-2703776257" + " " + "search-bar-itens search-input-container shadow-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      }, __jsx("input", {
        type: "text",
        name: "search",
        id: "search",
        placeholder: "O QUE VOC\xCA PROCURA?",
        className: "jsx-2703776257" + " " + "search-input form-input-font",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }
      })), __jsx("form", {
        action: "https://luz-do-saber-staging.herokuapp.com/#/",
        target: "_blank",
        className: "jsx-2703776257" + " " + "search-bar-itens btn-container shadow-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }
      }, __jsx("button", {
        className: "jsx-2703776257" + " " + "btn search-input btn-font-light form-input-font",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      }, "Editar")), __jsx("div", {
        className: "jsx-2703776257" + " " + "search-bar-itens btn-container shadow-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }
      }, __jsx("button", {
        className: "jsx-2703776257" + " " + "btn search-input btn-font-dark form-input-font",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, "Instalar"))), __jsx("div", {
        className: "jsx-2703776257" + " " + "hamburguer-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, __jsx("input", {
        id: "menu-hamburguer",
        type: "checkbox",
        className: "jsx-2703776257",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }), __jsx("label", {
        htmlFor: "menu-hamburguer",
        className: "jsx-2703776257",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2703776257" + " " + "menu-hamburguer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "jsx-2703776257" + " " + "hamburguer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: "jsx-2703776257" + " " + "row menu-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "jsx-2703776257" + " " + "col-sm menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }
      }, __jsx("li", {
        className: "jsx-2703776257" + " " + ("inicio " + (this.props.selected === "inicio" ? "selected" : "") || false),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "jsx-2703776257",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }
      }, "In\xEDcio"))), __jsx("li", {
        className: "jsx-2703776257" + " " + ("projeto " + (this.props.selected === "projeto" ? "selected" : "") || false),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }
      }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/projeto",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "jsx-2703776257",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }
      }, "Projeto"))), __jsx(HeaderItem, {
        href: "/download",
        selected: this.props.selected,
        to: "download",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }
      }, "Download"), __jsx(HeaderItem, {
        to: "tutorial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }, "Tutorial"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/contact",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: "jsx-2703776257" + " " + "tutorial disabled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 19
        }
      }, "Tutorial")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/contact",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: "jsx-2703776257" + " " + "forum disabled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 19
        }
      }, "F\xF3rum")), __jsx(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/contact",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: "jsx-2703776257" + " " + "creditos disabled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 19
        }
      }, "Cr\xE9ditos")), __jsx("li", {
        className: "jsx-2703776257" + " " + ("contato " + (this.props.selected === "contact" ? "selected" : "") || false),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }
      }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/contact",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "jsx-2703776257",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }
      }, "Contato"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2703776257",
        __self: this
      }, "@media (min-width:1200px){.hamburguer-container.jsx-2703776257>input.jsx-2703776257,.hamburguer-container.jsx-2703776257>label.jsx-2703776257{display:none;}.main-nav.jsx-2703776257{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-2703776257{visibility:hidden;position:absolute;}.nav-search.jsx-2703776257{font-family:\"Itim\",cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.search-bar.jsx-2703776257{position:absolute;right:70px;top:25px;}.menu.jsx-2703776257{position:absolute;bottom:-17px;}.menu.jsx-2703776257 li.jsx-2703776257{display:inline-block;padding:10px;width:100px;font-size:0.8em;text-align:center;border:1px solid #f0f0f0;margin-left:1px;}.menu.jsx-2703776257 li.jsx-2703776257:hover{cursor:pointer;}.menu.jsx-2703776257 li.jsx-2703776257 a.jsx-2703776257{color:#333;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-2703776257 .inicio.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .inicio.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .projeto.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .projeto.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .download.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .download.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .tutorial.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .tutorial.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .forum.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .forum.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .creditos.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .creditos.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .contato.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .contato.jsx-2703776257:hover{background:#ffb151;color:#fff;}.selected.jsx-2703776257{background:#ffb151;}.disabled.jsx-2703776257{background:#d3d3d3;color:#fff;border-top:3px solid #d3d3d3;}.logo-rosto.jsx-2703776257{position:absolute;}button.jsx-2703776257,input.jsx-2703776257{top:6px;left:7px;}}@media (min-width:320px) and (max-width:1199px){.hamburguer-container.jsx-2703776257>input.jsx-2703776257{display:none;}.hamburguer-container.jsx-2703776257{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.menu-hamburguer.jsx-2703776257{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.hamburguer.jsx-2703776257{position:absolute;display:block;width:30px;height:2px;top:28px;right:15px;background:#000;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;}.hamburguer.jsx-2703776257:before,.hamburguer.jsx-2703776257:after{background:#000;content:\"\";display:block;width:30px;height:2px;position:absolute;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;}.hamburguer.jsx-2703776257:before{top:-10px;}.hamburguer.jsx-2703776257:after{bottom:-10px;}input.jsx-2703776257:checked~label.jsx-2703776257 .hamburguer.jsx-2703776257{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}input.jsx-2703776257:checked~label.jsx-2703776257 .hamburguer.jsx-2703776257:before{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:0;}input.jsx-2703776257:checked~label.jsx-2703776257 .hamburguer.jsx-2703776257:after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);bottom:0;}input.jsx-2703776257:checked~.menu-container.jsx-2703776257{-webkit-transform:translateX(300px);-ms-transform:translateX(300px);transform:translateX(300px);}.main-nav.jsx-2703776257{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-2703776257{visibility:hidden;position:absolute;}.nav-search.jsx-2703776257{font-family:\"Itim\",cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:10;}.search-bar.jsx-2703776257{display:none;position:absolute;right:70px;top:50px;}.search-bar-itens.jsx-2703776257:first-child{display:none;}.menu-container.jsx-2703776257{position:fixed;background:rgb(92,183,204);background:linear-gradient( 90deg, rgba(92,183,204,0.9) 49%, rgba(48,142,163,0.9) 100%, rgba(9,9,121,0.9) 100% );top:0;left:-300px;width:300px;height:100%;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;}.menu.jsx-2703776257{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.menu.jsx-2703776257 li.jsx-2703776257{display:block;padding:10px;width:60%;font-size:1em;text-align:center;margin:15px;color:#fff;font-weight:bold;}.menu.jsx-2703776257 li.jsx-2703776257:hover{cursor:pointer;}.menu.jsx-2703776257 li.jsx-2703776257 a.jsx-2703776257{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-2703776257 .inicio.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .inicio.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .software.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .software.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .download.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .download.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .tutorial.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .tutorial.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .forum.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .forum.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .creditos.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .creditos.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .contato.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .contato.jsx-2703776257:hover{background:#ffb151;color:#fff;}.selected.jsx-2703776257{background:#ffb151;}.logo-rosto.jsx-2703776257{position:absolute;width:148px;height:98px;}.logo-sol.jsx-2703776257{width:148px;height:98px;}button.jsx-2703776257,input.jsx-2703776257{top:6px;left:7px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbWlzZ2FyY2lhL3Byb2plY3RzL3NpdGVzL25leHQtbHV6LWRvLXNhYmVyLWZ1bmRhbWVudGFsL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtJb0IsQUFLNEIsQUFHZ0IsQUFJWCxBQUlVLEFBTVYsQUFNQSxBQUtHLEFBVU4sQUFJSixBQU1rQixBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBS0EsQUFJQSxBQU1ELEFBS1YsQUFZSyxBQUdFLEFBU0EsQUFTRyxBQVlGLEFBVU4sQUFJRyxBQUlXLEFBSUEsQUFLQSxBQUtJLEFBU0MsQUFJWCxBQUlVLEFBT2YsQUFPQSxBQUdFLEFBcUJHLEFBUUosQUFXQyxBQUlKLEFBTWtCLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFLQSxBQUlELEFBS04sQUFNSixRQXhPQyxBQXlPQSxFQWxMWCxDQXJJdUIsQUF5T0EsQ0F3RVQsQ0EzVmQsQUFvSUEsQUErQ0EsQUEwQ29CLEFBT3BCLENBZ0NlLENBOU5mLEFBaUdXLEFBU0EsQUF1Rm9CLEFBd0MvQixDQTFHYSxDQTVDYixBQXlPQSxDQTNWb0IsQUFVUCxBQU1FLEFBNEZmLEFBc0NnQixBQXlESSxBQTBDTCxBQTBGRCxDQWxTRCxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQUtiLEFBSWEsQUFnTEEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFLYixFQXRUZSxHQTRHRyxBQVNBLEFBMk1sQixHQWpWZSxBQTJKQyxBQWdERCxBQStDSCxFQW5QRCxBQThCb0MsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUF5TEUsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQ0FwUmpELEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUytCLEFBZ0wvQixBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVNjLENBL1RkLEFBc01hLENBcEVBLEVBN0hDLEVBckJkLEFBMk1BLENBbURnQixDQW5QaEIsRUFzSG9CLEFBU0EsQ0FxQlAsQ0F3REYsQUFjUixBQTJHSCxDQTdMYSxHQTdISyxLQWtNbEIsQUF1Q29CLENBL0ZQLEVBWkYsSUFsQkUsQUFTQSxDQXBDYixFQXBFZ0IsQUF5T0EsQ0FyUEksQ0E4SFAsQUFZTyxNQTlCTixBQVNBLEFBb0hBLEVBdk5kLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEVBeUxBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLENBNUtrQixDQWxIbEIsQUF5T0EsS0FyUDJCLENBNEdkLEFBU0EsQUFzQmlCLEFBOEZqQixHQWxGYixBQUlRLEFBS0csTUFoQ21CLEFBNEI5QixFQS9DQSxBQVNBLEFBdUdxQixBQWFGLENBekVuQixHQUlBLEtBekx3QixBQTJNQSxJQXRMTixJQTBPbEIsWUF6T0EsRUEvQjJCLEFBMk1BLHNCQWxDM0IsR0F4S0EsQUEyTUEsTUE5Q0EsQ0E2RVEsTUFDTSxZQUNBLE1Bbk9XLEFBMk1BLE1BeUJYLEFBYVcsWUFYSSw4REFDN0IsbUJBdE9BLEFBMk1hLE1Bc0NJLEtBckNqQixvREFzQ3dCLDhFQUN4QiIsImZpbGUiOiIvaG9tZS9kYW1pc2dhcmNpYS9wcm9qZWN0cy9zaXRlcy9uZXh0LWx1ei1kby1zYWJlci1mdW5kYW1lbnRhbC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZWxlY3RlZCA9IFwiXCI7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBsZXQgZWxlbWVudHNTZWxlY3RlZCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICBcInNlbGVjdGVkXCJcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzU2VsZWN0ZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNTZWxlY3RlZFtpbmRleF07XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZC1mbGV4IHJvdyBtYWluLW5hdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGxvZ29cIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoaWRkZW4tdGl0bGVcIj5MVVogRE8gU0FCRVIgLSBQT1JUQUw8L2gxPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvLXJvc3RvXCJcbiAgICAgICAgICAgICAgc3JjPVwic3RhdGljL2xvZ28tcm9zdG8tMC5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvIFNvbCBMdXogZG8gU2FiZXJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjU1JVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvLXNvbFwiXG4gICAgICAgICAgICAgIHNyYz1cInN0YXRpYy9sb2dvLXJhaW9zLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIkxvZ28gU29sIEx1eiBkbyBTYWJlclwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTUlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IG5hdi1zZWFyY2hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgc2VhcmNoLWlucHV0LWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0IGZvcm0taW5wdXQtZm9udFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk8gUVVFIFZPQ8OKIFBST0NVUkE/XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1pdGVucyBidG4tY29udGFpbmVyIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vbHV6LWRvLXNhYmVyLXN0YWdpbmcuaGVyb2t1YXBwLmNvbS8jL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNlYXJjaC1pbnB1dCBidG4tZm9udC1saWdodCBmb3JtLWlucHV0LWZvbnRcIj5cbiAgICAgICAgICAgICAgICBFZGl0YXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgYnRuLWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gc2VhcmNoLWlucHV0IGJ0bi1mb250LWRhcmsgZm9ybS1pbnB1dC1mb250XCI+XG4gICAgICAgICAgICAgICAgSW5zdGFsYXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtZW51LWhhbWJ1cmd1ZXJcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lbnUtaGFtYnVyZ3VlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaGFtYnVyZ3VlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2wtc20gbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgXCJpbmljaW8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gXCJpbmljaW9cIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPGE+SW7DrWNpbzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBcInByb2pldG8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gXCJwcm9qZXRvXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZXRvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhPlByb2pldG88L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxIZWFkZXJJdGVtIFxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9kb3dubG9hZFwiIFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWR9IFxuICAgICAgICAgICAgICAgICAgdG89XCJkb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgICAgICAgIDwvSGVhZGVySXRlbT5cbiAgICAgICAgICAgICAgICA8SGVhZGVySXRlbSB0bz1cInR1dG9yaWFsXCI+XG4gICAgICAgICAgICAgICAgICBUdXRvcmlhbFxuICAgICAgICAgICAgICAgIDwvSGVhZGVySXRlbT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0dXRvcmlhbCBkaXNhYmxlZFwiPlR1dG9yaWFsPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZm9ydW0gZGlzYWJsZWRcIj5Gw7NydW08L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjcmVkaXRvcyBkaXNhYmxlZFwiPkNyw6lkaXRvczwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgXCJjb250YXRvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPT09IFwiY29udGFjdFwiID8gXCJzZWxlY3RlZFwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPGE+Q29udGF0bzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgICAuaGFtYnVyZ3Vlci1jb250YWluZXIgPiBpbnB1dCxcbiAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciA+IGxhYmVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYWluLW5hdiB7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhpZGRlbi10aXRsZSB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1zZWFyY2gge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJJdGltXCIsIGN1cnNpdmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IC0xN3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSBsaSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IGxpOmhvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSBsaSBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IC5pbmljaW8ge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmluaWNpbzpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnByb2pldG8ge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnByb2pldG86aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5kb3dubG9hZCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZG93bmxvYWQ6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAudHV0b3JpYWw6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5mb3J1bSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZm9ydW06aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jcmVkaXRvcyB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY3JlZGl0b3M6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jb250YXRvIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jb250YXRvOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2QzZDNkMztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tcm9zdG8ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgTUVOVSBIQU1CVVJHVUVSXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyID4gaW5wdXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1oYW1idXJndWVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGFtYnVyZ3VlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgdG9wOiAyOHB4O1xuICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcblxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXI6YmVmb3JlLFxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oYW1idXJndWVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oYW1idXJndWVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJndWVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwgLmhhbWJ1cmd1ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiBsYWJlbCAuaGFtYnVyZ3VlcjphZnRlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgTUVOVSBIQU1CVVJHVUVSXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAubWFpbi1uYXYge1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oaWRkZW4tdGl0bGUge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc2VhcmNoIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSXRpbVwiLCBjdXJzaXZlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWJhciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWFyY2gtYmFyLWl0ZW5zOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgLyogQkFSUkEgREUgUEVTUVVJU0EgKi9cbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDkyLCAxODMsIDIwNCk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICA5MGRlZyxcbiAgICAgICAgICAgICAgICByZ2JhKDkyLCAxODMsIDIwNCwgMC45KSA0OSUsXG4gICAgICAgICAgICAgICAgcmdiYSg0OCwgMTQyLCAxNjMsIDAuOSkgMTAwJSxcbiAgICAgICAgICAgICAgICByZ2JhKDksIDksIDEyMSwgMC45KSAxMDAlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogLTMwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvKiAuZXhwYW5kZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSBsaTpob3ZlciB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgbGkgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSAuaW5pY2lvIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmluaWNpbzpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZG93bmxvYWQge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZG93bmxvYWQ6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbDpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmZvcnVtIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmZvcnVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY3JlZGl0b3Mge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY3JlZGl0b3M6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jb250YXRvIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmNvbnRhdG86aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tcm9zdG8ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNDhweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5OHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28tc29sIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0OHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDk4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gSGVhZGVySXRlbSAoeyBjaGlsZHJlbiwgaHJlZiwgc2VsZWN0ZWQsIHRvIH0pIHtcbiAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkID09PSB0byA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGxpIGNsYXNzTmFtZT17YCR7dG99ICR7aXNTZWxlY3RlZH1gfT5cbiAgICAgICAgPEhlYWRlckxpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0hlYWRlckxpbms+ICAgICAgICBcbiAgICAgIDwvbGk+XG4gICAgICA8c3R5bGUganN4PntcbiAgICAgICAgYCAgICAgICAgICBcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaS5zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSBhe1xuICAgICAgICAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgICAgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gSGVhZGVyTGluayAoeyBjaGlsZHJlbiwgaHJlZiB9KSB7XG4gIGlmIChocmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxuICAgICAgICA8YT57Y2hpbGRyZW59PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIClcbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/damisgarcia/projects/sites/next-luz-do-saber-fundamental/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function HeaderItem(_ref) {
  var children = _ref.children,
      href = _ref.href,
      selected = _ref.selected,
      to = _ref.to;
  var isSelected = selected === to ? "selected" : "";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("li", {
    className: "jsx-1784945345" + " " + "".concat(to, " ").concat(isSelected),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 7
    }
  }, __jsx(HeaderLink, {
    href: href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 9
    }
  }, children)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1784945345",
    __self: this
  }, "li.jsx-1784945345{display:inline-block;padding:10px;width:100px;font-size:0.8em;text-align:center;margin-left:1px;border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}li.jsx-1784945345:hover{background:#ffb151;color:#fff;cursor:pointer;}li.selected.jsx-1784945345{background:#ffb151;}li.jsx-1784945345 a.jsx-1784945345{color:#333 !important;-webkit-text-decoration:none;text-decoration:none;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbWlzZ2FyY2lhL3Byb2plY3RzL3NpdGVzL25leHQtbHV6LWRvLXNhYmVyLWZ1bmRhbWVudGFsL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJmUSxBQUdrQyxBQVVGLEFBS0EsQUFHRyxtQkFQWCxBQUtiLEVBZmUsQ0FrQlEsUUFQTixJQVZILFdBV2QsQ0FWa0IsZ0JBQ0UsVUFnQkosUUFmRSxNQWdCbEIsVUFmK0IsNkJBQ2dCLDBDQUMvQyIsImZpbGUiOiIvaG9tZS9kYW1pc2dhcmNpYS9wcm9qZWN0cy9zaXRlcy9uZXh0LWx1ei1kby1zYWJlci1mdW5kYW1lbnRhbC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZWxlY3RlZCA9IFwiXCI7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBsZXQgZWxlbWVudHNTZWxlY3RlZCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICBcInNlbGVjdGVkXCJcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzU2VsZWN0ZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNTZWxlY3RlZFtpbmRleF07XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZC1mbGV4IHJvdyBtYWluLW5hdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGxvZ29cIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoaWRkZW4tdGl0bGVcIj5MVVogRE8gU0FCRVIgLSBQT1JUQUw8L2gxPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvLXJvc3RvXCJcbiAgICAgICAgICAgICAgc3JjPVwic3RhdGljL2xvZ28tcm9zdG8tMC5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvIFNvbCBMdXogZG8gU2FiZXJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjU1JVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvLXNvbFwiXG4gICAgICAgICAgICAgIHNyYz1cInN0YXRpYy9sb2dvLXJhaW9zLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIkxvZ28gU29sIEx1eiBkbyBTYWJlclwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTUlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IG5hdi1zZWFyY2hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgc2VhcmNoLWlucHV0LWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0IGZvcm0taW5wdXQtZm9udFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk8gUVVFIFZPQ8OKIFBST0NVUkE/XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1pdGVucyBidG4tY29udGFpbmVyIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vbHV6LWRvLXNhYmVyLXN0YWdpbmcuaGVyb2t1YXBwLmNvbS8jL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNlYXJjaC1pbnB1dCBidG4tZm9udC1saWdodCBmb3JtLWlucHV0LWZvbnRcIj5cbiAgICAgICAgICAgICAgICBFZGl0YXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgYnRuLWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gc2VhcmNoLWlucHV0IGJ0bi1mb250LWRhcmsgZm9ybS1pbnB1dC1mb250XCI+XG4gICAgICAgICAgICAgICAgSW5zdGFsYXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtZW51LWhhbWJ1cmd1ZXJcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lbnUtaGFtYnVyZ3VlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaGFtYnVyZ3VlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2wtc20gbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgXCJpbmljaW8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gXCJpbmljaW9cIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPGE+SW7DrWNpbzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBcInByb2pldG8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gXCJwcm9qZXRvXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZXRvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhPlByb2pldG88L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxIZWFkZXJJdGVtIFxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9kb3dubG9hZFwiIFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWR9IFxuICAgICAgICAgICAgICAgICAgdG89XCJkb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgICAgICAgIDwvSGVhZGVySXRlbT5cbiAgICAgICAgICAgICAgICA8SGVhZGVySXRlbSB0bz1cInR1dG9yaWFsXCI+XG4gICAgICAgICAgICAgICAgICBUdXRvcmlhbFxuICAgICAgICAgICAgICAgIDwvSGVhZGVySXRlbT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0dXRvcmlhbCBkaXNhYmxlZFwiPlR1dG9yaWFsPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZm9ydW0gZGlzYWJsZWRcIj5Gw7NydW08L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjcmVkaXRvcyBkaXNhYmxlZFwiPkNyw6lkaXRvczwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgXCJjb250YXRvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPT09IFwiY29udGFjdFwiID8gXCJzZWxlY3RlZFwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPGE+Q29udGF0bzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgICAuaGFtYnVyZ3Vlci1jb250YWluZXIgPiBpbnB1dCxcbiAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciA+IGxhYmVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYWluLW5hdiB7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhpZGRlbi10aXRsZSB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1zZWFyY2gge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJJdGltXCIsIGN1cnNpdmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IC0xN3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSBsaSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IGxpOmhvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSBsaSBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IC5pbmljaW8ge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmluaWNpbzpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnByb2pldG8ge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnByb2pldG86aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5kb3dubG9hZCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZG93bmxvYWQ6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAudHV0b3JpYWw6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5mb3J1bSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZm9ydW06aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jcmVkaXRvcyB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY3JlZGl0b3M6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jb250YXRvIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jb250YXRvOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2QzZDNkMztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tcm9zdG8ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgTUVOVSBIQU1CVVJHVUVSXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyID4gaW5wdXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1oYW1idXJndWVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGFtYnVyZ3VlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgdG9wOiAyOHB4O1xuICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcblxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXI6YmVmb3JlLFxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oYW1idXJndWVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oYW1idXJndWVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJndWVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwgLmhhbWJ1cmd1ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiBsYWJlbCAuaGFtYnVyZ3VlcjphZnRlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgTUVOVSBIQU1CVVJHVUVSXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAubWFpbi1uYXYge1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oaWRkZW4tdGl0bGUge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc2VhcmNoIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSXRpbVwiLCBjdXJzaXZlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWJhciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWFyY2gtYmFyLWl0ZW5zOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgLyogQkFSUkEgREUgUEVTUVVJU0EgKi9cbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDkyLCAxODMsIDIwNCk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICA5MGRlZyxcbiAgICAgICAgICAgICAgICByZ2JhKDkyLCAxODMsIDIwNCwgMC45KSA0OSUsXG4gICAgICAgICAgICAgICAgcmdiYSg0OCwgMTQyLCAxNjMsIDAuOSkgMTAwJSxcbiAgICAgICAgICAgICAgICByZ2JhKDksIDksIDEyMSwgMC45KSAxMDAlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogLTMwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvKiAuZXhwYW5kZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSBsaTpob3ZlciB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgbGkgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSAuaW5pY2lvIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmluaWNpbzpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZG93bmxvYWQge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZG93bmxvYWQ6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbDpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmZvcnVtIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmZvcnVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY3JlZGl0b3Mge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY3JlZGl0b3M6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jb250YXRvIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmNvbnRhdG86aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tcm9zdG8ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNDhweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5OHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28tc29sIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0OHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDk4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gSGVhZGVySXRlbSAoeyBjaGlsZHJlbiwgaHJlZiwgc2VsZWN0ZWQsIHRvIH0pIHtcbiAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkID09PSB0byA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGxpIGNsYXNzTmFtZT17YCR7dG99ICR7aXNTZWxlY3RlZH1gfT5cbiAgICAgICAgPEhlYWRlckxpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0hlYWRlckxpbms+ICAgICAgICBcbiAgICAgIDwvbGk+XG4gICAgICA8c3R5bGUganN4PntcbiAgICAgICAgYCAgICAgICAgICBcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaS5zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSBhe1xuICAgICAgICAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgICAgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gSGVhZGVyTGluayAoeyBjaGlsZHJlbiwgaHJlZiB9KSB7XG4gIGlmIChocmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxuICAgICAgICA8YT57Y2hpbGRyZW59PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIClcbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/damisgarcia/projects/sites/next-luz-do-saber-fundamental/components/Header.js */"));
}

function HeaderLink(_ref2) {
  var children = _ref2.children,
      href = _ref2.href;

  if (href) {
    return __jsx(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      href: href,
      passHref: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 541,
        columnNumber: 7
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 9
      }
    }, children));
  }

  return children;
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.100444b87d3d537c852e.hot-update.js.map