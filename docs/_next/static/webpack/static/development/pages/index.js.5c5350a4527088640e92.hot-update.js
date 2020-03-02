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
        className: "jsx-555674887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "col-sm-8 nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "row search-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "search-bar-itens search-input-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
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
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        action: "https://luz-do-saber-staging.herokuapp.com/#/",
        target: "_blank",
        className: "jsx-555674887" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-555674887" + " " + "btn search-input btn-font-light form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Editar")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-555674887" + " " + "btn search-input btn-font-dark form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Instalar"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "hamburguer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "menu-hamburguer",
        type: "checkbox",
        className: "jsx-555674887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "menu-hamburguer",
        className: "jsx-555674887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "menu-hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-555674887" + " " + "hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-555674887" + " " + "row menu-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-555674887" + " " + "col-sm menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + ("inicio " + (this.props.selected === "inicio" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-555674887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "In\xEDcio"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + "software disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "software")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + "download disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + "tutorial disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Tutorial")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + "forum disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "F\xF3rum")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + "creditos disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Cr\xE9ditos")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-555674887" + " " + ("contato " + (this.props.selected === "contact" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-555674887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Contato"))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "555674887",
        __self: this
      }, "@media (min-width:1200px){.hamburguer-container.jsx-555674887>input.jsx-555674887,.hamburguer-container.jsx-555674887>label.jsx-555674887{display:none;}.main-nav.jsx-555674887{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-555674887{visibility:hidden;position:absolute;}.nav-search.jsx-555674887{font-family:\"Itim\",cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.search-bar.jsx-555674887{position:absolute;right:70px;top:50px;}.menu.jsx-555674887{position:absolute;bottom:-17px;}.menu.jsx-555674887 li.jsx-555674887{display:inline-block;padding:10px;width:100px;font-size:0.8em;text-align:center;border:1px solid #f0f0f0;margin-left:1px;}.menu.jsx-555674887 li.jsx-555674887:hover{cursor:pointer;}.menu.jsx-555674887 li.jsx-555674887 a.jsx-555674887{color:#333;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-555674887 .inicio.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .inicio.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .software.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .software.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .download.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .download.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .tutorial.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .tutorial.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .forum.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .forum.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .creditos.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .creditos.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .contato.jsx-555674887{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-555674887 .contato.jsx-555674887:hover{background:#ffb151;color:#fff;}.selected.jsx-555674887{background:#ffb151;}.disabled.jsx-555674887{background:#d3d3d3;color:#fff;border-top:3px solid #d3d3d3;}.logo-rosto.jsx-555674887{position:absolute;}button.jsx-555674887,input.jsx-555674887{top:6px;left:7px;}}@media (min-width:320px) and (max-width:1199px){.hamburguer-container.jsx-555674887>input.jsx-555674887{display:none;}.hamburguer-container.jsx-555674887{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.menu-hamburguer.jsx-555674887{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.hamburguer.jsx-555674887{position:absolute;display:block;width:30px;height:2px;top:28px;right:15px;background:#000;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;}.hamburguer.jsx-555674887:before,.hamburguer.jsx-555674887:after{background:#000;content:\"\";display:block;width:30px;height:2px;position:absolute;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;}.hamburguer.jsx-555674887:before{top:-10px;}.hamburguer.jsx-555674887:after{bottom:-10px;}input.jsx-555674887:checked~label.jsx-555674887 .hamburguer.jsx-555674887{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}input.jsx-555674887:checked~label.jsx-555674887 .hamburguer.jsx-555674887:before{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:0;}input.jsx-555674887:checked~label.jsx-555674887 .hamburguer.jsx-555674887:after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);bottom:0;}input.jsx-555674887:checked~.menu-container.jsx-555674887{-webkit-transform:translateX(300px);-ms-transform:translateX(300px);transform:translateX(300px);}.main-nav.jsx-555674887{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-555674887{visibility:hidden;position:absolute;}.nav-search.jsx-555674887{font-family:\"Itim\",cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:10;}.search-bar.jsx-555674887{display:none;position:absolute;right:70px;top:50px;}.search-bar-itens.jsx-555674887:first-child{display:none;}.menu-container.jsx-555674887{position:fixed;background:rgb(92,183,204);background:linear-gradient( 90deg, rgba(92,183,204,0.9) 49%, rgba(48,142,163,0.9) 100%, rgba(9,9,121,0.9) 100% );top:0;left:-300px;width:300px;height:100%;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;}.menu.jsx-555674887{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.menu.jsx-555674887 li.jsx-555674887{display:block;padding:10px;width:60%;font-size:1em;text-align:center;margin:15px;color:#fff;font-weight:bold;}.menu.jsx-555674887 li.jsx-555674887:hover{cursor:pointer;}.menu.jsx-555674887 li.jsx-555674887 a.jsx-555674887{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-555674887 .inicio.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .inicio.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .software.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .software.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .download.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .download.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .tutorial.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .tutorial.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .forum.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .forum.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .creditos.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .creditos.jsx-555674887:hover{background:#ffb151;color:#fff;}.menu.jsx-555674887 .contato.jsx-555674887{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-555674887 .contato.jsx-555674887:hover{background:#ffb151;color:#fff;}.selected.jsx-555674887{background:#ffb151;}.logo-rosto.jsx-555674887{position:absolute;width:168px;height:108px;}button.jsx-555674887,input.jsx-555674887{top:6px;left:7px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9tcm9kci9Eb2N1bWVudHMvUHJvamV0b3MvZnVuZGFtZW50YWwtbHV6L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFIb0IsQUFLNEIsQUFHZ0IsQUFJWCxBQUlVLEFBTVYsQUFNQSxBQUtHLEFBVU4sQUFJSixBQU1rQixBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBS0EsQUFJQSxBQU1ELEFBS1YsQUFZSyxBQUdFLEFBU0EsQUFTRyxBQVlGLEFBVU4sQUFJRyxBQUlXLEFBSUEsQUFLQSxBQUtJLEFBU0MsQUFJWCxBQUlVLEFBT2YsQUFPQSxBQUdFLEFBcUJHLEFBUUosQUFXQyxBQUlKLEFBTWtCLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFJVSxBQUlWLEFBSVUsQUFJVixBQUlVLEFBSVYsQUFLQSxBQUlELEFBT1YsUUFwT0MsQUFxT0EsRUE5S1gsQ0FySXVCLEFBeU9BLEVBblJ2QixBQW9JQSxBQStDQSxBQTBDb0IsQUFPcEIsQ0FnQ2UsQ0E5TmYsQUFpR1csQUFTQSxBQXVGb0IsQUF3Qy9CLENBMUdhLENBNUNiLEFBcU9BLENBdlZvQixBQVVQLEFBTUUsQUE0RmYsQUFzQ2dCLEFBeURJLEFBMENMLEFBMEZELENBbFNELEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBS2IsQUFJYSxBQWdMQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQUtiLEVBdFRlLEdBNEdHLEFBU0EsR0F0SUgsQUEySkMsQUFnREQsQUErQ0gsRUFuUEQsQUE4Qm9DLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBeUxFLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLENBcFJqRCxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVMrQixBQWdML0IsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFTZSxDQS9UZixBQXNNYSxDQXBFQSxFQTdIQyxFQXJCZCxBQTJNQSxDQW1EZ0IsQ0FuUGhCLEVBc0hvQixBQVNBLENBcUJQLENBd0RGLEFBY1IsQ0FsRlUsQUE2TGIsR0ExVGtCLEtBa01sQixBQXVDb0IsQ0EvRlAsRUFaRixJQWxCRSxBQVNBLENBcENiLEVBcEVnQixBQXlPQSxDQXJQSSxDQThIUCxBQVlPLE1BOUJOLEFBU0EsQUFvSEEsRUF2TmQsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsRUF5TEEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQ0E1S2tCLENBbEhsQixBQXlPQSxLQXJQMkIsQ0E0R2QsQUFTQSxBQXNCaUIsQUE4RmpCLEdBbEZiLEFBSVEsQUFLRyxNQWhDbUIsQUE0QjlCLEVBL0NBLEFBU0EsQUF1R3FCLEFBYUYsQ0F6RW5CLEdBSUEsS0F6THdCLEFBMk1BLElBdExOLElBME9sQixZQXpPQSxFQS9CMkIsQUEyTUEsc0JBbEMzQixHQXhLQSxBQTJNQSxNQTlDQSxDQTZFUSxNQUNNLFlBQ0EsTUFuT1csQUEyTUEsTUF5QlgsQUFhVyxZQVhJLDhEQUM3QixtQkF0T0EsQUEyTWEsTUFzQ0ksS0FyQ2pCLG9EQXNDd0IsOEVBQ3hCIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9tcm9kci9Eb2N1bWVudHMvUHJvamV0b3MvZnVuZGFtZW50YWwtbHV6L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gXCJcIjtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGxldCBlbGVtZW50c1NlbGVjdGVkID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgIFwic2VsZWN0ZWRcIlxuICAgICk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHNTZWxlY3RlZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1NlbGVjdGVkW2luZGV4XTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudC5jbGFzc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJkLWZsZXggcm93IG1haW4tbmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbG9nb1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhpZGRlbi10aXRsZVwiPkxVWiBETyBTQUJFUiAtIFBPUlRBTDwvaDE+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ28tcm9zdG9cIlxuICAgICAgICAgICAgICBzcmM9XCJzdGF0aWMvbG9nby1yb3N0by0wLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIkxvZ28gU29sIEx1eiBkbyBTYWJlclwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTUlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cInN0YXRpYy9sb2dvLXJhaW9zLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIkxvZ28gU29sIEx1eiBkbyBTYWJlclwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTUlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IG5hdi1zZWFyY2hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgc2VhcmNoLWlucHV0LWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0IGZvcm0taW5wdXQtZm9udFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk8gUVVFIFZPQ8OKIFBST0NVUkE/XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1pdGVucyBidG4tY29udGFpbmVyIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vbHV6LWRvLXNhYmVyLXN0YWdpbmcuaGVyb2t1YXBwLmNvbS8jL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNlYXJjaC1pbnB1dCBidG4tZm9udC1saWdodCBmb3JtLWlucHV0LWZvbnRcIj5cbiAgICAgICAgICAgICAgICBFZGl0YXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgYnRuLWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gc2VhcmNoLWlucHV0IGJ0bi1mb250LWRhcmsgZm9ybS1pbnB1dC1mb250XCI+XG4gICAgICAgICAgICAgICAgSW5zdGFsYXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtZW51LWhhbWJ1cmd1ZXJcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lbnUtaGFtYnVyZ3VlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaGFtYnVyZ3VlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2wtc20gbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgXCJpbmljaW8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gXCJpbmljaW9cIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPGE+SW7DrWNpbzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvZnR3YXJlIGRpc2FibGVkXCI+c29mdHdhcmU8L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkb3dubG9hZCBkaXNhYmxlZFwiPkRvd25sb2FkPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHV0b3JpYWwgZGlzYWJsZWRcIj5UdXRvcmlhbDwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZvcnVtIGRpc2FibGVkXCI+RsOzcnVtPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3JlZGl0b3MgZGlzYWJsZWRcIj5DcsOpZGl0b3M8L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIFwiY29udGF0byBcIiArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnNlbGVjdGVkID09PSBcImNvbnRhY3RcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhPkNvbnRhdG88L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyID4gaW5wdXQsXG4gICAgICAgICAgICAuaGFtYnVyZ3Vlci1jb250YWluZXIgPiBsYWJlbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWFpbi1uYXYge1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oaWRkZW4tdGl0bGUge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc2VhcmNoIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSXRpbVwiLCBjdXJzaXZlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWFyY2gtYmFyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogNzBweDtcbiAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAtMTdweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgbGkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSBsaTpob3ZlciB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgbGkgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSAuaW5pY2lvIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5pbmljaW86aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5zb2Z0d2FyZSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuc29mdHdhcmU6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5kb3dubG9hZCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZG93bmxvYWQ6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAudHV0b3JpYWw6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5mb3J1bSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZm9ydW06aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jcmVkaXRvcyB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY3JlZGl0b3M6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jb250YXRvIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jb250YXRvOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2QzZDNkMztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tcm9zdG8ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgTUVOVSBIQU1CVVJHVUVSXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyID4gaW5wdXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1oYW1idXJndWVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGFtYnVyZ3VlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgdG9wOiAyOHB4O1xuICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcblxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXI6YmVmb3JlLFxuICAgICAgICAgICAgLmhhbWJ1cmd1ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oYW1idXJndWVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oYW1idXJndWVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJndWVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwgLmhhbWJ1cmd1ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiBsYWJlbCAuaGFtYnVyZ3VlcjphZnRlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgTUVOVSBIQU1CVVJHVUVSXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAubWFpbi1uYXYge1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oaWRkZW4tdGl0bGUge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtc2VhcmNoIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSXRpbVwiLCBjdXJzaXZlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoLWJhciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWFyY2gtYmFyLWl0ZW5zOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgLyogQkFSUkEgREUgUEVTUVVJU0EgKi9cbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDkyLCAxODMsIDIwNCk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICA5MGRlZyxcbiAgICAgICAgICAgICAgICByZ2JhKDkyLCAxODMsIDIwNCwgMC45KSA0OSUsXG4gICAgICAgICAgICAgICAgcmdiYSg0OCwgMTQyLCAxNjMsIDAuOSkgMTAwJSxcbiAgICAgICAgICAgICAgICByZ2JhKDksIDksIDEyMSwgMC45KSAxMDAlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogLTMwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvKiAuZXhwYW5kZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSBsaTpob3ZlciB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgbGkgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSAuaW5pY2lvIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmluaWNpbzpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZG93bmxvYWQge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuZG93bmxvYWQ6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbDpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmIxNTE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmZvcnVtIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmZvcnVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY3JlZGl0b3Mge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAuY3JlZGl0b3M6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5jb250YXRvIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgLmNvbnRhdG86aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiMTUxO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjE1MTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tcm9zdG8ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNjhweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgICAgbGVmdDogN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/mnt/c/Users/mrodr/Documents/Projetos/fundamental-luz/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.5c5350a4527088640e92.hot-update.js.map