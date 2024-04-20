"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
var Magazine = /** @class */ (function () {
    function Magazine(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    Magazine.prototype.addCloth = function (cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    };
    Magazine.prototype.removeCloth = function (color) {
        var index = this.clothes.findIndex(function (cloth) { return cloth.color === color; });
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    };
    Magazine.prototype.getSmallestCloth = function () {
        return this.clothes.reduce(function (minCloth, cloth) { return minCloth.size < cloth.size ? minCloth : cloth; }, this.clothes[0]);
    };
    Magazine.prototype.getCloth = function (color) {
        return this.clothes.find(function (cloth) { return cloth.color === color; });
    };
    Magazine.prototype.getClothCount = function () {
        return this.clothes.length;
    };
    Magazine.prototype.report = function () {
        var sortedClothes = this.clothes.slice().sort(function (a, b) { return a.size - b.size; });
        var clothesInfo = sortedClothes.map(function (cloth) { return cloth.toString(); }).join(' ');
        return "".concat(this.type, " magazine contains: ").concat(clothesInfo);
    };
    return Magazine;
}());
exports.Magazine = Magazine;
