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

/***/ "./src/app/ViewModels/enums.ts":
/*!*************************************!*\
  !*** ./src/app/ViewModels/enums.ts ***!
  \*************************************/
/*! exports provided: GernderType, TreatStage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GernderType", function() { return GernderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatStage", function() { return TreatStage; });
var GernderType;
(function (GernderType) {
    GernderType[GernderType["Female"] = 1] = "Female";
    GernderType[GernderType["Male"] = 2] = "Male";
    GernderType[GernderType["PreferNotToSay"] = 3] = "PreferNotToSay";
})(GernderType || (GernderType = {}));
var TreatStage;
(function (TreatStage) {
    TreatStage[TreatStage["Trashed"] = -1] = "Trashed";
    TreatStage[TreatStage["Waiting"] = 0] = "Waiting";
    TreatStage[TreatStage["Confirmed"] = 1] = "Confirmed";
    TreatStage[TreatStage["Completed"] = 2] = "Completed";
})(TreatStage || (TreatStage = {}));


/***/ }),

/***/ "./src/app/ViewModels/logInViewModel.ts":
/*!**********************************************!*\
  !*** ./src/app/ViewModels/logInViewModel.ts ***!
  \**********************************************/
/*! exports provided: LogInViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInViewModel", function() { return LogInViewModel; });
var LogInViewModel = /** @class */ (function () {
    function LogInViewModel() {
    }
    return LogInViewModel;
}());



/***/ }),

/***/ "./src/app/ViewModels/pageViewModel.ts":
/*!*********************************************!*\
  !*** ./src/app/ViewModels/pageViewModel.ts ***!
  \*********************************************/
/*! exports provided: PagingViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingViewModel", function() { return PagingViewModel; });
var PagingViewModel = /** @class */ (function () {
    function PagingViewModel() {
    }
    return PagingViewModel;
}());



/***/ }),

/***/ "./src/app/ViewModels/signUpViewModel.ts":
/*!***********************************************!*\
  !*** ./src/app/ViewModels/signUpViewModel.ts ***!
  \***********************************************/
/*! exports provided: SignUpViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpViewModel", function() { return SignUpViewModel; });
var SignUpViewModel = /** @class */ (function () {
    function SignUpViewModel() {
    }
    return SignUpViewModel;
}());



/***/ }),

/***/ "./src/app/ViewModels/treatViewModel.ts":
/*!**********************************************!*\
  !*** ./src/app/ViewModels/treatViewModel.ts ***!
  \**********************************************/
/*! exports provided: TreatViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatViewModel", function() { return TreatViewModel; });
var TreatViewModel = /** @class */ (function () {
    function TreatViewModel() {
    }
    return TreatViewModel;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Who's Next";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _routing_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing/app-routing/app-routing.module */ "./src/app/routing/app-routing/app-routing.module.ts");
/* harmony import */ var _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/landingpage/landingpage.component */ "./src/app/components/landingpage/landingpage.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_accounts_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/accounts.service */ "./src/app/services/accounts.service.ts");
/* harmony import */ var _components_home_treats_treats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/treats/treats.component */ "./src/app/components/home/treats/treats.component.ts");
/* harmony import */ var _components_home_asktreat_asktreat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/asktreat/asktreat.component */ "./src/app/components/home/asktreat/asktreat.component.ts");
/* harmony import */ var _components_home_treathistory_treathistory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/treathistory/treathistory.component */ "./src/app/components/home/treathistory/treathistory.component.ts");
/* harmony import */ var _components_home_trash_trash_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/trash/trash.component */ "./src/app/components/home/trash/trash.component.ts");
/* harmony import */ var _components_home_treatrequests_treatrequests_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/treatrequests/treatrequests.component */ "./src/app/components/home/treatrequests/treatrequests.component.ts");
/* harmony import */ var _components_home_treat_treat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/treat/treat.component */ "./src/app/components/home/treat/treat.component.ts");
/* harmony import */ var _components_home_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home/profile/profile.component */ "./src/app/components/home/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_11__["LandingpageComponent"],
                _components_home_treats_treats_component__WEBPACK_IMPORTED_MODULE_14__["TreatsComponent"],
                _components_home_asktreat_asktreat_component__WEBPACK_IMPORTED_MODULE_15__["AsktreatComponent"],
                _components_home_treathistory_treathistory_component__WEBPACK_IMPORTED_MODULE_16__["TreathistoryComponent"],
                _components_home_trash_trash_component__WEBPACK_IMPORTED_MODULE_17__["TrashComponent"],
                _components_home_treatrequests_treatrequests_component__WEBPACK_IMPORTED_MODULE_18__["TreatrequestsComponent"],
                _components_home_treat_treat_component__WEBPACK_IMPORTED_MODULE_19__["TreatComponent"],
                _components_home_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () {
                            return localStorage.getItem('AuthorizationToken');
                        },
                        whitelistedDomains: ['localhost:5826']
                    }
                }),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"], _services_accounts_service__WEBPACK_IMPORTED_MODULE_13__["AccountsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/asktreat/asktreat.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/home/asktreat/asktreat.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9hc2t0cmVhdC9hc2t0cmVhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/asktreat/asktreat.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/home/asktreat/asktreat.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top: 10px;\" >\n    <div class=\"col-lg-8 col-sm-12\">\n        <div class=\"box box-success\">\n            <div class=\"box-body\">\n                <h2 class=\"box-title\"> <i class=\"fas fa-plus\"></i> Ask Treat</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-8 col-sm-12\">\n        <div class=\"box box-group\">\n            <div class=\"box-body\">\n                <div class=\"row form-group\">\n                    <div class=\"col-lg-1 col-sm-12 text-center\">\n                        <h2><i class=\"fas fa-concierge-bell\"></i></h2>\n                    </div>\n                    <div class=\"col-lg-11 col-sm-12\">\n                        <input id=\"heading\" type=\"text\" class=\"form-control\" placeholder=\"Give a Heading\" maxlength=\"32\" [(ngModel)]=\"treat.Heading\">\n                    </div>\n                </div>                \n                <div class=\"row\" [ngClass]=\"{ 'form-group': selectedFriend == null }\">\n                    <div *ngIf=\"selectedFriend != null\" class=\"col-lg-8 col-sm-12\">\n                        <div class=\"box box-success\">\n                            <div class=\"box-body\">\n                                <h4 class=\"normal-text\">{{selectedFriend.Name}}</h4>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 col-sm-12\">\n                        <button class=\"form-control btn btn-success\" data-toggle=\"modal\" data-target=\"#firndsInModal\">Choose a friend</button>\n                        <p *ngIf=\"submitted && selectedFriend == null\" class=\"text-danger\">Please, choose a friend.</p>\n                    </div>\n                </div>\n                <div class=\"row form-group\">\n                    <div class=\"col-lg-8 col-sm-12\">\n                        <label for=\"reason\">Reason</label>\n                        <input id=\"reason\" type=\"text\" class=\"form-control\" placeholder=\"Give a Reason\" [(ngModel)]=\"treat.Reason\" [ngClass]=\"{ 'is-invalid': submitted && treat.Reason.length == 0 }\" [ngbTypeahead]=\"search\">\n                        <p *ngIf=\"submitted && treat.Reason.length == 0\" class=\"text-danger\">Enter a reason.</p>\n                    </div>\n                    <div class=\"col-lg-4 col-sm-12\">\n                        <label for=\"deadline\">Deadline</label>\n                        <div class=\"input-group\">\n                            <input class=\"form-control\" placeholder=\"Give a Deadline\" [(ngModel)]=\"deadlineDate\" ngbDatepicker (dateSelect)=\"deallineOnChange()\" #d=\"ngbDatepicker\" [ngClass]=\"{ 'is-invalid':submitted && (invalidDeadlineDate || showFutureDateError) }\" (change)=\"deallineOnChange()\">\n                            <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\n                            </div>\n                        </div>\n                        <p *ngIf=\"submitted && invalidDeadlineDate\" class=\"text-danger\">Enter a valid deadline.</p>\n                        <p *ngIf=\"submitted && showFutureDateError\" class=\"text-danger\">Deadline needs to be a future time.</p>\n                    </div>\n                </div>\n                <div class=\"row form-group\">\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-success\" (click)=\"askTreat()\"><i class=\"fa fa-spinner fa-spin\" *ngIf=\"showAskLoader\"></i> Ask</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-4 col-sm-12\">\n    </div>\n</div>\n\n<!-- Firnds Modal -->\n<div class=\"modal fade\" id=\"firndsInModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title normal-text\" id=\"modalLabel\">Choose a friend</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row form-group\">\n                    <div class=\"col-12\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search friends\" (change)=\"friendSearch($event)\">\n                            <span class=\"input-group-btn\">\n                                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n                                </button>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row form-group\">\n                    <div class=\"col-12\">\n                        <table class=\"table table-bordered table-hover\">\n                            <tbody>\n                                <tr *ngFor=\"let friend of serachedFriends\" (click)=\"selectFriend(friend)\" data-dismiss=\"modal\">\n                                    <td>{{friend.Name}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/asktreat/asktreat.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/home/asktreat/asktreat.component.ts ***!
  \****************************************************************/
