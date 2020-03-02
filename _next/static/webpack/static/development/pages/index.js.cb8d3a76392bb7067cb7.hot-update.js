webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/mnt/c/Users/mrodr/Documents/Projetos/fundamental-luz/components/Header.js";





var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.selected = "";
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "jsx-555674887" + " " + "d-flex row main-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "col-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "row logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-555674887" + " " + "hidden-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "LUZ DO SABER - PORTAL"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/logo-rosto-0.png",
        alt: "Logo Sol Luz do Saber",
        width: "55%",
        className: "jsx-555674887" + " " + "logo-rosto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/logo-raios.png",
        alt: "Logo Sol Luz do Saber",
        width: "55%",
        className: "jsx-555674887" + " " + "logo-rosto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "col-sm-8 nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "row search-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "search-bar-itens search-input-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "search",
        id: "search",
        placeholder: "O QUE VOC\xCA PROCURA?",
        className: "jsx-555674887" + " " + "search-input form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        action: "https://luz-do-saber-staging.herokuapp.com/#/",
        target: "_blank",
        className: "jsx-555674887" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-555674887" + " " + "btn search-input btn-font-light form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Editar")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-555674887" + " " + "btn search-input btn-font-dark form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Instalar"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "hamburguer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "menu-hamburguer",
        type: "checkbox",
        className: "jsx-555674887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "menu-hamburguer",
        className: "jsx-555674887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "menu-hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-555674887" + " " + "hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "row menu-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-555674887" + " " + "col-sm menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + ("inicio " + (this.props.selected === "inicio" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-555674887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "In\xEDcio"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + "software disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "software")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + "download disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + "tutorial disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Tutorial")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + "forum disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "F\xF3rum")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + "creditos disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Cr\xE9ditos")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + ("contato " + (this.props.selected === "contact" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-555674887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Contato"))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "555674887",
        __self: this
      }, "@media (min-width:1200px){.hamburguer-container.jsx-555674887>input.jsx-555674887,.hamburguer-container.jsx-555674887>label.jsx-555674887{display:none;}.main-nav.jsx-555674887{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-555674887{visibility:hidden;position:absolute;}.nav-search.jsx-555674887{font-family:\"Itim\",cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.search-bar.jsx-555674887{position:absolute;right:70px;top:50px;}.menu.jsx-555674887{position:absolute;bottom:-17px;}.menu.jsx-555674887 li.jsx-555674887{display:inline-block;padding:10px;width:100px;font-size:0.8em;text-align:center;border:1px solid #f0f0f0;margin-left:1px;}.menu.jsx-555674887 li.jsx-555674887:hover{cursor:pointer;}.menu.jsx-555674887 li.jsx-555674887 a.jsx-555674887{color:#333;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-555674887 .inicio.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .inicio.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .software.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .software.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .download.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .download.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .tutorial.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .tutorial.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .forum.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .forum.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .creditos.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .creditos.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .contato.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .contato.jsx-555674887:hover{background:#ffb151;color:#fff;}.selected.jsx-555674887{background:#ffb151;}.disabled.jsx-555674887{background:#d3d3d3;color:#fff;border-top:3px solid #d3d3d3;}.logo-rosto.jsx-555674887{position:absolute;}button.jsx-555674887,input.jsx-555674887{top:6px;left:7px;}}@media (min-width:320px) and (max-width:1199px){.hamburguer-container.jsx-555674887>input.jsx-555674887{display:none;}.hamburguer-container.jsx-555674887{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.menu-hamburguer.jsx-555674887{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.hamburguer.jsx-555674887{position:absolute;display:block;width:30px;height:2px;top:28px;right:15px;background:#000;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;}.hamburguer.jsx-555674887:before,.hamburguer.jsx-555674887:after{background:#000;content:\"\";display:block;width:30px;height:2px;position:absolute;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;}.hamburguer.jsx-555674887:before{top:-10px;}.hamburguer.jsx-555674887:after{bottom:-10px;}input.jsx-555674887:checked~label.jsx-555674887 .hamburguer.jsx-555674887{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}input.jsx-555674887:checked~label.jsx-555674887 .hamburguer.jsx-555674887:before{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:0;}input.jsx-555674887:checked~label.jsx-555674887 .hamburguer.jsx-555674887:after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);bottom:0;}input.jsx-555674887:checked~.menu-container.jsx-555674887{-webkit-transform:translateX(300px);-ms-transform:translateX(300px);transform:translateX(300px);}.main-nav.jsx-555674887{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-555674887{visibility:hidden;position:absolute;}.nav-search.jsx-555674887{font-family:\"Itim\",cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:10;}.search-bar.jsx-555674887{display:none;position:absolute;right:70px;top:50px;}.search-bar-itens.jsx-555674887:first-child{display:none;}.menu-container.jsx-555674887{position:fixed;background:rgb(92,183,204);background:linear-gradient( 90deg, rgba(92,183,204,0.9) 49%, rgba(48,142,163,0.9) 100%, rgba(9,9,121,0.9) 100% );top:0;left:-300px;width:300px;height:100%;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;}.menu.jsx-555674887{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.menu.jsx-555674887 li.jsx-555674887{display:block;padding:10px;width:60%;font-size:1em;text-align:center;margin:15px;color:#fff;font-weight:bold;}.menu.jsx-555674887 li.jsx-555674887:hover{cursor:pointer;}.menu.jsx-555674887 li.jsx-555674887 a.jsx-555674887{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-555674887 .inicio.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .inicio.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .software.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .software.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .download.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .download.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .tutorial.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .tutorial.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .forum.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .forum.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .creditos.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .creditos.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .contato.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .contato.jsx-555674887:hover{background:#ffb151;color:#fff;}.selected.jsx-555674887{background:#ffb151;}.logo-rosto.jsx-555674887{position:absolute;width:168px;height:108px;}button.jsx-555674887,input.jsx-555674887{top:6px;left:7px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9tcm9kci9Eb2N1bWVudHMvUHJvamV0b3MvZnVuZGFtZW50YWwtbHV6L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNIb0IsQUFLNEIsQUFHZ0IsQUFJWCxBQUlVLEFBTVYsQUFNQSxBQUtHLEFBVU4sQUFJSixBQU1rQixBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBS0EsQUFJQSxBQU1ELEFBS1YsQUFZSyxBQUdFLEFBU0EsQUFTRyxBQVlGLEFBVU4sQUFJRyxBQUlXLEFBSUEsQUFLQSxBQUtJLEFBU0MsQUFJWCxBQUlVLEFBT2YsQUFPQSxBQUdFLEFBcUJHLEFBUUosQUFXQyxBQUlKLEFBTWtCLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFLQSxBQUlELEFBT1YsUUFwT0MsQUFxT0EsRUE5S1gsQ0FySXVCLEFBeU9BLEVBblJ2QixBQW9JQSxBQStDQSxBQTBDb0IsQUFPcEIsQ0FnQ2UsQ0E5TmYsQUFpR1csQUFTQSxBQXVGb0IsQUF3Qy9CLENBMUdhLENBNUNiLEFBcU9BLENBdlZvQixBQVVQLEFBTUUsQUE0RmYsQUFzQ2dCLEFBeURJLEFBMENMLEFBMEZELENBbFNELEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBS2IsQUFJYSxBQWdMQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQUtiLEVBdFRlLEdBNEdHLEFBU0EsR0F0SUgsQUEySkMsQUFnREQsQUErQ0gsRUFuUEQsQUE4Qm9DLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBeUxFLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLENBcFJqRCxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVMrQixBQWdML0IsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFTZSxDQS9UZixBQXNNYSxDQXBFQSxFQTdIQyxFQXJCZCxBQTJNQSxDQW1EZ0IsQ0FuUGhCLEVBc0hvQixBQVNBLENBcUJQLENBd0RGLEFBY1IsQ0FsRlUsQUE2TGIsR0ExVGtCLEtBa01sQixBQXVDb0IsQ0EvRlAsRUFaRixJQWxCRSxBQVNBLENBcENiLEVBcEVnQixBQXlPQSxDQXJQSSxDQThIUCxBQVlPLE1BOUJOLEFBU0EsQUFvSEEsRUF2TmQsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsRUF5TEEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQ0E1S2tCLENBbEhsQixBQXlPQSxLQXJQMkIsQ0E0R2QsQUFTQSxBQXNCaUIsQUE4RmpCLEdBbEZiLEFBSVEsQUFLRyxNQWhDbUIsQUE0QjlCLEVBL0NBLEFBU0EsQUF1R3FCLEFBYUYsQ0F6RW5CLEdBSUEsS0F6THdCLEFBMk1BLElBdExOLElBME9sQixZQXpPQSxFQS9CMkIsQUEyTUEsc0JBbEMzQixHQXhLQSxBQTJNQSxNQTlDQSxDQTZFUSxNQUNNLFlBQ0EsTUFuT1csQUEyTUEsTUF5QlgsQUFhVyxZQVhJLDhEQUM3QixtQkF0T0EsQUEyTWEsTUFzQ0ksS0FyQ2pCLG9EQXNDd0IsOEVBQ3hCIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9tcm9kci9Eb2N1bWVudHMvUHJvamV0b3MvZnVuZGFtZW50YWwtbHV6L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gXCJcIjtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGxldCBlbGVtZW50c1NlbGVjdGVkID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgIFwic2VsZWN0ZWRcIlxuICAgICk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHNTZWxlY3RlZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1NlbGVjdGVkW2luZGV4XTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudC5jbGFzc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJkLWZsZXggcm93IG1haW4tbmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbG9nb1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhpZGRlbi10aXRsZVwiPkxVWiBETyBTQUJFUiAtIFBPUlRBTDwvaDE+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ28tcm9zdG9cIlxuICAgICAgICAgICAgICBzcmM9XCJzdGF0aWMvbG9nby1yb3N0by0wLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIkxvZ28gU29sIEx1eiBkbyBTYWJlclwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTUlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ28tcm9zdG9cIlxuICAgICAgICAgICAgICBzcmM9XCJzdGF0aWMvbG9nby1yYWlvcy5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvIFNvbCBMdXogZG8gU2FiZXJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjU1JVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBuYXYtc2VhcmNoXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc2VhcmNoLWJhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLWl0ZW5zIHNlYXJjaC1pbnB1dC1jb250YWluZXIgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dCBmb3JtLWlucHV0LWZvbnRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPIFFVRSBWT0PDiiBQUk9DVVJBP1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgYnRuLWNvbnRhaW5lciBzaGFkb3ctc21cIlxuICAgICAgICAgICAgICBhY3Rpb249XCJodHRwczovL2x1ei1kby1zYWJlci1zdGFnaW5nLmhlcm9rdWFwcC5jb20vIy9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBzZWFyY2gtaW5wdXQgYnRuLWZvbnQtbGlnaHQgZm9ybS1pbnB1dC1mb250XCI+XG4gICAgICAgICAgICAgICAgRWRpdGFyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLWl0ZW5zIGJ0bi1jb250YWluZXIgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNlYXJjaC1pbnB1dCBidG4tZm9udC1kYXJrIGZvcm0taW5wdXQtZm9udFwiPlxuICAgICAgICAgICAgICAgIEluc3RhbGFyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJndWVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWVudS1oYW1idXJndWVyXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZW51LWhhbWJ1cmd1ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWhhbWJ1cmd1ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJndWVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtZW51LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sLXNtIG1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIFwiaW5pY2lvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPT09IFwiaW5pY2lvXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhPkluw61jaW88L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb2Z0d2FyZSBkaXNhYmxlZFwiPnNvZnR3YXJlPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZG93bmxvYWQgZGlzYWJsZWRcIj5Eb3dubG9hZDwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInR1dG9yaWFsIGRpc2FibGVkXCI+VHV0b3JpYWw8L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb3J1bSBkaXNhYmxlZFwiPkbDs3J1bTwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNyZWRpdG9zIGRpc2FibGVkXCI+Q3LDqWRpdG9zPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRhdG8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gXCJjb250YWN0XCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICA8YT5Db250YXRvPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciA+IGlucHV0LFxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyID4gbGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1haW4tbmF2IHtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGlkZGVuLXRpdGxlIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXNlYXJjaCB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkl0aW1cIiwgY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWJhciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTE3cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgbGk6aG92ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IGxpIGEge1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgLmluaWNpbyB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuaW5pY2lvOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuc29mdHdhcmUge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZG93bmxvYWQge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAudHV0b3JpYWwge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnR1dG9yaWFsOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZm9ydW0ge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmZvcnVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY3JlZGl0b3Mge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY29udGF0byB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY29udGF0bzpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGlzYWJsZWQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkM2QzZDM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvLXJvc3RvIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgIE1FTlUgSEFNQlVSR1VFUlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciA+IGlucHV0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtaGFtYnVyZ3VlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgIHRvcDogMjhweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG5cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oYW1idXJndWVyOmJlZm9yZSxcbiAgICAgICAgICAgIC5oYW1idXJndWVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGFtYnVyZ3VlcjpiZWZvcmUge1xuICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGFtYnVyZ3VlcjphZnRlciB7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiBsYWJlbCAuaGFtYnVyZ3VlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJndWVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwgLmhhbWJ1cmd1ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgIE1FTlUgSEFNQlVSR1VFUlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgLm1haW4tbmF2IHtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGlkZGVuLXRpdGxlIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXNlYXJjaCB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkl0aW1cIiwgY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWJhci1pdGVuczpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIC8qIEJBUlJBIERFIFBFU1FVSVNBICovXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig5MiwgMTgzLCAyMDQpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgOTBkZWcsXG4gICAgICAgICAgICAgICAgcmdiYSg5MiwgMTgzLCAyMDQsIDAuOSkgNDklLFxuICAgICAgICAgICAgICAgIHJnYmEoNDgsIDE0MiwgMTYzLCAwLjkpIDEwMCUsXG4gICAgICAgICAgICAgICAgcmdiYSg5LCA5LCAxMjEsIDAuOSkgMTAwJVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IC0zMDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLyogLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSBsaSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgbGk6aG92ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IGxpIGEge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgLmluaWNpbyB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5pbmljaW86aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5zb2Z0d2FyZSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5zb2Z0d2FyZTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAudHV0b3JpYWwge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAudHV0b3JpYWw6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5mb3J1bSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5mb3J1bTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY29udGF0byB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jb250YXRvOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvLXJvc3RvIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogMTY4cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTA4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/mnt/c/Users/mrodr/Documents/Projetos/fundamental-luz/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.cb8d3a76392bb7067cb7.hot-update.js.map