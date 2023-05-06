"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        this._items.push(item);
    };
    Object.defineProperty(Cart.prototype, "items", {
        get: function () {
            return __spreadArray([], this._items, true);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.getTotal = function () {
        var total = 0;
        this._items.forEach(function (item) {
            total += item.price;
        });
        return total;
    };
    Cart.prototype.getDiscout = function (discout) {
        var total = this.getTotal();
        total = total - total * (discout / 100);
        return total;
    };
    Cart.prototype.deleteId = function (id) {
        this._items = this._items.filter(function (item) { return item.id !== id; });
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=Cart.js.map