/*! exports provided: AsktreatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsktreatComponent", function() { return AsktreatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ViewModels_treatViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ViewModels/treatViewModel */ "./src/app/ViewModels/treatViewModel.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/accounts.service */ "./src/app/services/accounts.service.ts");
/* harmony import */ var _services_treats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/treats.service */ "./src/app/services/treats.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var reasons = ['BirthDay', 'Anniversary'];
var AsktreatComponent = /** @class */ (function () {
    function AsktreatComponent(accountsService, router, treatsService) {
        this.accountsService = accountsService;
        this.router = router;
        this.treatsService = treatsService;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return term.length < 1 ? reasons
                : reasons.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.serachedFriends = [];
    }
    AsktreatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.treat = new _ViewModels_treatViewModel__WEBPACK_IMPORTED_MODULE_1__["TreatViewModel"]();
        this.treat.Reason = "";
        this.submitted = false;
        this.showFutureDateError = false;
        this.invalidDeadlineDate = true;
        this.showAskLoader = false;
        this.accountsService.searchFriendsBySearchText("").subscribe(function (responce) {
            if (responce.success) {
                _this.serachedFriends = responce.entity.slice(0, 7);
            }
            else {
            }
        });
    };
    AsktreatComponent.prototype.friendSearch = function (event) {
        var _this = this;
        this.accountsService.searchFriendsBySearchText(event.target.value).subscribe(function (responce) {
            if (responce.success) {
                _this.serachedFriends = responce.entity.slice(0, 7);
            }
            else {
            }
        });
    };
    AsktreatComponent.prototype.selectFriend = function (friend) {
        this.selectedFriend = friend;
    };
    AsktreatComponent.prototype.deallineOnChange = function () {
        if (this.deadlineDate.year == null || this.deadlineDate.month == null || this.deadlineDate.day == null) {
            this.invalidDeadlineDate = true;
            return;
        }
        this.invalidDeadlineDate = false;
        this.treat.Deadline = new Date(this.deadlineDate.year, this.deadlineDate.month - 1, this.deadlineDate.day, 23, 59, 59);
        if (this.treat.Deadline < new Date(Date.now())) {
            this.showFutureDateError = true;
        }
        else {
            this.showFutureDateError = false;
        }
    };
    AsktreatComponent.prototype.askTreat = function () {
        var _this = this;
        this.submitted = true;
        if (this.selectedFriend == null || this.treat.Reason.length == null || this.invalidDeadlineDate || this.showFutureDateError) {
            return;
        }
        this.showFutureDateError = false;
        this.treat.AskedTo = this.selectedFriend.id;
        this.showAskLoader = true;
        this.treatsService.addtreat(this.treat).subscribe(function (responce) {
            if (responce.success) {
                _this.router.navigate(['/home/treats']);
            }
            else {
            }
            _this.showAskLoader = false;
            _this.submitted = false;
        });
    };
    AsktreatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asktreat',
            template: __webpack_require__(/*! ./asktreat.component.html */ "./src/app/components/home/asktreat/asktreat.component.html"),
            styles: [__webpack_require__(/*! ./asktreat.component.css */ "./src/app/components/home/asktreat/asktreat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_treats_service__WEBPACK_IMPORTED_MODULE_4__["TreatsService"]])
    ], AsktreatComponent);
    return AsktreatComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wh-body{\n    min-height: 100vh; \n    padding-bottom: 1px; \n    margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aC1ib2R5e1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyBcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4OyBcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"skin-green sidebar-mini\" style=\"height: auto; min-height: 100%;\" (window:resize)=\"onResize($event)\">\n  <div class=\"wrapper\" style=\"height: auto; min-height: 100%;\">\n    <header class=\"main-header\">\n      <a href=\"/home/treats\" class=\"logo\" [@sideBarWidth]=\"sideBarCollopse\">\n        <!-- <span class=\"logo-mini whosnext-text\">WN</span> -->\n        <span class=\"logo-lg whosnext-text\">{{logo}}</span>\n      </a>\n      <nav class=\"navbar navbar-static-top\" [@paddingWidth]=\"sideBarCollopse\">\n        <a style=\"cursor: pointer;\" (click)=\"menuBarClicked()\"><i class=\"fas fa-bars\"></i></a>\n      </nav>\n    </header>\n\n    <aside class=\"main-sidebar\" [@sideBarWidth]=\"sideBarCollopse\">\n      <section class=\"sidebar\">\n        <div class=\"user-panel pointer\" (click)=\"showProfileMenu = !showProfileMenu\">\n          <div class=\"pull-left image\">\n            <img src=\"../../../assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n          </div>\n          <div class=\"pull-left info\" *ngIf=\"sideBarCollopse\" [@fadeInOut]>\n            <p>Md Muidul Alam</p>\n            <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n          </div>\n        </div>\n        <ul *ngIf=\"showProfileMenu\" class=\"sidebar-menu tree\" data-widget=\"tree\" [@fadeInOutProfileMenu]>\n          <li class=\"pointer\" [ngClass] = \"{ 'active' : profileActive }\" (click)=\"onSidebarItemClick('profile')\"><a routerLink=\"profile\"><i class=\"fas fa-user\" [@sideBarIconanimation]=\"sideBarCollopse\"></i> <span *ngIf=\"sideBarCollopse\" [@fadeInOut]> Profile</span></a></li>\n          <li class=\"pointer\"><a (click)=\"logOutUser()\"><i class=\"fas fa-sign-out-alt\" [@sideBarIconanimation]=\"sideBarCollopse\"></i> <span *ngIf=\"sideBarCollopse\" [@fadeInOut]> Log out</span></a></li>\n        </ul>\n\n        <form *ngIf=\"sideBarCollopse\" action=\"#\" method=\"get\" class=\"sidebar-form\">\n          <div class=\"input-group\">\n            <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n            <span class=\"input-group-btn\">\n              <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n              </button>\n            </span>\n          </div>\n        </form> \n\n        <ul class=\"sidebar-menu tree\" data-widget=\"tree\">\n          <li class=\"pointer\" [ngClass] = \"{ 'active' : treatsActive }\" (click)=\"onSidebarItemClick('treats')\"><a routerLink=\"treats\"><i class=\"fas fa-utensils\" [@sideBarIconanimation]=\"sideBarCollopse\"></i> <span *ngIf=\"sideBarCollopse\" [@fadeInOut]> Treats</span></a></li>\n          <li class=\"pointer\" [ngClass] = \"{ 'active' : askTreatActive }\" (click)=\"onSidebarItemClick('asktreat')\"><a routerLink=\"asktreat\"><i class=\"fas fa-plus\" [@sideBarIconanimation]=\"sideBarCollopse\"></i> <span *ngIf=\"sideBarCollopse\" [@fadeInOut]> Ask Treat</span></a></li>\n          <li class=\"pointer\" [ngClass] = \"{ 'active' : treatrequestsActive }\" (click)=\"onSidebarItemClick('treatrequests')\"><a routerLink=\"treatrequests\"><i class=\"fas fa-check-square\" [@sideBarIconanimation]=\"sideBarCollopse\"></i> <span *ngIf=\"sideBarCollopse\" [@fadeInOut]> Treat Requests</span></a></li>\n          <li class=\"pointer\" [ngClass] = \"{ 'active' : treatHistoryActive }\" (click)=\"onSidebarItemClick('treathistory')\"><a routerLink=\"treathistory\"><i class=\"fas fa-history\" [@sideBarIconanimation]=\"sideBarCollopse\"></i> <span *ngIf=\"sideBarCollopse\" [@fadeInOut]> Treat History</span></a></li>\n          <li class=\"pointer\" [ngClass] = \"{ 'active' : trashActive }\" (click)=\"onSidebarItemClick('trash')\"><a routerLink=\"trash\"><i class=\"fas fa-trash-alt\" [@sideBarIconanimation]=\"sideBarCollopse\"></i> <span *ngIf=\"sideBarCollopse\" [@fadeInOut]> Trash</span></a></li>\n        </ul>\n      </section>\n    </aside>\n\n    <div class=\"content-wrapper wh-body\" [@paddingWidth]=\"sideBarCollopse\">\n      <router-outlet></router-outlet>\n    </div>\n\n    <footer class=\"main-footer\" [@paddingWidth]=\"sideBarCollopse\">\n      <div class=\"row\">\n          <strong>Copyright © 2018 <a href=\"#\">Company</a>.</strong> All rights reserved.\n      </div>\n    </footer>\n\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.onSidebarItemClick(this.router.url.replace('/home/', ''));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.showProfileMenu = false;
        if (window.innerWidth < 768) {
            this.sideBarCollopse = false;
            this.logo = "WN";
        }
        else {
            this.sideBarCollopse = true;
            this.logo = "Who's Next";
        }
    };
    HomeComponent.prototype.onSidebarItemClick = function (sideBarItem) {
        this.treatsActive = false;
        this.askTreatActive = false;
        this.treatrequestsActive = false;
        this.treatHistoryActive = false;
        this.trashActive = false;
        this.profileActive = false;
        if (sideBarItem.startsWith('treats')) {
            this.treatsActive = true;
        }
        else if (sideBarItem.startsWith('asktreat')) {
            this.askTreatActive = true;
        }
        else if (sideBarItem.startsWith('treatrequests')) {
            this.treatrequestsActive = true;
        }
        else if (sideBarItem.startsWith('treathistory')) {
            this.treatHistoryActive = true;
        }
        else if (sideBarItem.startsWith('trash')) {
            this.trashActive = true;
        }
        else if (sideBarItem.startsWith('profile')) {
            this.profileActive = true;
        }
    };
    HomeComponent.prototype.logOutUser = function () {
        localStorage.removeItem("AuthorizationToken");
        this.router.navigate(['']);
    };
    HomeComponent.prototype.menuBarClicked = function () {
        this.sideBarCollopse = !this.sideBarCollopse;
        if (this.sideBarCollopse) {
            this.logo = "Who's Next";
        }
        else {
            this.logo = "WN";
        }
    };
    HomeComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 768) {
            this.sideBarCollopse = false;
            this.logo = "WN";
        }
        else {
            this.sideBarCollopse = true;
            this.logo = "Who's Next";
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOutProfileMenu', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, height: '0px' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, height: '96px' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, height: '0px' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('sideBarIconanimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        'font-size': '100%'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        'font-size': '170%'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('sideBarWidth', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        width: '230px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        width: '60px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('paddingWidth', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        'margin-left': '230px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        'margin-left': '60px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400))
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/home/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/home/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/home/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/home/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/home/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/home/trash/trash.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/home/trash/trash.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS90cmFzaC90cmFzaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/trash/trash.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/home/trash/trash.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top: 10px;\">\n  <div class=\"col-lg-8 col-sm-12\">\n    <div class=\"box box-success\">\n      <div class=\"box-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-sm-12\">\n            <h2 class=\"box-title\"><i class=\"fas fa-history\"></i> Trash</h2>\n          </div>\n          <!-- <div class=\"col-lg-4 col-sm-12\">\n                        <h2> <input class=\"searchinput\" placeholder=\"&#xF002; \" type=\"text\" [(ngModel)]=\"pagingViewModel.SearchText\" (keydown)=\"onSearchKeydown($event)\"/> </h2>\n                    </div> -->\n        </div>\n        <div class=\"row headpadding\">\n          <div class=\"col-lg-4 col-sm-12 text-center\">\n            Name\n          </div>\n          <div class=\"col-lg-4 col-sm-12 text-center\">\n            Reason\n          </div>\n          <div class=\"col-lg-4 col-sm-12 text-center\">\n            Creation Date\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngFor=\"let treat of treats\">\n      <div\n        class=\"box\"\n        @fadeInOut\n        [ngClass]=\"{\n          'box-success': userId != treat.AskedTo,\n          'box-warning': userId == treat.AskedTo\n        }\"\n      >\n        <div class=\"box-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-sm-12 text-center\">\n              <div *ngIf=\"userId != treat.AskedBy\">\n                <i class=\"fas fa-concierge-bell\"></i> {{ treat.AskedByName }}\n              </div>\n              <div *ngIf=\"userId != treat.AskedTo\">\n                <i class=\"fas fa-gift\"></i> {{ treat.AskedToName }}\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-12 text-center\">\n              {{ treat.Reason }}\n            </div>\n            <div class=\"col-lg-4 col-sm-12 text-center\">\n              {{ treat.CreateDate | date: \"MMM d, y\" }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div>\n        <span\n          @fadeInOut\n          class=\"pagenumber prevnext\"\n          *ngIf=\"showPagingPrevious\"\n          (click)=\"onPagePreviousClick()\"\n        >\n          <span>Previous &nbsp;&nbsp;&nbsp;</span>\n        </span>\n        <span\n          @fadeInOut\n          class=\"pagenumber\"\n          [ngClass]=\"{ 'text-warning': pagingViewModel.PageNumber == number }\"\n          *ngFor=\"let number of numbers\"\n          (click)=\"onPageNumberClick(number)\"\n        >\n          {{ number }}\n        </span>\n        <span\n          @fadeInOut\n          class=\"pagenumber prevnext\"\n          *ngIf=\"showPagingNext\"\n          (click)=\"onPageNextClick()\"\n        >\n          <span>&nbsp;&nbsp;&nbsp;Next</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/trash/trash.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/home/trash/trash.component.ts ***!
  \**********************************************************/
/*! exports provided: TrashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashComponent", function() { return TrashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_treats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/treats.service */ "./src/app/services/treats.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ViewModels_pageViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ViewModels/pageViewModel */ "./src/app/ViewModels/pageViewModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrashComponent = /** @class */ (function () {
    function TrashComponent(treatsService) {
        this.treatsService = treatsService;
        this.treats = [];
        this.numbers = [];
    }
    TrashComponent.prototype.ngOnInit = function () {
        this.pagingViewModel = new _ViewModels_pageViewModel__WEBPACK_IMPORTED_MODULE_3__["PagingViewModel"]();
        this.pagingViewModel.NumberOfContentPerPage = 10;
        this.pagingViewModel.SortProperty = 'CompleteDate';
        this.pagingViewModel.OrderByDescending = true;
        this.showPagingPrevious = false;
        this.showPagingNext = false;
        this.getTrash(1);
    };
    TrashComponent.prototype.getTrash = function (pageNumber) {
        var _this = this;
        this.pagingViewModel.PageNumber = pageNumber;
        this.treatsService.getTrash(this.pagingViewModel).subscribe(function (responce) {
            if (responce.success) {
                _this.treats = responce.entity.contents;
                _this.userId = responce.additionalInformation;
                _this.totalPage = Math.ceil(responce.entity.totalCount / _this.pagingViewModel.NumberOfContentPerPage);
                _this.pageHandler();
            }
            else {
            }
        });
    };
    TrashComponent.prototype.pageHandler = function () {
        if (this.pagingViewModel.PageNumber > this.totalPage) {
            this.getTrash(1);
            return;
        }
        var startNumber = this.pagingViewModel.PageNumber % 10 != 0 ? (Math.floor(this.pagingViewModel.PageNumber / 10)) * 10 + 1 : this.pagingViewModel.PageNumber - 9;
        this.showPagingNext = this.totalPage > 10 + (Math.floor(this.pagingViewModel.PageNumber / 10)) * 10;
        this.showPagingPrevious = startNumber != 1;
        this.numbers = [];
        for (var i = startNumber; i < startNumber + 10 && i <= this.totalPage && this.totalPage != 1; i++) {
            this.numbers.push(i);
        }
    };
    TrashComponent.prototype.onPageNextClick = function () {
        this.getTrash(this.numbers[9] + 1);
    };
    TrashComponent.prototype.onPagePreviousClick = function () {
        this.getTrash(this.numbers[0] - 1);
    };
    TrashComponent.prototype.onPageNumberClick = function (pageNumber) {
        this.getTrash(pageNumber);
    };
    TrashComponent.prototype.onSearchKeydown = function (event) {
        if (event.key === "Enter") {
            this.getTrash(1);
        }
    };
    TrashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trash',
            template: __webpack_require__(/*! ./trash.component.html */ "./src/app/components/home/trash/trash.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(50px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0px)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, height: '0px' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./trash.component.css */ "./src/app/components/home/trash/trash.component.css")]
        }),
        __metadata("design:paramtypes", [_services_treats_service__WEBPACK_IMPORTED_MODULE_1__["TreatsService"]])
    ], TrashComponent);
    return TrashComponent;
}());



