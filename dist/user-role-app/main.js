(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box}\r\n/* Full-width input fields */\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n/* Add a background color when the inputs get focus */\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n  background-color: rgb(175, 152, 76);\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 8%;\r\n  opacity: 0.9;\r\n}\r\nbutton:hover {\r\n  opacity:1;\r\n}\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n  padding: 14px 20px;\r\n    background-color:rgb(175, 152, 76);\r\n    }\r\n/* Extra styles for the Login button */\r\n.Loginbtn {\r\n    padding: 14px 20px;\r\n      background-color:rgb(175, 152, 76);\r\n      }\r\n.signupbtn {\r\n    padding: 14px 20px;\r\n    background-color:rgb(175, 152, 76);\r\n  }\r\n/* Float cancel and signup buttons and add an equal width */\r\n.cancelbtn, .signupbtn,.Loginbtn {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n/* Add padding to container elements */\r\n.container {\r\n  padding: 16px;\r\n}\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    padding-top: 60px;\r\n}\r\n/* Login Content/Box */\r\n.Login-content{\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    border: 1px solid #888;\r\n    width: 40%; /* Could be more or less, depending on screen size */\r\n   \r\n  }\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n  border: 1px solid #888;\r\n  width: 40%; /* Could be more or less, depending on screen size */\r\n}\r\n/* Style the horizontal ruler */\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n/* The Close Button (x) */\r\n.close {\r\n  position: absolute;\r\n  right: 35px;\r\n  top: 15px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  color: #f1f1f1;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: #f44336;\r\n  cursor: pointer;\r\n}\r\n/* Clear floats */\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn,.Loginbtn {\r\n    width: 40%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxzQkFBc0I7QUFDekIsNEJBQTRCO0FBQzFCO0VBQ0EsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQSxxREFBcUQ7QUFDckQ7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7QUFDZDtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0Usa0JBQWtCO0lBQ2hCLGtDQUFrQztJQUNsQztBQUNBLHNDQUFzQztBQUMxQztJQUNJLGtCQUFrQjtNQUNoQixrQ0FBa0M7TUFDbEM7QUFDTjtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7RUFDcEM7QUFDRiwyREFBMkQ7QUFDM0Q7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBR0Esc0NBQXNDO0FBQ3RDO0VBQ0UsYUFBYTtBQUNmO0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDeEQsaUJBQWlCO0FBQ3JCO0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QixFQUFFLHNEQUFzRDtJQUNoRixzQkFBc0I7SUFDdEIsVUFBVSxFQUFFLG9EQUFvRDs7RUFFbEU7QUFFRixzQkFBc0I7QUFDdEI7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCLEVBQUUsc0RBQXNEO0VBQ2hGLHNCQUFzQjtFQUN0QixVQUFVLEVBQUUsb0RBQW9EO0FBQ2xFO0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBRUEsNkVBQTZFO0FBQzdFO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc1LCAxNTIsIDc2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogOCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzUsIDE1MiwgNzYpO1xyXG4gICAgfVxyXG4gICAgLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgTG9naW4gYnV0dG9uICovXHJcbi5Mb2dpbmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3NSwgMTUyLCA3Nik7XHJcbiAgICAgIH1cclxuLnNpZ251cGJ0biB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzUsIDE1MiwgNzYpO1xyXG4gIH1cclxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXHJcbi5jYW5jZWxidG4sIC5zaWdudXBidG4sLkxvZ2luYnRuIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuLyogTG9naW4gQ29udGVudC9Cb3ggKi9cclxuLkxvZ2luLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDQwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxuICAgXHJcbiAgfVxyXG5cclxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogNDAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMzVweDtcclxuICB0b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKi9cclxuLmNsZWFyZml4OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biwuTG9naW5idG4ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n<h1> Welcome To Role Managing App ! </h1>\n<!-- The class (contains the Login form) -->\n<div class=\"Login-content\">\n    <label for=\"uname\"><b>Username</b></label>\n    <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\n\n    <label for=\"psw\"><b>Password</b></label>\n    <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n    <div class=\"clearfix\">\n    <button type=\"submit\" class=\"Loginbtn\">Login</button>\n     <!-- Button to open the modal -->\n    <button onclick=\"document.getElementById('id01').style.display='block'\" class=\"signupbtn\">Sign Up</button>\n  </div>\n </div>\n\n<!-- The Modal (contains the Sign Up form) -->\n<div id=\"id01\" class=\"modal\">\n  <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">&times;</span>\n  <form class=\"modal-content\" action=\"/action_page.php\">\n    <div class=\"container\">\n      <h1>Sign Up</h1>\n      <p>Please fill in this form to create an account.</p>\n      <hr>\n      <label for=\"uname\"><b>Username</b></label>\n      <input type=\"text\" placeholder=\"Enter User Name\" name=\"uname\" required>\n\n      <label for=\"psw\"><b>Password</b></label>\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n\n      <label for=\"psw-repeat\"><b>Repeat Password</b></label>\n      <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required>\n\n      <div class=\"clearfix\">\n        <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Cancel</button>\n        <button type=\"submit\" class=\"signupbtn\">Sign Up</button>\n      </div>\n    </div>\n  </form>\n</div>\n<script>\n    // Get the modal\n    var modal = document.getElementById('id01');\n    \n    // When the user clicks anywhere outside of the modal, close it\n    window.onclick = function(event) {\n        if (event.target == modal) {\n            modal.style.display = \"none\";\n        }\n    }\n    </script>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'user-role-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _roleview_roleview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roleview/roleview.component */ "./src/app/roleview/roleview.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _roleview_roleview_component__WEBPACK_IMPORTED_MODULE_5__["RoleviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/roleview/roleview.component.css":
/*!*************************************************!*\
  !*** ./src/app/roleview/roleview.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGV2aWV3L3JvbGV2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/roleview/roleview.component.html":
/*!**************************************************!*\
  !*** ./src/app/roleview/roleview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  roleview works!\n</p>\n"

/***/ }),

/***/ "./src/app/roleview/roleview.component.ts":
/*!************************************************!*\
  !*** ./src/app/roleview/roleview.component.ts ***!
  \************************************************/
/*! exports provided: RoleviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleviewComponent", function() { return RoleviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoleviewComponent = /** @class */ (function () {
    function RoleviewComponent() {
    }
    RoleviewComponent.prototype.ngOnInit = function () {
    };
    RoleviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roleview',
            template: __webpack_require__(/*! ./roleview.component.html */ "./src/app/roleview/roleview.component.html"),
            styles: [__webpack_require__(/*! ./roleview.component.css */ "./src/app/roleview/roleview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoleviewComponent);
    return RoleviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular\RoleAssigningApp\user-role-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map