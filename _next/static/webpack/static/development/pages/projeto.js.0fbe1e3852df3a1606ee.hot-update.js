webpackHotUpdate("static/development/pages/projeto.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);





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
      var elementsSelected = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(this).getElementsByClassName("selected");

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
        className: "jsx-2685199076" + " " + "d-flex row main-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-2685199076" + " " + "col-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-2685199076" + " " + "row logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }, __jsx("h1", {
        className: "jsx-2685199076" + " " + "hidden-title",
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
        className: "jsx-2685199076" + " " + "logo-rosto",
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
        className: "jsx-2685199076" + " " + "logo-sol",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }))), __jsx("div", {
        className: "jsx-2685199076" + " " + "col-sm-8 nav-search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-2685199076" + " " + "row search-bar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-2685199076" + " " + "search-bar-itens search-input-container shadow-sm",
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
        className: "jsx-2685199076" + " " + "search-input form-input-font",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }
      })), __jsx("form", {
        action: "https://luz-do-saber-staging.herokuapp.com/#/",
        target: "_blank",
        className: "jsx-2685199076" + " " + "search-bar-itens btn-container shadow-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }
      }, __jsx("button", {
        className: "jsx-2685199076" + " " + "btn search-input btn-font-light form-input-font",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      }, "Editar")), __jsx("div", {
        className: "jsx-2685199076" + " " + "search-bar-itens btn-container shadow-sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }
      }, __jsx("button", {
        className: "jsx-2685199076" + " " + "btn search-input btn-font-dark form-input-font",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, "Instalar"))), __jsx("div", {
        className: "jsx-2685199076" + " " + "hamburguer-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, __jsx("input", {
        id: "menu-hamburguer",
        type: "checkbox",
        className: "jsx-2685199076",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }), __jsx("label", {
        htmlFor: "menu-hamburguer",
        className: "jsx-2685199076",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2685199076" + " " + "menu-hamburguer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "jsx-2685199076" + " " + "hamburguer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: "jsx-2685199076" + " " + "row menu-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "jsx-2685199076" + " " + "col-sm menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }
      }, __jsx("li", {
        className: "jsx-2685199076" + " " + ("inicio " + (this.props.selected === "inicio" ? "selected" : "") || false),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "jsx-2685199076",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }
      }, "In\xEDcio"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/projeto",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: "jsx-2685199076" + " " + "projeto disabled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 19
        }
      }, "Projeto")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: "jsx-2685199076" + " " + "download disabled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 19
        }
      }, "Download")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: "jsx-2685199076" + " " + "tutorial disabled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 19
        }
      }, "Tutorial")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: "jsx-2685199076" + " " + "forum disabled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 19
        }
      }, "F\xF3rum")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: "jsx-2685199076" + " " + "creditos disabled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }
      }, "Cr\xE9ditos")), __jsx("li", {
        className: "jsx-2685199076" + " " + ("contato " + (this.props.selected === "contact" ? "selected" : "") || false),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "jsx-2685199076",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }
      }, "Contato"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2685199076",
        __self: this
      }, "@media (min-width:1200px){.hamburguer-container.jsx-2685199076>input.jsx-2685199076,.hamburguer-container.jsx-2685199076>label.jsx-2685199076{display:none;}.main-nav.jsx-2685199076{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-2685199076{visibility:hidden;position:absolute;}.nav-search.jsx-2685199076{font-family:\"Itim\",cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.search-bar.jsx-2685199076{position:absolute;right:70px;top:25px;}.menu.jsx-2685199076{position:absolute;bottom:-17px;}.menu.jsx-2685199076 li.jsx-2685199076{display:inline-block;padding:10px;width:100px;font-size:0.8em;text-align:center;border:1px solid #f0f0f0;margin-left:1px;}.menu.jsx-2685199076 li.jsx-2685199076:hover{cursor:pointer;}.menu.jsx-2685199076 li.jsx-2685199076 a.jsx-2685199076{color:#333;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-2685199076 .inicio.jsx-2685199076{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2685199076 .inicio.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .software.jsx-2685199076{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2685199076 .software.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .download.jsx-2685199076{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2685199076 .download.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .tutorial.jsx-2685199076{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2685199076 .tutorial.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .forum.jsx-2685199076{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2685199076 .forum.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .creditos.jsx-2685199076{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2685199076 .creditos.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .contato.jsx-2685199076{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2685199076 .contato.jsx-2685199076:hover{background:#ffb151;color:#fff;}.selected.jsx-2685199076{background:#ffb151;}.disabled.jsx-2685199076{background:#d3d3d3;color:#fff;border-top:3px solid #d3d3d3;}.logo-rosto.jsx-2685199076{position:absolute;}button.jsx-2685199076,input.jsx-2685199076{top:6px;left:7px;}}@media (min-width:320px) and (max-width:1199px){.hamburguer-container.jsx-2685199076>input.jsx-2685199076{display:none;}.hamburguer-container.jsx-2685199076{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.menu-hamburguer.jsx-2685199076{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.hamburguer.jsx-2685199076{position:absolute;display:block;width:30px;height:2px;top:28px;right:15px;background:#000;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;}.hamburguer.jsx-2685199076:before,.hamburguer.jsx-2685199076:after{background:#000;content:\"\";display:block;width:30px;height:2px;position:absolute;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;}.hamburguer.jsx-2685199076:before{top:-10px;}.hamburguer.jsx-2685199076:after{bottom:-10px;}input.jsx-2685199076:checked~label.jsx-2685199076 .hamburguer.jsx-2685199076{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}input.jsx-2685199076:checked~label.jsx-2685199076 .hamburguer.jsx-2685199076:before{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:0;}input.jsx-2685199076:checked~label.jsx-2685199076 .hamburguer.jsx-2685199076:after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);bottom:0;}input.jsx-2685199076:checked~.menu-container.jsx-2685199076{-webkit-transform:translateX(300px);-ms-transform:translateX(300px);transform:translateX(300px);}.main-nav.jsx-2685199076{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-2685199076{visibility:hidden;position:absolute;}.nav-search.jsx-2685199076{font-family:\"Itim\",cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:10;}.search-bar.jsx-2685199076{display:none;position:absolute;right:70px;top:50px;}.search-bar-itens.jsx-2685199076:first-child{display:none;}.menu-container.jsx-2685199076{position:fixed;background:rgb(92,183,204);background:linear-gradient( 90deg, rgba(92,183,204,0.9) 49%, rgba(48,142,163,0.9) 100%, rgba(9,9,121,0.9) 100% );top:0;left:-300px;width:300px;height:100%;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;}.menu.jsx-2685199076{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.menu.jsx-2685199076 li.jsx-2685199076{display:block;padding:10px;width:60%;font-size:1em;text-align:center;margin:15px;color:#fff;font-weight:bold;}.menu.jsx-2685199076 li.jsx-2685199076:hover{cursor:pointer;}.menu.jsx-2685199076 li.jsx-2685199076 a.jsx-2685199076{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-2685199076 .inicio.jsx-2685199076{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2685199076 .inicio.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .software.jsx-2685199076{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2685199076 .software.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .download.jsx-2685199076{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2685199076 .download.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .tutorial.jsx-2685199076{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2685199076 .tutorial.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .forum.jsx-2685199076{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2685199076 .forum.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .creditos.jsx-2685199076{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2685199076 .creditos.jsx-2685199076:hover{background:#ffb151;color:#fff;}.menu.jsx-2685199076 .contato.jsx-2685199076{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2685199076 .contato.jsx-2685199076:hover{background:#ffb151;color:#fff;}.selected.jsx-2685199076{background:#ffb151;}.logo-rosto.jsx-2685199076{position:absolute;width:148px;height:98px;}.logo-sol.jsx-2685199076{width:148px;height:98px;}button.jsx-2685199076,input.jsx-2685199076{top:6px;left:7px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbWlzZ2FyY2lhL3Byb2plY3RzL3NpdGVzL25leHQtbHV6LWRvLXNhYmVyLWZ1bmRhbWVudGFsL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNIb0IsQUFLNEIsQUFHZ0IsQUFJWCxBQUlVLEFBTVYsQUFNQSxBQUtHLEFBVU4sQUFJSixBQU1rQixBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBS0EsQUFJQSxBQU1ELEFBS1YsQUFZSyxBQUdFLEFBU0EsQUFTRyxBQVlGLEFBVU4sQUFJRyxBQUlXLEFBSUEsQUFLQSxBQUtJLEFBU0MsQUFJWCxBQUlVLEFBT2YsQUFPQSxBQUdFLEFBcUJHLEFBUUosQUFXQyxBQUlKLEFBTWtCLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFLQSxBQUlELEFBS04sQUFNSixRQXhPQyxBQXlPQSxFQWxMWCxDQXJJdUIsQUF5T0EsQ0F3RVQsQ0EzVmQsQUFvSUEsQUErQ0EsQUEwQ29CLEFBT3BCLENBZ0NlLENBOU5mLEFBaUdXLEFBU0EsQUF1Rm9CLEFBd0MvQixDQTFHYSxDQTVDYixBQXlPQSxDQTNWb0IsQUFVUCxBQU1FLEFBNEZmLEFBc0NnQixBQXlESSxBQTBDTCxBQTBGRCxDQWxTRCxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQUtiLEFBSWEsQUFnTEEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFLYixFQXRUZSxHQTRHRyxBQVNBLEFBMk1sQixHQWpWZSxBQTJKQyxBQWdERCxBQStDSCxFQW5QRCxBQThCb0MsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUF5TEUsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQ0FwUmpELEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUytCLEFBZ0wvQixBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVNjLENBL1RkLEFBc01hLENBcEVBLEVBN0hDLEVBckJkLEFBMk1BLENBbURnQixDQW5QaEIsRUFzSG9CLEFBU0EsQ0FxQlAsQ0F3REYsQUFjUixBQTJHSCxDQTdMYSxHQTdISyxLQWtNbEIsQUF1Q29CLENBL0ZQLEVBWkYsSUFsQkUsQUFTQSxDQXBDYixFQXBFZ0IsQUF5T0EsQ0FyUEksQ0E4SFAsQUFZTyxNQTlCTixBQVNBLEFBb0hBLEVBdk5kLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEVBeUxBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLENBNUtrQixDQWxIbEIsQUF5T0EsS0FyUDJCLENBNEdkLEFBU0EsQUFzQmlCLEFBOEZqQixHQWxGYixBQUlRLEFBS0csTUFoQ21CLEFBNEI5QixFQS9DQSxBQVNBLEFBdUdxQixBQWFGLENBekVuQixHQUlBLEtBekx3QixBQTJNQSxJQXRMTixJQTBPbEIsWUF6T0EsRUEvQjJCLEFBMk1BLHNCQWxDM0IsR0F4S0EsQUEyTUEsTUE5Q0EsQ0E2RVEsTUFDTSxZQUNBLE1Bbk9XLEFBMk1BLE1BeUJYLEFBYVcsWUFYSSw4REFDN0IsbUJBdE9BLEFBMk1hLE1Bc0NJLEtBckNqQixvREFzQ3dCLDhFQUN4QiIsImZpbGUiOiIvaG9tZS9kYW1pc2dhcmNpYS9wcm9qZWN0cy9zaXRlcy9uZXh0LWx1ei1kby1zYWJlci1mdW5kYW1lbnRhbC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZWxlY3RlZCA9IFwiXCI7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBsZXQgZWxlbWVudHNTZWxlY3RlZCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICBcInNlbGVjdGVkXCJcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzU2VsZWN0ZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNTZWxlY3RlZFtpbmRleF07XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZC1mbGV4IHJvdyBtYWluLW5hdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGxvZ29cIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoaWRkZW4tdGl0bGVcIj5MVVogRE8gU0FCRVIgLSBQT1JUQUw8L2gxPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvLXJvc3RvXCJcbiAgICAgICAgICAgICAgc3JjPVwic3RhdGljL2xvZ28tcm9zdG8tMC5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvIFNvbCBMdXogZG8gU2FiZXJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjU1JVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvLXNvbFwiXG4gICAgICAgICAgICAgIHNyYz1cInN0YXRpYy9sb2dvLXJhaW9zLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIkxvZ28gU29sIEx1eiBkbyBTYWJlclwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTUlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IG5hdi1zZWFyY2hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgc2VhcmNoLWlucHV0LWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0IGZvcm0taW5wdXQtZm9udFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk8gUVVFIFZPQ8OKIFBST0NVUkE/XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1pdGVucyBidG4tY29udGFpbmVyIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vbHV6LWRvLXNhYmVyLXN0YWdpbmcuaGVyb2t1YXBwLmNvbS8jL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNlYXJjaC1pbnB1dCBidG4tZm9udC1saWdodCBmb3JtLWlucHV0LWZvbnRcIj5cbiAgICAgICAgICAgICAgICBFZGl0YXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgYnRuLWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gc2VhcmNoLWlucHV0IGJ0bi1mb250LWRhcmsgZm9ybS1pbnB1dC1mb250XCI+XG4gICAgICAgICAgICAgICAgSW5zdGFsYXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtZW51LWhhbWJ1cmd1ZXJcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lbnUtaGFtYnVyZ3VlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaGFtYnVyZ3VlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2wtc20gbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgXCJpbmljaW8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gXCJpbmljaW9cIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPGE+SW7DrWNpbzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamV0b1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2pldG8gZGlzYWJsZWRcIj5Qcm9qZXRvPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZG93bmxvYWQgZGlzYWJsZWRcIj5Eb3dubG9hZDwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInR1dG9yaWFsIGRpc2FibGVkXCI+VHV0b3JpYWw8L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb3J1bSBkaXNhYmxlZFwiPkbDs3J1bTwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNyZWRpdG9zIGRpc2FibGVkXCI+Q3LDqWRpdG9zPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRhdG8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gXCJjb250YWN0XCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICA8YT5Db250YXRvPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciA+IGlucHV0LFxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyID4gbGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1haW4tbmF2IHtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGlkZGVuLXRpdGxlIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXNlYXJjaCB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkl0aW1cIiwgY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWJhciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTE3cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgbGk6aG92ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IGxpIGEge1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgLmluaWNpbyB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuaW5pY2lvOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuc29mdHdhcmUge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZG93bmxvYWQge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAudHV0b3JpYWwge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnR1dG9yaWFsOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZm9ydW0ge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmZvcnVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY3JlZGl0b3Mge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY29udGF0byB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY29udGF0bzpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGlzYWJsZWQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkM2QzZDM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvLXJvc3RvIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgIE1FTlUgSEFNQlVSR1VFUlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciA+IGlucHV0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtaGFtYnVyZ3VlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgIHRvcDogMjhweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG5cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oYW1idXJndWVyOmJlZm9yZSxcbiAgICAgICAgICAgIC5oYW1idXJndWVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGFtYnVyZ3VlcjpiZWZvcmUge1xuICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGFtYnVyZ3VlcjphZnRlciB7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiBsYWJlbCAuaGFtYnVyZ3VlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJndWVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwgLmhhbWJ1cmd1ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgIE1FTlUgSEFNQlVSR1VFUlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgLm1haW4tbmF2IHtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGlkZGVuLXRpdGxlIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXNlYXJjaCB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkl0aW1cIiwgY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWJhci1pdGVuczpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIC8qIEJBUlJBIERFIFBFU1FVSVNBICovXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig5MiwgMTgzLCAyMDQpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgOTBkZWcsXG4gICAgICAgICAgICAgICAgcmdiYSg5MiwgMTgzLCAyMDQsIDAuOSkgNDklLFxuICAgICAgICAgICAgICAgIHJnYmEoNDgsIDE0MiwgMTYzLCAwLjkpIDEwMCUsXG4gICAgICAgICAgICAgICAgcmdiYSg5LCA5LCAxMjEsIDAuOSkgMTAwJVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IC0zMDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLyogLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSBsaSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgbGk6aG92ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IGxpIGEge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgLmluaWNpbyB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5pbmljaW86aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5zb2Z0d2FyZSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5zb2Z0d2FyZTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAudHV0b3JpYWwge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAudHV0b3JpYWw6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5mb3J1bSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5mb3J1bTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY29udGF0byB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jb250YXRvOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvLXJvc3RvIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogMTQ4cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogOThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvLXNvbCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNDhweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/home/damisgarcia/projects/sites/next-luz-do-saber-fundamental/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=projeto.js.0fbe1e3852df3a1606ee.hot-update.js.map