/***/ }),

/***/ "./src/app/components/home/treat/treat.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/home/treat/treat.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS90cmVhdC90cmVhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/treat/treat.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/home/treat/treat.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  treat works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/treat/treat.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/home/treat/treat.component.ts ***!
  \**********************************************************/
/*! exports provided: TreatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatComponent", function() { return TreatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreatComponent = /** @class */ (function () {
    function TreatComponent() {
    }
    TreatComponent.prototype.ngOnInit = function () {
    };
    TreatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treat',
            template: __webpack_require__(/*! ./treat.component.html */ "./src/app/components/home/treat/treat.component.html"),
            styles: [__webpack_require__(/*! ./treat.component.css */ "./src/app/components/home/treat/treat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreatComponent);
    return TreatComponent;
}());



/***/ }),

/***/ "./src/app/components/home/treathistory/treathistory.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/home/treathistory/treathistory.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headpadding{\n    padding-top: 20px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RyZWF0aGlzdG9yeS90cmVhdGhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvdHJlYXRoaXN0b3J5L3RyZWF0aGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRwYWRkaW5ne1xuICAgIHBhZGRpbmctdG9wOiAyMHB4XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/treathistory/treathistory.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/treathistory/treathistory.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top: 10px;\">\n  <div class=\"col-lg-8 col-sm-12\">\n    <div class=\"box box-success\">\n      <div class=\"box-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-sm-12\">\n            <h2 class=\"box-title\">\n              <i class=\"fas fa-history\"></i> Treat History\n            </h2>\n          </div>\n          <!-- <div class=\"col-lg-4 col-sm-12\">\n            <h2>\n              <input\n                class=\"searchinput\"\n                placeholder=\"&#xF002; \"\n                type=\"text\"\n                [(ngModel)]=\"pagingViewModel.SearchText\"\n                (keydown)=\"onSearchKeydown($event)\"\n              />\n            </h2>\n          </div> -->\n        </div>\n        <div class=\"row headpadding\">\n          <div class=\"col-lg-4 col-sm-12 text-center\">\n            Name\n          </div>\n          <div class=\"col-lg-4 col-sm-12 text-center\">\n            Reason\n          </div>\n          <div class=\"col-lg-4 col-sm-12 text-center\">\n            Served Date\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngFor=\"let treat of treats\">\n      <div\n        class=\"box\"\n        @fadeInOut\n        [ngClass]=\"{\n          'box-success': userId != treat.AskedTo,\n          'box-warning': userId == treat.AskedTo\n        }\"\n      >\n        <div class=\"box-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-sm-12 text-center\">\n              <div *ngIf=\"userId != treat.AskedBy\">\n                <i class=\"fas fa-concierge-bell\"></i> {{ treat.AskedByName }}\n              </div>\n              <div *ngIf=\"userId != treat.AskedTo\">\n                <i class=\"fas fa-gift\"></i> {{ treat.AskedToName }}\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-12 text-center\">\n              {{ treat.Reason }}\n            </div>\n            <div class=\"col-lg-4 col-sm-12 text-center\">\n              {{ treat.CompleteDate | date: \"MMM d, y\" }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div>\n        <span\n          @fadeInOut\n          class=\"pagenumber prevnext\"\n          *ngIf=\"showPagingPrevious\"\n          (click)=\"onPagePreviousClick()\"\n        >\n          <span>Previous &nbsp;&nbsp;&nbsp;</span>\n        </span>\n        <span\n          @fadeInOut\n          class=\"pagenumber\"\n          [ngClass]=\"{ 'text-warning': pagingViewModel.PageNumber == number }\"\n          *ngFor=\"let number of numbers\"\n          (click)=\"onPageNumberClick(number)\"\n        >\n          {{ number }}\n        </span>\n        <span\n          @fadeInOut\n          class=\"pagenumber prevnext\"\n          *ngIf=\"showPagingNext\"\n          (click)=\"onPageNextClick()\"\n        >\n          <span>&nbsp;&nbsp;&nbsp;Next</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/treathistory/treathistory.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/home/treathistory/treathistory.component.ts ***!
  \************************************************************************/
