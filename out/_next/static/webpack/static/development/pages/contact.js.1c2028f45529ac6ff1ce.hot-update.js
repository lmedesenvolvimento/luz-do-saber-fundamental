webpackHotUpdate("static/development/pages/contact.js",{

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





var _jsxFileName = "/home/ronin/Documentos/Projetos/fundamental-luzdosaber/components/Header.js";





var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.selected = '';
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var elementsSelected = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(this).getElementsByClassName('selected');

      for (var index = 0; index < elementsSelected.length; index++) {
        var element = elementsSelected[index];
        element.classList.remove('selected');
        console.log(element.classList);
      }
    }
  }, {
    key: "menuExpander",
    value: function menuExpander() {
      var menu = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(this).getElementsByClassName('menu-container');

      if (menu[0].classList.contains('expanded')) {
        menu[0].classList.remove('expanded');
      } else {
        menu[0].classList.add('expanded');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "jsx-360827402" + " " + "d-flex row main-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-360827402" + " " + "col-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-360827402" + " " + "row logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-360827402" + " " + "hidden-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "LUZ DO SABER - PORTAL"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/logo-rosto-0.png",
        alt: "Logo Sol Luz do Saber",
        width: "55%",
        className: "jsx-360827402" + " " + "logo-rosto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/logo-raios.png",
        alt: "Logo Sol Luz do Saber",
        width: "55%",
        className: "jsx-360827402",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-360827402" + " " + "col-sm-8 nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-360827402" + " " + "hamburguer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "menu-hamburguer",
        type: "checkbox",
        className: "jsx-360827402",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "menu-hamburguer",
        className: "jsx-360827402",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.menuExpander();
        },
        className: "jsx-360827402" + " " + "menu-hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-360827402" + " " + "hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-360827402" + " " + "row search-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-360827402" + " " + "search-bar-itens search-input-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "search",
        id: "search",
        placeholder: "O QUE VOC\xCA PROCURA?",
        className: "jsx-360827402" + " " + "search-input form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        action: "https://luz-do-saber-staging.herokuapp.com/#/",
        target: "_blank",
        className: "jsx-360827402" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-360827402" + " " + "btn search-input btn-font-light form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Editar")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-360827402" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-360827402" + " " + "btn search-input btn-font-dark form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Instalar"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-360827402" + " " + "row menu-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-360827402" + " " + "col-sm menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-360827402" + " " + ("inicio " + (this.props.selected === "inicio" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-360827402",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "In\xEDcio"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-360827402" + " " + "software disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "software")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-360827402" + " " + "download disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-360827402" + " " + "tutorial disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Tutorial")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-360827402" + " " + "forum disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "F\xF3rum")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-360827402" + " " + "creditos disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Cr\xE9ditos")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-360827402" + " " + ("contato " + (this.props.selected === "contact" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-360827402",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Contato")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "360827402",
        __self: this
      }, "@media (min-width:1200px){.hamburguer-container.jsx-360827402{display:none;}.main-nav.jsx-360827402{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-360827402{visibility:hidden;position:absolute;}.nav-search.jsx-360827402{font-family:'Itim',cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.search-bar.jsx-360827402{position:absolute;right:70px;top:50px;}.menu.jsx-360827402{position:absolute;bottom:-17px;}.menu.jsx-360827402 li.jsx-360827402{display:inline-block;padding:10px;width:100px;font-size:0.8em;text-align:center;border:1px solid #F0F0F0;margin-left:1px;}.menu.jsx-360827402 li.jsx-360827402:hover{cursor:pointer;}.menu.jsx-360827402 li.jsx-360827402 a.jsx-360827402{color:#333;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-360827402 .inicio.jsx-360827402{border:1px solid transparent;border-top:3px solid #FFB151;}.menu.jsx-360827402 .inicio.jsx-360827402:hover{background:#FFB151;color:#fff;}.menu.jsx-360827402 .software.jsx-360827402{border:1px solid transparent;border-top:3px solid #F766AE;}.menu.jsx-360827402 .software.jsx-360827402:hover{background:#F766AE;color:#fff;}.menu.jsx-360827402 .download.jsx-360827402{border:1px solid transparent;border-top:3px solid #AE67E0;}.menu.jsx-360827402 .download.jsx-360827402:hover{background:#AE67E0;color:#fff;}.menu.jsx-360827402 .tutorial.jsx-360827402{border:1px solid transparent;border-top:3px solid #757BFA;}.menu.jsx-360827402 .tutorial.jsx-360827402:hover{background:#757BFA;color:#fff;}.menu.jsx-360827402 .forum.jsx-360827402{border:1px solid transparent;border-top:3px solid #75C0FF;}.menu.jsx-360827402 .forum.jsx-360827402:hover{background:#75C0FF;color:#fff;}.menu.jsx-360827402 .creditos.jsx-360827402{border:1px solid transparent;border-top:3px solid #50C0AA;}.menu.jsx-360827402 .creditos.jsx-360827402:hover{background:#50C0AA;color:#fff;}.menu.jsx-360827402 .contato.jsx-360827402{border:1px solid transparent;border-top:3px solid #50946D;}.menu.jsx-360827402 .ontato.jsx-360827402:hover{background:#50946D;color:#fff;}.selected.jsx-360827402{background:#FFB151;}.disabled.jsx-360827402{background:#d3d3d3;color:#fff;border-top:3px solid #d3d3d3;}.logo-rosto.jsx-360827402{position:absolute;}button.jsx-360827402,input.jsx-360827402{top:6px;left:7px;}.search-bar.jsx-360827402{margin-top:-20px;}}@media (min-width:320px) and (max-width:1199px){.logo-rosto.jsx-360827402{position:absolute;max-width:100%;}.hamburguer-container.jsx-360827402>input.jsx-360827402{display:none;}.hamburguer-container.jsx-360827402{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.menu-hamburguer.jsx-360827402{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.hamburguer.jsx-360827402{position:absolute;display:block;width:30px;height:2px;top:28px;right:15px;background:#000;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out;}.hamburguer.jsx-360827402:before,.hamburguer.jsx-360827402:after{background:#000;content:'';display:block;width:30px;height:2px;position:absolute;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out;}.hamburguer.jsx-360827402:before{top:-10px;}.hamburguer.jsx-360827402:after{bottom:-10px;}input.jsx-360827402:checked~label.jsx-360827402 .hamburguer.jsx-360827402{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}input.jsx-360827402:checked~label.jsx-360827402 .hamburguer.jsx-360827402:before{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:0;}input.jsx-360827402:checked~label.jsx-360827402 .hamburguer.jsx-360827402:after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);bottom:0;}.main-nav.jsx-360827402{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-360827402{visibility:hidden;position:absolute;}.nav-search.jsx-360827402{font-family:'Itim',cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:10;}.search-bar.jsx-360827402{display:none;position:absolute;right:70px;top:50px;}.search-bar-itens.jsx-360827402:first-child{display:none;}.menu-container.jsx-360827402{position:fixed;background:rgb(92,183,204);background:linear-gradient(90deg,rgba(92,183,204,0.9) 49%,rgba(48,142,163,0.9) 100%,rgba(9,9,121,0.9) 100%);top:0;left:-300px;width:300px;height:100%;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;}.expanded.jsx-360827402{-webkit-transform:translateX(300px);-ms-transform:translateX(300px);transform:translateX(300px);}.menu.jsx-360827402{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.menu.jsx-360827402 li.jsx-360827402{display:block;padding:10px;width:60%;font-size:1em;text-align:center;margin:15px;color:#fff;font-weight:bold;}.menu.jsx-360827402 li.jsx-360827402:hover{cursor:pointer;}.menu.jsx-360827402 li.jsx-360827402 a.jsx-360827402{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-360827402 .inicio.jsx-360827402{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-360827402 .inicio.jsx-360827402:hover{background:#FFB151;color:#fff;}.menu.jsx-360827402 .software.jsx-360827402{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-360827402 .software.jsx-360827402:hover{background:#FFB151;color:#fff;}.menu.jsx-360827402 .download.jsx-360827402{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-360827402 .download.jsx-360827402:hover{background:#FFB151;color:#fff;}.menu.jsx-360827402 .tutorial.jsx-360827402{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-360827402 .tutorial.jsx-360827402:hover{background:#FFB151;color:#fff;}.menu.jsx-360827402 .forum.jsx-360827402{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-360827402 .forum.jsx-360827402:hover{background:#FFB151;color:#fff;}.menu.jsx-360827402 .creditos.jsx-360827402{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-360827402 .creditos.jsx-360827402:hover{background:#FFB151;color:#fff;}.menu.jsx-360827402 .contato.jsx-360827402{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-360827402 .contato.jsx-360827402:hover{background:#FFB151;color:#fff;}.selected.jsx-360827402{background:#FFB151;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvbmluL0RvY3VtZW50b3MvUHJvamV0b3MvZnVuZGFtZW50YWwtbHV6ZG9zYWJlci9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RjRCLEFBSTBDLEFBR2dCLEFBSVgsQUFJVSxBQU1WLEFBTUEsQUFLRyxBQVNNLEFBRVQsQUFFc0IsQUFDSixBQUNNLEFBQ0osQUFDSSxBQUNKLEFBQ0ksQUFDSixBQUNDLEFBQ0osQUFDTyxBQUNKLEFBQ0csQUFDTCxBQUdqQixBQUlBLEFBS0QsQUFJVixBQUtTLEFBTUMsQUFnQkwsQUFHRSxBQVNBLEFBU0csQUFZRixBQVVOLEFBSUcsQUFJVyxBQUlBLEFBS0EsQUFVSyxBQUlYLEFBSVUsQUFPZixBQU1BLEFBSUUsQUFXYSxBQUdWLEFBUUosQUFVYSxBQUVULEFBRXNCLEFBQ0osQUFDTSxBQUNKLEFBQ0ksQUFDSixBQUNJLEFBQ0osQUFDQyxBQUNKLEFBQ08sQUFDSixBQUNHLEFBQ0osQUFHbEIsUUE3S1YsRUFzRWIsQ0F0RzJDLEFBMkxBLEVBak8zQyxBQWlHQSxBQStDQSxBQXNDc0IsQUFNdEIsQ0EwQmlCLENBbExlLEFBZ0VuQixBQVNBLEFBbUZrQixBQStCQyxDQTdGakIsQ0EzRGYsQUFJQSxDQXBFc0IsQUFVUCxBQU1FLEFBMkNqQixBQWVtQixBQXFDRCxBQXFESSxBQW1DTCxDQXJLbUMsQUFFRSxBQUVBLEFBRUEsQUFFSCxBQUVHLEFBRUYsQUFJcEQsQUFHbUMsQUF3S2lCLEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVELEFBSXJELEVBeE5pQixHQXlFRyxBQVNBLEdBbkdILEFBd0hDLEFBNENELEFBd0NILEVBck1ELEFBc0I2RCxBQUVFLEFBRUEsQUFFQSxBQUVILEFBRUcsQUFFRCxBQStLaUIsQUFFRSxBQUVBLEFBRUEsQUFFSCxBQUVHLEFBRUQsQ0F0TXhDLEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVGLEFBUXBCLEFBdUtvQixBQUVFLEFBRUEsQUFFQSxBQUVILEFBRUcsQUFFRCxDQXhOdEQsQUErSmUsQ0FoRUEsQ0FyQ2YsQ0FyRGdCLEVBckJoQixBQW9LQSxDQTRDa0IsQ0FyTWxCLEVBbUZzQixBQVNBLENBcUJQLENBb0RGLEFBU3NHLENBekVwRyxHQTFGSyxLQTJKcEIsQUFnQ3NCLENBcEZQLEVBWkYsSUFqRjhELEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVELEFBbUQ3RCxBQVNBLENBbERmLEVBeEJ5RCxBQTJMQSxDQWxNbkMsQ0EyRlAsQUFZTyxNQTlCTixBQVNBLEFBeUdBLElBUzZFLEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVELENBcEgxRSxDQXJGc0MsQUEyTEEsS0FqTTdCLENBeUVkLEFBU0EsQUFzQmdCLEFBbUZoQixHQXZFZixBQUlVLEFBS0csTUFoQ2tCLEFBNEIvQixFQS9DQSxBQVNBLEFBNEZ1QixBQWFGLENBOURyQixHQTZDQSxLQS9MMEIsQUFvS0EsSUEvSU4sSUE0THBCLFlBM0xBLEVBL0I2QixBQW9LQSxvQkE5QjdCLEtBcklBLEFBb0tBLEVBMEJVLEVBcEVWLElBcUVnQixZQUNBLFdBdkxXLEFBb0tBLENBb0JYLEtBV1csT0FUSSw4REFDL0Isd0JBMUxBLEFBb0tlLE1BK0JJLEtBOUJuQixvREErQjBCLDhFQUMxQiIsImZpbGUiOiIvaG9tZS9yb25pbi9Eb2N1bWVudG9zL1Byb2pldG9zL2Z1bmRhbWVudGFsLWx1emRvc2FiZXIvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gJyc7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCBlbGVtZW50c1NlbGVjdGVkID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHNTZWxlY3RlZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1NlbGVjdGVkW2luZGV4XTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lbnVFeHBhbmRlcigpIHtcbiAgICAgICAgbGV0IG1lbnUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51LWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG1lbnVbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XG4gICAgICAgICAgICBtZW51WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51WzBdLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImQtZmxleCByb3cgbWFpbi1uYXZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhpZGRlbi10aXRsZVwiPkxVWiBETyBTQUJFUiAtIFBPUlRBTDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nby1yb3N0b1wiIHNyYz1cInN0YXRpYy9sb2dvLXJvc3RvLTAucG5nXCIgYWx0PVwiTG9nbyBTb2wgTHV6IGRvIFNhYmVyXCIgd2lkdGg9XCI1NSVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9sb2dvLXJhaW9zLnBuZ1wiIGFsdD1cIkxvZ28gU29sIEx1eiBkbyBTYWJlclwiIHdpZHRoPVwiNTUlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IG5hdi1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJndWVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibWVudS1oYW1idXJndWVyXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZW51LWhhbWJ1cmd1ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaGFtYnVyZ3VlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMubWVudUV4cGFuZGVyKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJndWVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNlYXJjaC1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1pdGVucyBzZWFyY2gtaW5wdXQtY29udGFpbmVyIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXQgZm9ybS1pbnB1dC1mb250XCIgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgaWQ9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIk8gUVVFIFZPQ8OKIFBST0NVUkE/XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoLWJhci1pdGVucyBidG4tY29udGFpbmVyIHNoYWRvdy1zbVwiIGFjdGlvbj1cImh0dHBzOi8vbHV6LWRvLXNhYmVyLXN0YWdpbmcuaGVyb2t1YXBwLmNvbS8jL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNlYXJjaC1pbnB1dCBidG4tZm9udC1saWdodCBmb3JtLWlucHV0LWZvbnRcIj5FZGl0YXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1pdGVucyBidG4tY29udGFpbmVyIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNlYXJjaC1pbnB1dCBidG4tZm9udC1kYXJrIGZvcm0taW5wdXQtZm9udFwiPkluc3RhbGFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sLXNtIG1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcImluaWNpbyBcIiArICh0aGlzLnByb3BzLnNlbGVjdGVkID09PSBcImluaWNpb1wiID8gXCJzZWxlY3RlZFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkluw61jaW88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29mdHdhcmUgZGlzYWJsZWRcIj5zb2Z0d2FyZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZG93bmxvYWQgZGlzYWJsZWRcIj5Eb3dubG9hZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHV0b3JpYWwgZGlzYWJsZWRcIj5UdXRvcmlhbDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZm9ydW0gZGlzYWJsZWRcIj5Gw7NydW08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNyZWRpdG9zIGRpc2FibGVkXCI+Q3LDqWRpdG9zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJjb250YXRvIFwiICsgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPT09IFwiY29udGFjdFwiID8gXCJzZWxlY3RlZFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCcgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Db250YXRvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3Vlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWFpbi1uYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZGVuLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdi1zZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMEYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpOmhvdmVyIHsgY3Vyc29yOiBwb2ludGVyOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpIGEgeyBjb2xvcjojMzMzOyB0ZXh0LWRlY29yYXRpb246bm9uZTsgZGlzcGxheTpibG9jazsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuaW5pY2lvIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDNweCBzb2xpZCAjRkZCMTUxOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuaW5pY2lvOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5zb2Z0d2FyZSB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiAzcHggc29saWQgI0Y3NjZBRTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlOmhvdmVyIHsgYmFja2dyb3VuZDogI0Y3NjZBRTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5kb3dubG9hZCB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiAzcHggc29saWQgI0FFNjdFMDsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkOmhvdmVyIHsgYmFja2dyb3VuZDogI0FFNjdFMDsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbCB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiAzcHggc29saWQgIzc1N0JGQTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLnR1dG9yaWFsOmhvdmVyIHsgYmFja2dyb3VuZDogIzc1N0JGQTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5mb3J1bSB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiAzcHggc29saWQgIzc1QzBGRjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmZvcnVtOmhvdmVyIHsgYmFja2dyb3VuZDogIzc1QzBGRjsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jcmVkaXRvcyB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiAzcHggc29saWQgIzUwQzBBQTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zOmhvdmVyIHsgYmFja2dyb3VuZDogIzUwQzBBQTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jb250YXRvIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDNweCBzb2xpZCAjNTA5NDZEOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAub250YXRvOmhvdmVyIHsgYmFja2dyb3VuZDogIzUwOTQ2RDsgY29sb3I6ICNmZmY7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZCMTUxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7IGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZDNkM2QzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubG9nby1yb3N0byB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24sIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmxvZ28tcm9zdG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgIE1FTlUgSEFNQlVSR1VFUlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAuaGFtYnVyZ3Vlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciA+IGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51LWhhbWJ1cmd1ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhbWJ1cmd1ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyOmJlZm9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhbWJ1cmd1ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiBsYWJlbCAuaGFtYnVyZ3VlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwgLmhhbWJ1cmd1ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwgLmhhbWJ1cmd1ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgIE1FTlUgSEFNQlVSR1VFUlxuICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1haW4tbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGRlbi10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXYtc2VhcmNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0l0aW0nLCBjdXJzaXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VhcmNoLWJhci1pdGVuczpmaXJzdC1jaGlsZCB7IC8qIEJBUlJBIERFIFBFU1FVSVNBICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDkyLDE4MywyMDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg5MiwxODMsMjA0LDAuOSkgNDklLCByZ2JhKDQ4LDE0MiwxNjMsMC45KSAxMDAlLCByZ2JhKDksOSwxMjEsMC45KSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhwYW5kZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgbGk6aG92ZXIgeyBjdXJzb3I6IHBvaW50ZXI7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgbGkgYSB7IGNvbG9yOiNmZmY7IHRleHQtZGVjb3JhdGlvbjpub25lOyBkaXNwbGF5OmJsb2NrOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5pbmljaW8geyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5pbmljaW86aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuc29mdHdhcmU6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuZG93bmxvYWQ6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLnR1dG9yaWFsIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAudHV0b3JpYWw6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmZvcnVtIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuZm9ydW06aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuY3JlZGl0b3M6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNvbnRhdG8geyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jb250YXRvOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZCMTUxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIClcbiAgICB9O1xuICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/home/ronin/Documentos/Projetos/fundamental-luzdosaber/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=contact.js.1c2028f45529ac6ff1ce.hot-update.js.map