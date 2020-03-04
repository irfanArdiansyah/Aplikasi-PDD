function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-item-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item/item.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item/item.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesItemItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>item works!</p>\n";
    /***/
  },

  /***/
  "./src/app/pages/item/item-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/item/item-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ItemRoutingModule */

  /***/
  function srcAppPagesItemItemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemRoutingModule", function () {
      return ItemRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./item.component */
    "./src/app/pages/item/item.component.ts");

    var routes = [{
      path: '',
      component: _item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"]
    }];

    var ItemRoutingModule = function ItemRoutingModule() {
      _classCallCheck(this, ItemRoutingModule);
    };

    ItemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ItemRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/item/item.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/item/item.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesItemItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/item/item.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/item/item.component.ts ***!
    \**********************************************/

  /*! exports provided: ItemComponent */

  /***/
  function srcAppPagesItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
      return ItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ItemComponent =
    /*#__PURE__*/
    function () {
      function ItemComponent() {
        _classCallCheck(this, ItemComponent);
      }

      _createClass(ItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItemComponent;
    }();

    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item/item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item.component.scss */
      "./src/app/pages/item/item.component.scss")).default]
    })], ItemComponent);
    /***/
  },

  /***/
  "./src/app/pages/item/item.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/item/item.module.ts ***!
    \*******************************************/

  /*! exports provided: ItemModule */

  /***/
  function srcAppPagesItemItemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemModule", function () {
      return ItemModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _item_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./item-routing.module */
    "./src/app/pages/item/item-routing.module.ts");
    /* harmony import */


    var _item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./item.component */
    "./src/app/pages/item/item.component.ts");

    var ItemModule = function ItemModule() {
      _classCallCheck(this, ItemModule);
    };

    ItemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _item_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItemRoutingModule"]]
    })], ItemModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-item-item-module-es5.js.map