/*! exports provided: TreathistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreathistoryComponent", function() { return TreathistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_treats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/treats.service */ "./src/app/services/treats.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ViewModels_pageViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ViewModels/pageViewModel */ "./src/app/ViewModels/pageViewModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreathistoryComponent = /** @class */ (function () {
    function TreathistoryComponent(treatsService) {
        this.treatsService = treatsService;
        this.treats = [];
        this.numbers = [];
    }
    TreathistoryComponent.prototype.ngOnInit = function () {
        this.pagingViewModel = new _ViewModels_pageViewModel__WEBPACK_IMPORTED_MODULE_3__["PagingViewModel"]();
        this.pagingViewModel.NumberOfContentPerPage = 10;
        this.pagingViewModel.SortProperty = 'CompleteDate';
        this.pagingViewModel.OrderByDescending = true;
        this.pagingViewModel.SearchText = "";
        this.showPagingPrevious = false;
        this.showPagingNext = false;
        this.getTreatHistory(1);
    };
    TreathistoryComponent.prototype.getTreatHistory = function (pageNumber) {
        var _this = this;
        this.pagingViewModel.PageNumber = pageNumber;
        this.treatsService.getTreatHistory(this.pagingViewModel).subscribe(function (responce) {
            if (responce.success) {
                _this.treats = responce.entity.contents;
                _this.userId = responce.additionalInformation;
                _this.totalPage = Math.ceil(responce.entity.totalCount / _this.pagingViewModel.NumberOfContentPerPage);
                _this.pageHandler();
            }
            else {
            }
        });
    };
    TreathistoryComponent.prototype.pageHandler = function () {
        if (this.pagingViewModel.PageNumber > this.totalPage) {
            this.getTreatHistory(1);
            return;
        }
        var startNumber = this.pagingViewModel.PageNumber % 10 != 0 ? (Math.floor(this.pagingViewModel.PageNumber / 10)) * 10 + 1 : this.pagingViewModel.PageNumber - 9;
        this.showPagingNext = this.totalPage > 10 + (Math.floor(this.pagingViewModel.PageNumber / 10)) * 10;
        this.showPagingPrevious = startNumber != 1;
        this.numbers = [];
        for (var i = startNumber; i < startNumber + 10 && i <= this.totalPage && this.totalPage != 1; i++) {
            this.numbers.push(i);
        }
    };
    TreathistoryComponent.prototype.onPageNextClick = function () {
        this.getTreatHistory(this.numbers[9] + 1);
    };
    TreathistoryComponent.prototype.onPagePreviousClick = function () {
        this.getTreatHistory(this.numbers[0] - 1);
    };
    TreathistoryComponent.prototype.onPageNumberClick = function (pageNumber) {
        this.getTreatHistory(pageNumber);
    };
    TreathistoryComponent.prototype.onSearchKeydown = function (event) {
        if (event.key === "Enter") {
            this.getTreatHistory(1);
        }
    };
    TreathistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treathistory',
            template: __webpack_require__(/*! ./treathistory.component.html */ "./src/app/components/home/treathistory/treathistory.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(50px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0px)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, height: '0px' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./treathistory.component.css */ "./src/app/components/home/treathistory/treathistory.component.css")]
        }),
        __metadata("design:paramtypes", [_services_treats_service__WEBPACK_IMPORTED_MODULE_1__["TreatsService"]])
    ], TreathistoryComponent);
    return TreathistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/treatrequests/treatrequests.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/home/treatrequests/treatrequests.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showmore{\n    padding-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RyZWF0cmVxdWVzdHMvdHJlYXRyZXF1ZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RyZWF0cmVxdWVzdHMvdHJlYXRyZXF1ZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3dtb3Jle1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/treatrequests/treatrequests.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/home/treatrequests/treatrequests.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top: 10px;\">\n  <div class=\"col-lg-8 col-sm-12\">\n    <div class=\"box box-success\">\n      <div class=\"box-body\">\n        <h2 class=\"box-title\">\n          <i class=\"fas fa-check-square\"></i> Treat Requests\n        </h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-8 col-sm-12\">\n    <div *ngFor=\"let treatRequest of treatRequests\">\n      <div\n        *ngIf=\"\n          treatRequest.Confirmation == treatStage.Confirmed &&\n          treatRequest.showNotification\n        \"\n        @fadeInOut\n      >\n        <div class=\"alert alert-success\">\n          <a class=\"close\" (click)=\"treatRequest.showNotification = false\"\n            >&times;</a\n          >\n          <i class=\"fas fa-concierge-bell\"></i> Treat Confirmed. Date:\n          {{ treatRequest.Deadline | date: \"EEEE, d MMM, y\" }}\n        </div>\n      </div>\n      <div\n        *ngIf=\"\n          treatRequest.Confirmation == treatStage.Trashed &&\n          treatRequest.showNotification\n        \"\n        @fadeInOut\n      >\n        <div class=\"alert alert-danger\">\n          <a class=\"close\" (click)=\"treatRequest.showNotification = false\"\n            >&times;</a\n          >\n          <i class=\"fas fa-trash-alt\"></i> Treat Moved to Trash.\n        </div>\n      </div>\n      <div\n        *ngIf=\"treatRequest.Confirmation == treatStage.Waiting\"\n        @fadeInOut\n        class=\"box\"\n        [ngClass]=\"{\n          'box-success': userId != treatRequest.AskedTo,\n          'box-warning': userId == treatRequest.AskedTo\n        }\"\n      >\n        <div class=\"box-body\">\n          <div class=\"row form-group\">\n            <div class=\"col-10\">\n              <h3>\n                <i\n                  *ngIf=\"userId == treatRequest.AskedTo\"\n                  class=\"fas fa-concierge-bell\"\n                ></i\n                ><i\n                  *ngIf=\"userId != treatRequest.AskedTo\"\n                  class=\"fas fa-gift\"\n                ></i>\n                {{ treatRequest.Heading }}\n              </h3>\n            </div>\n            <div class=\"col-2\">\n              <div class=\"row\">\n                <div class=\"col-8 hidden\"></div>\n                <div class=\"col-4\">\n                  <div class=\"dropdown\">\n                    <a class=\"dropbtn text-center\"\n                      ><i class=\"fas fa-ellipsis-v half-opacity\"></i\n                    ></a>\n                    <div class=\"dropdown-content\">\n                      <a (click)=\"onTreatMovetoTrashClick(treatRequest.Id)\"\n                        ><i class=\"fas fa-trash-alt\"></i> Move to Trash</a\n                      >\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"box box-group\">\n            <div class=\"box-body\">\n              <h4 *ngIf=\"userId != treatRequest.AskedTo\" class=\"normal-text\">\n                {{ treatRequest.AskedToName }}\n              </h4>\n              <h4 *ngIf=\"userId != treatRequest.AskedBy\" class=\"normal-text\">\n                {{ treatRequest.AskedByName }}\n              </h4>\n            </div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-lg-8 col-sm-12\">\n              <p for=\"reason\">Reason</p>\n              <h6>{{ treatRequest.Reason }}</h6>\n            </div>\n            <div class=\"col-lg-4 col-sm-12\">\n              <p for=\"deadline\">Deadline</p>\n              <h6>{{ treatRequest.Deadline | date: \"EEEE, d MMM, y\" }}</h6>\n            </div>\n          </div>\n          <div *ngIf=\"userId == treatRequest.AskedTo\" class=\"row form-group\">\n            <div class=\"col-12\">\n              <button\n                class=\"btn btn-warning\"\n                (click)=\"\n                  treatRequest.showConfirmationSpinner = true;\n                  onConfirmationClick(treatRequest.id)\n                \"\n              >\n                <i\n                  class=\"fa fa-spinner fa-spin\"\n                  *ngIf=\"treatRequest.showConfirmationSpinner\"\n                ></i>\n                Confirm\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"showmore d-flex justify-content-center\">\n      <button\n        class=\"btn btn-success\"\n        *ngIf=\"showShowMore\"\n        @fadeInOut\n        (click)=\"onClickShowMore()\"\n      >\n        Show more\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/treatrequests/treatrequests.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/treatrequests/treatrequests.component.ts ***!
  \**************************************************************************/
/*! exports provided: TreatrequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatrequestsComponent", function() { return TreatrequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_treats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/treats.service */ "./src/app/services/treats.service.ts");
/* harmony import */ var _ViewModels_pageViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ViewModels/pageViewModel */ "./src/app/ViewModels/pageViewModel.ts");
/* harmony import */ var _ViewModels_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ViewModels/enums */ "./src/app/ViewModels/enums.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helper/helper */ "./src/app/helper/helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TreatrequestsComponent = /** @class */ (function () {
    function TreatrequestsComponent(treatsService) {
        this.treatsService = treatsService;
        this.treatRequests = [];
        this.treatStage = _ViewModels_enums__WEBPACK_IMPORTED_MODULE_3__["TreatStage"];
        this.pageNumber = 0;
    }
    TreatrequestsComponent.prototype.ngOnInit = function () {
        this.showShowMore = false;
        this.getTreatRequests();
    };
    TreatrequestsComponent.prototype.onClickShowMore = function () {
        var startIndex = this.pageNumber * this.allpages.numberOfContentPerPage;
        this.showShowMore = true;
        for (var i = startIndex; i < this.allpages.contents.length &&
            i < startIndex + this.allpages.numberOfContentPerPage; i++) {
            this.treatRequests.push(this.allpages.contents[i]);
            this.treatRequests[i].deadline = _helper_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertDateInCurrentTimeZone(this.treatRequests[i].deadline);
            this.treatRequests[i]["showNotification"] = true;
            if (this.treatRequests[i].askedTo == this.userId) {
                this.treatRequests[i]["showConfirmation"] = false;
            }
            if (i + 1 == this.allpages.totalCount) {
                this.showShowMore = false;
            }
        }
        this.pageNumber++;
    };
    TreatrequestsComponent.prototype.getTreatRequests = function () {
        var _this = this;
        var pagingViewModel = new _ViewModels_pageViewModel__WEBPACK_IMPORTED_MODULE_2__["PagingViewModel"]();
        pagingViewModel.PageNumber = 0;
        pagingViewModel.NumberOfContentPerPage = 7;
        pagingViewModel.SortProperty = "CreateDate";
        pagingViewModel.OrderByDescending = true;
        console.log(pagingViewModel);
        this.treatsService
            .getTreatRequests(pagingViewModel)
            .subscribe(function (responce) {
            if (responce.success) {
                _this.userId = responce.additionalInformation;
                _this.allpages = responce.entity;
                _this.onClickShowMore();
            }
            else {
            }
        });
    };
    TreatrequestsComponent.prototype.onConfirmationClick = function (treatId) {
        var _this = this;
        this.treatsService
            .confirmTreat(treatId)
            .subscribe(function (responce) {
            console.log(responce);
            if (responce.success) {
                for (var i = 0; i < _this.treatRequests.length; i++) {
                    if (_this.treatRequests[i].id == treatId) {
                        _this.treatRequests[i].Confirmation = _this.treatStage.Confirmed;
                        _this.treatRequests[i]["showNotification"] = true;
                    }
                }
            }
            else {
            }
        });
    };
    TreatrequestsComponent.prototype.onTreatMovetoTrashClick = function (treatId) {
        var _this = this;
        this.treatsService
            .moveToTrash(treatId)
            .subscribe(function (responce) {
            if (responce.success) {
                for (var i = 0; i < _this.treatRequests.length; i++) {
                    if (_this.treatRequests[i].id == treatId) {
                        _this.treatRequests[i].Confirmation = _this.treatStage.Trashed;
                        _this.treatRequests[i]["showNotification"] = true;
                    }
                }
            }
            else {
            }
        });
    };
    TreatrequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-treatrequests",
            template: __webpack_require__(/*! ./treatrequests.component.html */ "./src/app/components/home/treatrequests/treatrequests.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("fadeInOut", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: "translateY(50px)" }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("400ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: "translateY(0px)" }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":leave", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("400ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, height: "0px" }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./treatrequests.component.css */ "./src/app/components/home/treatrequests/treatrequests.component.css")]
        }),
        __metadata("design:paramtypes", [_services_treats_service__WEBPACK_IMPORTED_MODULE_1__["TreatsService"]])
    ], TreatrequestsComponent);
    return TreatrequestsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/treats/treats.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/home/treats/treats.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showmore{\n    padding-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RyZWF0cy90cmVhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS90cmVhdHMvdHJlYXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd21vcmV7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/treats/treats.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/home/treats/treats.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top: 10px;\">\n  <div class=\"col-lg-8 col-sm-12\">\n    <div class=\"box box-success\">\n      <div class=\"box-body\">\n        <h2 class=\"box-title\"><i class=\"fas fa-utensils\"></i> Treats</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-8 col-sm-12\">\n    <div *ngFor=\"let treat of treats\">\n      <div\n        *ngIf=\"\n          treat.Confirmation == treatStage.Trashed && treat.showNotification\n        \"\n        @fadeInOut\n      >\n        <div class=\"alert alert-danger\">\n          <a class=\"close\" (click)=\"treat.showNotification = false\">&times;</a>\n          <i class=\"fas fa-trash-alt\"></i> Treat Moved to Trash.\n        </div>\n      </div>\n      <div\n        *ngIf=\"\n          treat.Confirmation == treatStage.Completed && treat.showNotification\n        \"\n        @fadeInOut\n      >\n        <div class=\"alert alert-success\">\n          <a class=\"close\" (click)=\"treat.showNotification = false\">&times;</a>\n          <i class=\"fas fa-gift\"></i> Treat Confirmed. Reason:\n          {{ treat.reason }}\n        </div>\n      </div>\n      <div\n        *ngIf=\"treat.Confirmation == treatStage.Confirmed\"\n        @fadeInOut\n        class=\"box\"\n        [ngClass]=\"{\n          'box-success': userId != treat.AskedTo,\n          'box-warning': userId == treat.AskedTo\n        }\"\n      >\n        <div class=\"box-body\">\n          <div class=\"row form-group\">\n            <div class=\"col-10\">\n              <h3>\n                <i\n                  *ngIf=\"userId == treat.AskedTo\"\n                  class=\"fas fa-concierge-bell\"\n                ></i\n                ><i *ngIf=\"userId != treat.AskedTo\" class=\"fas fa-gift\"></i>\n                {{ treat.Heading }}\n              </h3>\n            </div>\n            <div class=\"col-2\">\n              <div class=\"row\">\n                <div class=\"col-8 hidden\"></div>\n                <div class=\"col-4\">\n                  <div class=\"dropdown\">\n                    <a class=\"dropbtn text-center\"\n                      ><i class=\"fas fa-ellipsis-v half-opacity\"></i\n                    ></a>\n                    <div class=\"dropdown-content\">\n                      <a (click)=\"onTreatMovetoTrashClick(treat.id)\"\n                        ><i class=\"fas fa-trash-alt\"></i> Move to Trash</a\n                      >\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"box box-group\">\n            <div class=\"box-body\">\n              <h4 *ngIf=\"userId != treat.AskedTo\" class=\"normal-text\">\n                {{ treat.AskedToName }}\n              </h4>\n              <h4 *ngIf=\"userId != treat.AskedBy\" class=\"normal-text\">\n                {{ treat.AskedByName }}\n              </h4>\n            </div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-lg-8 col-sm-12\">\n              <p for=\"reason\">Reason</p>\n              <h6>{{ treat.Reason }}</h6>\n            </div>\n            <div class=\"col-lg-4 col-sm-12\">\n              <p for=\"deadline\">Deadline</p>\n              <h6>{{ treat.Deadline | date: \"EEEE, d MMM, y\" }}</h6>\n            </div>\n          </div>\n          <div *ngIf=\"userId == treat.AskedBy\" class=\"row form-group\">\n            <div class=\"col-12\">\n              <button\n                class=\"btn btn-success\"\n                (click)=\"\n                  treat.showConpleteSpinner = true;\n                  onCompleteTrashClick(treat.id)\n                \"\n              >\n                <i\n                  class=\"fa fa-spinner fa-spin\"\n                  *ngIf=\"treat.showConpleteSpinner\"\n                ></i>\n                Complete\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"showmore d-flex justify-content-center\">\n      <button\n        class=\"btn btn-success\"\n        *ngIf=\"showShowMore\"\n        @fadeInOut\n        (click)=\"onClickShowMore()\"\n      >\n        Show more\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/treats/treats.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/home/treats/treats.component.ts ***!
  \************************************************************/
/*! exports provided: TreatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatsComponent", function() { return TreatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_treats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/treats.service */ "./src/app/services/treats.service.ts");
/* harmony import */ var _ViewModels_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ViewModels/enums */ "./src/app/ViewModels/enums.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _ViewModels_pageViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ViewModels/pageViewModel */ "./src/app/ViewModels/pageViewModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TreatsComponent = /** @class */ (function () {
    function TreatsComponent(treatsService) {
        this.treatsService = treatsService;
        this.treats = [];
        this.treatStage = _ViewModels_enums__WEBPACK_IMPORTED_MODULE_2__["TreatStage"];
        this.pageNumber = 0;
    }
    TreatsComponent.prototype.ngOnInit = function () {
        this.pageNumber = 0;
        this.showShowMore = false;
        this.getTreats();
    };
    TreatsComponent.prototype.onClickShowMore = function () {
        var startIndex = this.pageNumber * this.allpages.numberOfContentPerPage;
        this.showShowMore = true;
        for (var i = startIndex; i < this.allpages.contents.length &&
            i < startIndex + this.allpages.numberOfContentPerPage; i++) {
            this.treats.push(this.allpages.contents[i]);
            this.treats[i].deadline = _helper_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertDateInCurrentTimeZone(this.treats[i].deadline);
            this.treats[i]["showNotification"] = true;
            if (this.treats[i].askedTo == this.userId) {
                this.treats[i]["showConpleteSpinner"] = false;
            }
            if (i + 1 == this.allpages.totalCount) {
                this.showShowMore = false;
            }
        }
        this.pageNumber++;
    };
    TreatsComponent.prototype.getTreats = function () {
        var _this = this;
        var pagingViewModel = new _ViewModels_pageViewModel__WEBPACK_IMPORTED_MODULE_5__["PagingViewModel"]();
        pagingViewModel.PageNumber = 0;
        pagingViewModel.NumberOfContentPerPage = 7;
        pagingViewModel.SortProperty = "Deadline";
        pagingViewModel.OrderByDescending = true;
        this.treatsService
            .getTreats(pagingViewModel)
            .subscribe(function (responce) {
            if (responce.success) {
                _this.userId = responce.additionalInformation;
                _this.allpages = responce.entity;
                _this.onClickShowMore();
            }
            else {
            }
        });
    };
    TreatsComponent.prototype.onCompleteTrashClick = function (treatId) {
        var _this = this;
        this.treatsService
            .completeTreat(treatId)
            .subscribe(function (responce) {
            if (responce.success) {
                for (var i = 0; i < _this.treats.length; i++) {
                    if (_this.treats[i].id == treatId) {
                        _this.treats[i].Confirmation = _this.treatStage.Completed;
                        _this.treats[i].showConpleteSpinner = false;
                    }
                }
            }
            else {
            }
        });
    };
    TreatsComponent.prototype.onTreatMovetoTrashClick = function (treatId) {
        var _this = this;
        this.treatsService
            .moveToTrash(treatId)
            .subscribe(function (responce) {
            if (responce.success) {
                for (var i = 0; i < _this.treats.length; i++) {
                    if (_this.treats[i].id == treatId) {
                        _this.treats[i].Confirmation = _this.treatStage.Trashed;
                        _this.treats[i]["showNotification"] = true;
                    }
                }
            }
            else {
            }
        });
    };
    TreatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-treats",
            template: __webpack_require__(/*! ./treats.component.html */ "./src/app/components/home/treats/treats.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("fadeInOut", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: "translateY(50px)" }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("400ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: "translateY(0px)" }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(":leave", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("400ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, height: "0px" }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./treats.component.css */ "./src/app/components/home/treats/treats.component.css")]
        }),
        __metadata("design:paramtypes", [_services_treats_service__WEBPACK_IMPORTED_MODULE_1__["TreatsService"]])
    ], TreatsComponent);
    return TreatsComponent;
}());



