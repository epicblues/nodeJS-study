"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 호출되는 시점 : class 선언문을 자바스크립트 엔진이 읽을 때
function decorator() {
    var pDecorator = function (target, key, descriptor) {
        var original = descriptor.value;
        console.log(key);
        if (typeof original === "function") {
            console.log("This Property is original");
            console.log("This scope's this is eqaul to target ? ", target);
            descriptor.value = function () {
                console.log("check original scope : ", this);
            };
        }
    };
    return pDecorator;
}
var Hello = /** @class */ (function () {
    function Hello() {
        console.log("hello");
    }
    Hello.prototype.decorated = function () {
        console.log("is this function Works?");
    };
    __decorate([
        decorator(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Hello.prototype, "decorated", null);
    return Hello;
}());
var implemented = function (a) {
    return a;
};
implemented(5);
implemented("hello");
new Hello().decorated();
