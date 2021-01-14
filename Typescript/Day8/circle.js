"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Circle = void 0;
var shape_1 = require("./shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        _this.area = 0;
        return _this;
    }
    Circle.prototype.display = function () {
        console.log("\n        -----Area of Circle -------\n            Whose radius is " + this.radius + "\n            Area is " + this.area + "\n        ");
    };
    Circle.prototype.MyArea = function () {
        this.area = 3.14 * this.radius * this.radius;
    };
    return Circle;
}(shape_1.Shape));
exports.Circle = Circle;
