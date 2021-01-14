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
exports.Rectangle = void 0;
var shape_1 = require("./shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(l, b) {
        var _this = _super.call(this) || this;
        _this.length = l;
        _this.breadth = b;
        _this.area = 0;
        return _this;
    }
    Rectangle.prototype.display = function () {
        console.log("\n       ------Area of Reactangle----\n       Whose length is " + this.length + "\n       breadth is " + this.breadth + "\n       And Area is " + this.area + "\n       ");
    };
    Rectangle.prototype.MyArea = function () {
        this.area = this.length * this.breadth;
    };
    return Rectangle;
}(shape_1.Shape));
exports.Rectangle = Rectangle;