/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/landingpage/landingpage.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Lato\";\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 700;\n  font-family: \"Montserrat\";\n}\n\nhr.star-light,\nhr.star-dark {\n  max-width: 15rem;\n  padding: 0;\n  text-align: center;\n  border: none;\n  border-top: solid 0.25rem;\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nhr.star-light:after,\nhr.star-dark:after {\n  position: relative;\n  top: -0.8em;\n  display: inline-block;\n  padding: 0 0.25em;\n  content: \"\\f005\";\n  font-family: FontAwesome;\n  font-size: 2em;\n}\n\nhr.star-light {\n  border-color: #fff;\n}\n\nhr.star-light:after {\n  color: #fff;\n  background-color: #027FCF;\n}\n\nhr.star-dark {\n  border-color: #222d32;\n}\n\nhr.star-dark:after {\n  color: #222d32;\n  background-color: white;\n}\n\nsection {\n  padding: 6rem 0;\n}\n\nsection h2 {\n  font-size: 2.25rem;\n  line-height: 2rem;\n}\n\n@media (min-width: 992px) {\n  section h2 {\n    font-size: 3rem;\n    line-height: 2.5rem;\n  }\n}\n\n.btn-xl {\n  padding: 1rem 1.75rem;\n  font-size: 1.25rem;\n}\n\n.btn-social {\n  width: 3.25rem;\n  height: 3.25rem;\n  font-size: 1.25rem;\n  line-height: 2rem;\n}\n\n.scroll-to-top {\n  z-index: 1042;\n  right: 1rem;\n  bottom: 1rem;\n  display: none;\n}\n\n.scroll-to-top a {\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: rgba(33, 37, 41, 0.5);\n  line-height: 3.1rem;\n}\n\n#mainNav {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  font-weight: 700;\n  font-family: \"Montserrat\";\n}\n\n.navbar-height-out {\n  line-height: 0cm !important;\n}\n\n#mainNav .navbar-brand {\n  color: #fff;\n}\n\n#mainNav .navbar-nav {\n  margin-top: 1rem;\n  letter-spacing: 0.0625rem;\n}\n\n#mainNav .navbar-nav li.nav-item a.nav-link {\n  color: #fff;\n}\n\n#mainNav .navbar-nav li.nav-item a.nav-link:hover {\n  color: #027FCF;\n}\n\n#mainNav .navbar-nav li.nav-item a.nav-link:active,\n#mainNav .navbar-nav li.nav-item a.nav-link:focus {\n  color: #fff;\n}\n\n#mainNav .navbar-nav li.nav-item a.nav-link.active {\n  color: #027FCF;\n}\n\n#mainNav .navbar-toggler {\n  font-size: 80%;\n  padding: 0.8rem;\n}\n\n@media (min-width: 992px) {\n  #mainNav {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    transition: padding-top 0.3s, padding-bottom 0.3s;\n  }\n  #mainNav .navbar-brand {\n    font-size: 2em;\n    transition: font-size 0.3s;\n  }\n  #mainNav .navbar-nav {\n    margin-top: 0;\n  }\n  #mainNav .navbar-nav > li.nav-item > a.nav-link.active {\n    color: #fff;\n    background: #027FCF;\n  }\n  #mainNav .navbar-nav > li.nav-item > a.nav-link.active:active,\n  #mainNav .navbar-nav > li.nav-item > a.nav-link.active:focus,\n  #mainNav .navbar-nav > li.nav-item > a.nav-link.active:hover {\n    color: #fff;\n    background: #027FCF;\n  }\n  #mainNav.navbar-shrink {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n  #mainNav.navbar-shrink .navbar-brand {\n    font-size: 1.5em;\n  }\n}\n\nheader.masthead {\n  padding-top: calc(6rem + 72px);\n  padding-bottom: 6rem;\n}\n\nheader.masthead h1 {\n  font-size: 3rem;\n  line-height: 3rem;\n}\n\nheader.masthead h2 {\n  font-size: 1.3rem;\n  font-family: \"Lato\";\n}\n\n@media (min-width: 992px) {\n  header.masthead {\n    padding-top: calc(6rem + 106px);\n    padding-bottom: 6rem;\n  }\n  header.masthead h1 {\n    font-size: 4.75em;\n    line-height: 4rem;\n  }\n  header.masthead h2 {\n    font-size: 1.75em;\n  }\n}\n\n.signup {\n  margin-bottom: -15px;\n}\n\n.floating-label-form-group {\n  position: relative;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.floating-label-form-group input,\n.floating-label-form-group textarea {\n  font-size: 1.5em;\n  position: relative;\n  z-index: 1;\n  padding-right: 0;\n  padding-left: 0;\n  resize: none;\n  border: none;\n  border-radius: 0;\n  background: none;\n  box-shadow: none !important;\n}\n\n.floating-label-form-group label {\n  font-size: 0.85em;\n  line-height: 1.764705882em;\n  position: relative;\n  z-index: 0;\n  top: 2em;\n  display: block;\n  margin: 0;\n  transition: top 0.3s ease, opacity 0.3s ease;\n  opacity: 0;\n}\n\n.floating-label-form-group:not(:first-child) {\n  padding-left: 14px;\n  border-left: 1px solid #e9ecef;\n}\n\n.floating-label-form-group-with-value label {\n  top: 0;\n  opacity: 1;\n}\n\n.floating-label-form-group-with-focus label {\n  color: #027FCF;\n}\n\nform .row:first-child .floating-label-form-group {\n  border-top: 1px solid #e9ecef;\n}\n\n.footer {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n  background-color: #222d32;\n  color: #fff;\n}\n\n.copyright {\n  background-color: #1a252f;\n}\n\na {\n  color: #027FCF;\n}\n\na:focus,\na:hover,\na:active {\n  color: #026eb1;\n}\n\n.btn {\n  border-width: 2px;\n}\n\n.bg-primary {\n  background-color: #027FCF !important;\n}\n\nbutton.bg-primary:focus,\nbutton.bg-primary:hover {\n  background-color: #027FCF !important;\n}\n\n.bg-secondary {\n  background-color: #222d32 !important;\n}\n\n.text-primary {\n  color: #027FCF !important;\n}\n\n.text-secondary {\n  color: #222d32 !important;\n}\n\n.btn-primary {\n  background-color: #027FCF;\n  border-color: #027FCF;\n}\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active {\n  background-color: #026eb1;\n  border-color: #026eb1;\n}\n\n.btn-secondary {\n  background-color: #222d32;\n  border-color: #222d32;\n}\n\n.btn-secondary:hover,\n.btn-secondary:focus,\n.btn-secondary:active {\n  background-color: #1a252f;\n  border-color: #1a252f;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5ncGFnZS9sYW5kaW5ncGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Ozs7RUFNRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCx1Q0FBdUM7RUFDdkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBR3RCLGlEQUFpRDtFQUNuRDtFQUNBO0lBQ0UsY0FBYztJQUdkLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0VBQ0E7OztJQUdFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSwrQkFBK0I7SUFDL0Isb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixjQUFjO0VBQ2QsU0FBUztFQUlULDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7OztFQUdFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBOzs7RUFHRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5ncGFnZS9sYW5kaW5ncGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuXG5oci5zdGFyLWxpZ2h0LFxuaHIuc3Rhci1kYXJrIHtcbiAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IHNvbGlkIDAuMjVyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5oci5zdGFyLWxpZ2h0OmFmdGVyLFxuaHIuc3Rhci1kYXJrOmFmdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0wLjhlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDAuMjVlbTtcbiAgY29udGVudDogXCJcXGYwMDVcIjtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuaHIuc3Rhci1saWdodCB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuaHIuc3Rhci1saWdodDphZnRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3RkNGO1xufVxuXG5oci5zdGFyLWRhcmsge1xuICBib3JkZXItY29sb3I6ICMyMjJkMzI7XG59XG5cbmhyLnN0YXItZGFyazphZnRlciB7XG4gIGNvbG9yOiAjMjIyZDMyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDZyZW0gMDtcbn1cblxuc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBzZWN0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgfVxufVxuXG4uYnRuLXhsIHtcbiAgcGFkZGluZzogMXJlbSAxLjc1cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5idG4tc29jaWFsIHtcbiAgd2lkdGg6IDMuMjVyZW07XG4gIGhlaWdodDogMy4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cblxuLnNjcm9sbC10by10b3Age1xuICB6LWluZGV4OiAxMDQyO1xuICByaWdodDogMXJlbTtcbiAgYm90dG9tOiAxcmVtO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2Nyb2xsLXRvLXRvcCBhIHtcbiAgd2lkdGg6IDMuNXJlbTtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDM3LCA0MSwgMC41KTtcbiAgbGluZS1oZWlnaHQ6IDMuMXJlbTtcbn1cblxuI21haW5OYXYge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cblxuLm5hdmJhci1oZWlnaHQtb3V0IHtcbiAgbGluZS1oZWlnaHQ6IDBjbSAhaW1wb3J0YW50O1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNtYWluTmF2IC5uYXZiYXItbmF2IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDYyNXJlbTtcbn1cblxuI21haW5OYXYgLm5hdmJhci1uYXYgbGkubmF2LWl0ZW0gYS5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLW5hdiBsaS5uYXYtaXRlbSBhLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMjdGQ0Y7XG59XG5cbiNtYWluTmF2IC5uYXZiYXItbmF2IGxpLm5hdi1pdGVtIGEubmF2LWxpbms6YWN0aXZlLFxuI21haW5OYXYgLm5hdmJhci1uYXYgbGkubmF2LWl0ZW0gYS5uYXYtbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLW5hdiBsaS5uYXYtaXRlbSBhLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDI3RkNGO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXIge1xuICBmb250LXNpemU6IDgwJTtcbiAgcGFkZGluZzogMC44cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI21haW5OYXYge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHBhZGRpbmctdG9wIDAuM3MsIHBhZGRpbmctYm90dG9tIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAwLjNzLCBwYWRkaW5nLWJvdHRvbSAwLjNzO1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmctdG9wIDAuM3MsIHBhZGRpbmctYm90dG9tIDAuM3M7XG4gIH1cbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzO1xuICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzO1xuICB9XG4gICNtYWluTmF2IC5uYXZiYXItbmF2IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzAyN0ZDRjtcbiAgfVxuICAjbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluay5hY3RpdmU6YWN0aXZlLFxuICAjbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluay5hY3RpdmU6Zm9jdXMsXG4gICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rLmFjdGl2ZTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzAyN0ZDRjtcbiAgfVxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIH1cbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG59XG5cbmhlYWRlci5tYXN0aGVhZCB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDZyZW0gKyA3MnB4KTtcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XG59XG5cbmhlYWRlci5tYXN0aGVhZCBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG59XG5cbmhlYWRlci5tYXN0aGVhZCBoMiB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBoZWFkZXIubWFzdGhlYWQge1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDZyZW0gKyAxMDZweCk7XG4gICAgcGFkZGluZy1ib3R0b206IDZyZW07XG4gIH1cbiAgaGVhZGVyLm1hc3RoZWFkIGgxIHtcbiAgICBmb250LXNpemU6IDQuNzVlbTtcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcbiAgfVxuICBoZWFkZXIubWFzdGhlYWQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICB9XG59XG5cbi5zaWdudXAge1xuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbn1cblxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBpbnB1dCxcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIHRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc2NDcwNTg4MmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIHRvcDogMmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogdG9wIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cC13aXRoLXZhbHVlIGxhYmVsIHtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cC13aXRoLWZvY3VzIGxhYmVsIHtcbiAgY29sb3I6ICMwMjdGQ0Y7XG59XG5cbmZvcm0gLnJvdzpmaXJzdC1jaGlsZCAuZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDVyZW07XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyZDMyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTI1MmY7XG59XG5cbmEge1xuICBjb2xvcjogIzAyN0ZDRjtcbn1cblxuYTpmb2N1cyxcbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDI2ZWIxO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyN0ZDRiAhaW1wb3J0YW50O1xufVxuXG5idXR0b24uYmctcHJpbWFyeTpmb2N1cyxcbmJ1dHRvbi5iZy1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyN0ZDRiAhaW1wb3J0YW50O1xufVxuXG4uYmctc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmQzMiAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICMwMjdGQ0YgIWltcG9ydGFudDtcbn1cblxuLnRleHQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICMyMjJkMzIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyN0ZDRjtcbiAgYm9yZGVyLWNvbG9yOiAjMDI3RkNGO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIsXG4uYnRuLXByaW1hcnk6Zm9jdXMsXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNmViMTtcbiAgYm9yZGVyLWNvbG9yOiAjMDI2ZWIxO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjJkMzI7XG4gIGJvcmRlci1jb2xvcjogIzIyMmQzMjtcbn1cblxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIsXG4uYnRuLXNlY29uZGFyeTpmb2N1cyxcbi5idG4tc2Vjb25kYXJ5OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTI1MmY7XG4gIGJvcmRlci1jb2xvcjogIzFhMjUyZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/landingpage/landingpage.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-top\">\n  <!-- Navigation -->\n  <nav\n    class=\"navbar navbar-expand-lg bg-secondary fixed-top text-uppercase navbar-height-out\"\n    id=\"mainNav\"\n  >\n    <div class=\"container\">\n      <a class=\"navbar-brand whosnext-text pointer\" (click)=\"scroll(cover)\"\n        >Who's Next</a\n      >\n      <button\n        class=\"navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarResponsive\"\n        aria-controls=\"navbarResponsive\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\"\n      >\n        Menu\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item mx-0 mx-lg-1\">\n            <a\n              class=\"nav-link py-3 px-0 px-lg-3 rounded normal-text pointer\"\n              data-toggle=\"modal\"\n              data-target=\"#logInModal\"\n              >Log in</a\n            >\n          </li>\n          <li class=\"nav-item mx-0 mx-lg-1\">\n            <a\n              class=\"nav-link py-3 px-0 px-lg-3 rounded normal-text pointer\"\n              (click)=\"scroll(signup)\"\n              >Sign Up</a\n            >\n          </li>\n          <li class=\"nav-item mx-0 mx-lg-1\">\n            <a\n              class=\"nav-link py-3 px-0 px-lg-3 rounded normal-text pointer\"\n              (click)=\"scroll(about)\"\n              >About</a\n            >\n          </li>\n          <li class=\"nav-item mx-0 mx-lg-1\">\n            <a\n              class=\"nav-link py-3 px-0 px-lg-3 roundeds normal-text pointer\"\n              (click)=\"scroll(contact)\"\n              >Contact</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <!-- Log In Modal -->\n  <div\n    class=\"modal fade\"\n    id=\"logInModal\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"modalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title whosnext-text\" id=\"modalLabel\">Who's Next</h5>\n          <button\n            type=\"button\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <form (submit)=\"logInUser($event)\">\n          <div class=\"modal-body\">\n            <div class=\"row\">\n              <div class=\"form-group col-12\">\n                <input\n                  type=\"email\"\n                  class=\"form-control\"\n                  placeholder=\"Enter Email\"\n                  id=\"loginemail\"\n                  name=\"email\"\n                  [(ngModel)]=\"logInViewModel.Email\"\n                />\n              </div>\n              <div class=\"form-group col-12\">\n                <input\n                  type=\"password\"\n                  class=\"form-control\"\n                  placeholder=\"Password\"\n                  id=\"loginpassword\"\n                  name=\"password\"\n                  [(ngModel)]=\"logInViewModel.Password\"\n                />\n              </div>\n            </div>\n            <div *ngIf=\"showAlter\">\n              <div class=\"alert alert-danger\">\n                <a class=\"close\" (click)=\"showAlter = false\">&times;</a>\n                The email or the password is incorrect.\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button\n              type=\"button\"\n              class=\"btn btn-secondary\"\n              data-dismiss=\"modal\"\n              #closelogInModal\n            >\n              Close\n            </button>\n            <button type=\"submit\" class=\"btn btn-primary\">\n              <i class=\"fa fa-spinner fa-spin\" *ngIf=\"showLogInLoader\"></i> Log\n              In\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <!-- Header -->\n  <header class=\"masthead bg-primary text-white text-center\" #cover>\n    <div class=\"container\">\n      <img\n        class=\"img-fluid mb-5 d-block mx-auto\"\n        src=\"../../../assets/img/Landingpage/CaptureCol.png\"\n        alt=\"\"\n      />\n      <h1 class=\"text-uppercase mb-0 whosnext-text\">Who's Next</h1>\n      <hr class=\"star-light\" />\n      <h2 class=\"font-weight-light mb-0 normal-text\">\n        First we eat Then we do everything else\n      </h2>\n    </div>\n  </header>\n\n  <section class=\"signup\" #signup>\n    <div class=\"container\">\n      <h2 class=\"text-center text-uppercase text-secondary mb-0 normal-text\">\n        Sign Up\n      </h2>\n      <hr class=\"star-dark mb-5\" />\n      <div class=\"row justify-content-center\">\n        <form\n          [formGroup]=\"signUpForm\"\n          class=\"col-lg-6 col-md-12 justify-content-center\"\n          (submit)=\"signUpUser($event)\"\n        >\n          <div class=\"form-group col-12\">\n            <div *ngIf=\"showSignSuccessAlter\">\n              <div class=\"alert alert-success\">\n                <a class=\"close\" (click)=\"showSignSuccessAlter = false\"\n                  >&times;</a\n                >\n                Your are successfully registered. You may log in.\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group col-12\">\n            <label for=\"fullname\">Name</label>\n            <input\n              formControlName=\"signupfullname\"\n              id=\"fullname\"\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Enter Name\"\n              [ngClass]=\"{\n                'is-invalid':\n                  submitted && getSignUpFormControls.signupfullname.errors\n              }\"\n            />\n            <p\n              *ngIf=\"submitted && getSignUpFormControls.signupfullname.errors\"\n              class=\"text-danger\"\n            >\n              Enter a valid name.\n            </p>\n          </div>\n          <div class=\"form-group col-12\">\n            <label for=\"signupemailId\">Email Address</label>\n            <input\n              formControlName=\"signupemail\"\n              id=\"signupemailId\"\n              type=\"email\"\n              class=\"form-control\"\n              placeholder=\"Enter email\"\n              [ngClass]=\"{\n                'is-invalid':\n                  submitted && getSignUpFormControls.signupemail.errors\n              }\"\n            />\n            <p\n              *ngIf=\"submitted && getSignUpFormControls.signupemail.errors\"\n              class=\"text-danger\"\n            >\n              Enter a valid email address.\n            </p>\n            <p *ngIf=\"signUpDuplicateEmail\" class=\"text-danger\">\n              An account exists with this email, try another.\n            </p>\n          </div>\n          <div class=\"form-group col-12\">\n            <label for=\"signuppasswordId\">Password</label>\n            <input\n              formControlName=\"signuppassword\"\n              id=\"signuppasswordId\"\n              type=\"password\"\n              class=\"form-control\"\n              placeholder=\"Password\"\n              [ngClass]=\"{\n                'is-invalid':\n                  submitted && getSignUpFormControls.signuppassword.errors\n              }\"\n            />\n            <p\n              *ngIf=\"submitted && getSignUpFormControls.signuppassword.errors\"\n              class=\"text-danger\"\n            >\n              Enter a password of minimum length 6.\n            </p>\n          </div>\n          <div class=\"form-group col-12\">\n            <label for=\"birthdate\">Birth Date</label>\n            <div class=\"row\">\n              <div class=\"col-3\">\n                <select\n                  #bdate\n                  id=\"birthdate\"\n                  class=\"form-control\"\n                  (change)=\"\n                    onBirthDateChange(bdate.value, bmonth.value, byear.value)\n                  \"\n                  [ngClass]=\"{ 'is-invalid': submitted && invalidBirthDate }\"\n                >\n                  <option *ngFor=\"let date of dates\" value=\"{{ date }}\">{{\n                    date\n                  }}</option>\n                </select>\n              </div>\n              <div class=\"col-3\">\n                <select\n                  #bmonth\n                  id=\"birthmonth\"\n                  class=\"form-control\"\n                  (change)=\"\n                    onBirthDateChange(bdate.value, bmonth.value, byear.value)\n                  \"\n                  [ngClass]=\"{ 'is-invalid': submitted && invalidBirthDate }\"\n                >\n                  <option\n                    *ngFor=\"let month of months; index as i\"\n                    value=\"{{ i + 1 }}\"\n                    >{{ month }}</option\n                  >\n                </select>\n              </div>\n              <div class=\"col-4\">\n                <select\n                  #byear\n                  id=\"birthyear\"\n                  class=\"form-control\"\n                  (change)=\"\n                    onBirthDateChange(bdate.value, bmonth.value, byear.value)\n                  \"\n                  [ngClass]=\"{ 'is-invalid': submitted && invalidBirthDate }\"\n                >\n                  <option *ngFor=\"let year of years\" value=\"{{ year }}\">{{\n                    year\n                  }}</option>\n                </select>\n              </div>\n            </div>\n            <p *ngIf=\"submitted && invalidBirthDate\" class=\"text-danger\">\n              Enter a valid birth date.\n            </p>\n          </div>\n          <div class=\"form-group col-9\">\n            <label for=\"gender\">Gender</label>\n            <select id=\"gender\" class=\"form-control\">\n              <option value=\"{{ gernderType.Female }}\">Female</option>\n              <option value=\"{{ gernderType.Male }}\">Male</option>\n              <option value=\"{{ gernderType.PreferNotToSay }}\"\n                >Prefer not to say</option\n              >\n            </select>\n          </div>\n          <div class=\"form-group col-12 \">\n            <button type=\"submit\" class=\"btn btn-primary align-content-center\">\n              <i class=\"fa fa-spinner fa-spin\" *ngIf=\"showSignUpLoader\"></i>\n              Sign Up\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </section>\n\n  <!-- About Section -->\n  <section class=\"bg-primary text-white mb-0\" #about>\n    <div class=\"container\">\n      <h2 class=\"text-center text-uppercase text-white normal-text\">About</h2>\n      <hr class=\"star-light mb-5\" />\n      <div class=\"row\">\n        <div class=\"col-lg-4 ml-auto\">\n          <p class=\"lead\">\n            Who's Next is all about having treat and giving treat. Get your\n            treat and enjoy the time. Get various restaurant suggestions.\n          </p>\n        </div>\n        <div class=\"col-lg-4 mr-auto\">\n          <p class=\"lead\">\n            Stay connected with your friends. Always be in the party mode.\n            Insult your friends to get treat and be insulted.\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Contact Section -->\n  <section #contact>\n    <div class=\"container\">\n      <h2 class=\"text-center text-uppercase text-secondary mb-0 normal-text\">\n        Contact Us\n      </h2>\n      <hr class=\"star-dark mb-5\" />\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <form name=\"sentMessage\" id=\"contactForm\" novalidate=\"novalidate\">\n            <div class=\"control-group\">\n              <div\n                class=\"form-group floating-label-form-group controls mb-0 pb-2\"\n              >\n                <label>Name</label>\n                <input\n                  class=\"form-control\"\n                  id=\"name\"\n                  type=\"text\"\n                  placeholder=\"Name\"\n                  required=\"required\"\n                  data-validation-required-message=\"Please enter your name.\"\n                />\n                <p class=\"help-block text-danger\"></p>\n              </div>\n            </div>\n            <div class=\"control-group\">\n              <div\n                class=\"form-group floating-label-form-group controls mb-0 pb-2\"\n              >\n                <label>Email Address</label>\n                <input\n                  class=\"form-control\"\n                  id=\"email\"\n                  type=\"email\"\n                  placeholder=\"Email Address\"\n                  required=\"required\"\n                  data-validation-required-message=\"Please enter your email address.\"\n                />\n                <p class=\"help-block text-danger\"></p>\n              </div>\n            </div>\n            <div class=\"control-group\">\n              <div\n                class=\"form-group floating-label-form-group controls mb-0 pb-2\"\n              >\n                <label>Phone Number</label>\n                <input\n                  class=\"form-control\"\n                  id=\"phone\"\n                  type=\"tel\"\n                  placeholder=\"Phone Number\"\n                  required=\"required\"\n                  data-validation-required-message=\"Please enter your phone number.\"\n                />\n                <p class=\"help-block text-danger\"></p>\n              </div>\n            </div>\n            <div class=\"control-group\">\n              <div\n                class=\"form-group floating-label-form-group controls mb-0 pb-2\"\n              >\n                <label>Message</label>\n                <textarea\n                  class=\"form-control\"\n                  id=\"message\"\n                  rows=\"5\"\n                  placeholder=\"Message\"\n                  required=\"required\"\n                  data-validation-required-message=\"Please enter a message.\"\n                ></textarea>\n                <p class=\"help-block text-danger\"></p>\n              </div>\n            </div>\n            <br />\n            <div id=\"success\"></div>\n            <div class=\"form-group\">\n              <button\n                type=\"submit\"\n                class=\"btn btn-primary btn-xl\"\n                id=\"sendMessageButton\"\n              >\n                Send\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Footer -->\n  <!-- <footer class=\"footer text-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 mb-12\">\n          <h4 class=\"text-uppercase mb-4\">Around the Web</h4>\n          <ul class=\"list-inline mb-0\">\n            <li class=\"list-inline-item\">\n              <a class=\"btn btn-outline-light btn-social text-center rounded-circle\" href=\"\">\n                <i class=\"fas fa-facebook\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a class=\"btn btn-outline-light btn-social text-center rounded-circle\" href=\"\">\n                <i class=\"fas fa-fw fa-google-plus\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a class=\"btn btn-outline-light btn-social text-center rounded-circle\" href=\"\">\n                <i class=\"fas fa-fw fa-twitter\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a class=\"btn btn-outline-light btn-social text-center rounded-circle\" href=\"\">\n                <i class=\"fas fa-fw fa-linkedin\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a class=\"btn btn-outline-light btn-social text-center rounded-circle\" href=\"\">\n                <i class=\"fas fa-fw fa-dribbble\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </footer> -->\n\n  <div class=\"copyright py-4 text-center text-white\">\n    <div class=\"container\">\n      <strong>Copyright © 2018 <a href=\"#\">Company</a>.</strong> All rights\n      reserved.\n    </div>\n  </div>\n\n  <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->\n  <div class=\"scroll-to-top d-lg-none position-fixed \">\n    <a class=\" d-block text-center text-white rounded\" href=\"\">\n      <i class=\"fa fa-chevron-up\"></i>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/landingpage/landingpage.component.ts ***!
  \*****************************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ViewModels_logInViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ViewModels/logInViewModel */ "./src/app/ViewModels/logInViewModel.ts");
/* harmony import */ var _ViewModels_signUpViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ViewModels/signUpViewModel */ "./src/app/ViewModels/signUpViewModel.ts");
/* harmony import */ var _services_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/accounts.service */ "./src/app/services/accounts.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helper/helper */ "./src/app/helper/helper.ts");
/* harmony import */ var _ViewModels_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ViewModels/enums */ "./src/app/ViewModels/enums.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent(auth, router, accountsService, formBuilder, route) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.accountsService = accountsService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.dates = [];
        this.months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        this.years = [];
        this.gernderType = _ViewModels_enums__WEBPACK_IMPORTED_MODULE_8__["GernderType"];
        this.logInViewModel = new _ViewModels_logInViewModel__WEBPACK_IMPORTED_MODULE_3__["LogInViewModel"]();
        this.route.queryParams.subscribe(function (params) {
            _this.logInViewModel.Email = params["email"];
            _this.logInViewModel.Password = params["password"];
        });
    }
    Object.defineProperty(LandingpageComponent.prototype, "getSignUpFormControls", {
        get: function () {
            return this.signUpForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LandingpageComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.formBuilder.group({
            signupfullname: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("[a-zA-Z][a-zA-Z ]*")]
            ],
            signupemail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            signuppassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]]
        });
        this.showAlter = false;
        this.showSignSuccessAlter = false;
        this.showLogInLoader = false;
        this.showSignUpLoader = false;
        this.submitted = false;
        this.signUpDuplicateEmail = false;
        this.invalidBirthDate = false;
        for (var i = 1; i <= 31; i++) {
            this.dates.push(i);
        }
        var curretntYear = new Date().getFullYear();
        for (var i = curretntYear; i >= 1919; i--) {
            this.years.push(i);
        }
    };
    LandingpageComponent.prototype.scroll = function (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    LandingpageComponent.prototype.onBirthDateChange = function (birthDate, birthMonth, birthYear) {
        this.invalidBirthDate = !_helper_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"].isValidDate(birthDate, birthMonth, birthYear);
    };
    LandingpageComponent.prototype.logInUser = function (event) {
        var _this = this;
        event.preventDefault();
        this.showLogInLoader = true;
        this.auth
            .logIn(this.logInViewModel)
            .subscribe(function (responce) {
            if (responce.success) {
                localStorage.setItem("AuthorizationToken", responce.entity.token);
                _this.closeAddExpenseModal.nativeElement.click();
                _this.router.navigate(["/home/treats"]);
            }
            else {
                _this.showAlter = true;
            }
            _this.showLogInLoader = false;
        });
    };
    LandingpageComponent.prototype.signUpUser = function (event) {
        var _this = this;
        event.preventDefault();
        this.signUpDuplicateEmail = false;
        this.submitted = true;
        if (this.signUpForm.invalid || this.invalidBirthDate) {
            return;
        }
        this.showSignUpLoader = true;
        var signUpViewModel = new _ViewModels_signUpViewModel__WEBPACK_IMPORTED_MODULE_4__["SignUpViewModel"]();
        signUpViewModel.Name = event.target.querySelector("#fullname").value;
        signUpViewModel.Email = event.target.querySelector("#signupemailId").value;
        signUpViewModel.Password = event.target.querySelector("#signuppasswordId").value;
        signUpViewModel.BirthDate = event.target.querySelector("#birthdate").value;
        signUpViewModel.BirthMonth = event.target.querySelector("#birthmonth").value;
        signUpViewModel.BirthYear = event.target.querySelector("#birthyear").value;
        signUpViewModel.Gender = event.target.querySelector("#gender").value;
        this.accountsService
            .signUp(signUpViewModel)
            .subscribe(function (responce) {
            if (responce.success) {
                _this.showSignSuccessAlter = true;
            }
            else {
                if (responce.errorDescriptions[0] === "DuplicateEmail") {
                    _this.signUpDuplicateEmail = true;
                }
            }
            _this.showSignUpLoader = false;
            _this.submitted = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("closelogInModal"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LandingpageComponent.prototype, "closeAddExpenseModal", void 0);
    LandingpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-landingpage",
            template: __webpack_require__(/*! ./landingpage.component.html */ "./src/app/components/landingpage/landingpage.component.html"),
            styles: [__webpack_require__(/*! ./landingpage.component.css */ "./src/app/components/landingpage/landingpage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(Auth, Router) {
        this.Auth = Auth;
        this.Router = Router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.Auth.isAuthenticated()) {
            this.Router.navigate(['']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/landingpage.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/landingpage.guard.ts ***!
  \*********************************************/
/*! exports provided: LandingpageGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageGuard", function() { return LandingpageGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingpageGuard = /** @class */ (function () {
    function LandingpageGuard(Auth, Router) {
        this.Auth = Auth;
        this.Router = Router;
    }
    LandingpageGuard.prototype.canActivate = function () {
        if (this.Auth.isAuthenticated()) {
            this.Router.navigate(['/home/treats']);
            return false;
        }
        return true;
    };
    LandingpageGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LandingpageGuard);
    return LandingpageGuard;
}());



/***/ }),

/***/ "./src/app/helper/helper.ts":
/*!**********************************!*\
  !*** ./src/app/helper/helper.ts ***!
  \**********************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.isValidDate = function (day, month, year) {
        var daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 2 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) {
            daysInMonth[2]++;
        }
        if (day > daysInMonth[month]) {
            return false;
        }
        else {
            return true;
        }
    };
    Helper.queryStringBuilder = function (parameters) {
        var queryString = "?";
        var objectKeys = Object.keys(parameters);
        for (var i = 0; i < objectKeys.length; i++) {
            if (i != 0) {
                queryString += "&";
            }
            queryString += objectKeys[i].toString() + "=" + parameters[objectKeys[i]];
        }
        return queryString;
    };
    Helper.convertDateInCurrentTimeZone = function (date) {
        date = new Date(date);
        date.setHours(date.getHours() - new Date().getTimezoneOffset() / 60);
        return date;
    };
    return Helper;
}());



/***/ }),

/***/ "./src/app/routing/app-routing/app-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/routing/app-routing/app-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_home_treats_treats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/treats/treats.component */ "./src/app/components/home/treats/treats.component.ts");
/* harmony import */ var _components_home_treat_treat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/treat/treat.component */ "./src/app/components/home/treat/treat.component.ts");
/* harmony import */ var _components_home_asktreat_asktreat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/home/asktreat/asktreat.component */ "./src/app/components/home/asktreat/asktreat.component.ts");
/* harmony import */ var _components_home_treatrequests_treatrequests_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/home/treatrequests/treatrequests.component */ "./src/app/components/home/treatrequests/treatrequests.component.ts");
/* harmony import */ var _components_home_treathistory_treathistory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/home/treathistory/treathistory.component */ "./src/app/components/home/treathistory/treathistory.component.ts");
/* harmony import */ var _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/landingpage/landingpage.component */ "./src/app/components/landingpage/landingpage.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_landingpage_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../guards/landingpage.guard */ "./src/app/guards/landingpage.guard.ts");
/* harmony import */ var _components_home_trash_trash_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/home/trash/trash.component */ "./src/app/components/home/trash/trash.component.ts");
/* harmony import */ var _components_home_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/home/profile/profile.component */ "./src/app/components/home/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        children: [
            { path: '', redirectTo: '/home/treats', pathMatch: 'full' },
            { path: 'treats', component: _components_home_treats_treats_component__WEBPACK_IMPORTED_MODULE_3__["TreatsComponent"] },
            { path: 'treat', component: _components_home_treat_treat_component__WEBPACK_IMPORTED_MODULE_4__["TreatComponent"] },
            { path: 'asktreat', component: _components_home_asktreat_asktreat_component__WEBPACK_IMPORTED_MODULE_5__["AsktreatComponent"] },
            { path: 'treatrequests', component: _components_home_treatrequests_treatrequests_component__WEBPACK_IMPORTED_MODULE_6__["TreatrequestsComponent"] },
            { path: 'treathistory', component: _components_home_treathistory_treathistory_component__WEBPACK_IMPORTED_MODULE_7__["TreathistoryComponent"] },
            { path: 'trash', component: _components_home_trash_trash_component__WEBPACK_IMPORTED_MODULE_11__["TrashComponent"] },
            { path: 'profile', component: _components_home_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"] }
        ]
    },
    { path: '', component: _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_8__["LandingpageComponent"], canActivate: [_guards_landingpage_guard__WEBPACK_IMPORTED_MODULE_10__["LandingpageGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/accounts.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/accounts.service.ts ***!
  \**********************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper */ "./src/app/helper/helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var AccountsService = /** @class */ (function () {
    function AccountsService(http) {
        this.http = http;
    }
    AccountsService.prototype.signUp = function (signUpViewModel) {
        var body = JSON.stringify(signUpViewModel);
        return this.http.post('/api/accounts/signup', body, httpOptions);
    };
    AccountsService.prototype.searchFriendsBySearchText = function (searchText) {
        return this.http.get('/api/accounts/friendsbysearch' + _helper_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].queryStringBuilder({
            'userEmail': '',
            'searchText': searchText,
        }));
    };
    AccountsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AccountsService);
    return AccountsService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.logIn = function (logInViewModel) {
        var body = JSON.stringify(logInViewModel);
        return this.http.post('/api/auth/login', body, httpOptions);
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('AuthorizationToken');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/treats.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/treats.service.ts ***!
  \********************************************/
/*! exports provided: TreatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatsService", function() { return TreatsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper */ "./src/app/helper/helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
var TreatsService = /** @class */ (function () {
    function TreatsService(http) {
        this.http = http;
    }
    TreatsService.prototype.addtreat = function (treat) {
        var body = JSON.stringify(treat);
        return this.http.post("/api/treats/addtreat", body, httpOptions);
    };
    TreatsService.prototype.getTreatRequests = function (pagingViewModel) {
        return this.http.get("/api/treats/gettreatrequests" +
            _helper_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].queryStringBuilder(pagingViewModel));
    };
    TreatsService.prototype.confirmTreat = function (treatId) {
        var body = JSON.stringify({ treatId: treatId });
        console.log(body);
        return this.http.post("/api/treats/confirmtreat", body, httpOptions);
    };
    TreatsService.prototype.moveToTrash = function (treatId) {
        var body = JSON.stringify({ treatId: treatId });
        return this.http.post("/api/treats/movetotrash", body, httpOptions);
    };
    TreatsService.prototype.getTrash = function (pagingViewModel) {
        return this.http.get("/api/treats/gettrash" + _helper_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].queryStringBuilder(pagingViewModel));
    };
    TreatsService.prototype.getTreats = function (pagingViewModel) {
        return this.http.get("/api/treats/gettreats" + _helper_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].queryStringBuilder(pagingViewModel));
    };
    TreatsService.prototype.completeTreat = function (treatId) {
        var body = JSON.stringify({ treatId: treatId });
        return this.http.post("/api/treats/completetreat", body, httpOptions);
    };
    TreatsService.prototype.getTreatHistory = function (pagingViewModel) {
        return this.http.get("/api/treats/gettreathistory" + _helper_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].queryStringBuilder(pagingViewModel));
    };
    TreatsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TreatsService);
    return TreatsService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mdmuidulalam/MyWorld/Projects/Whosnext/whosnext-clientside/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map