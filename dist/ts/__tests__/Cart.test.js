"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = __importDefault(require("../service/Cart"));
var Book_1 = __importDefault(require("../domain/Book"));
var Movie_1 = __importDefault(require("../domain/Movie"));
test('new card should be empty', function () {
    var cart = new Cart_1.default();
    expect(cart.items.length).toBe(0);
});
test('add cart Movies', function () {
    var cart = new Cart_1.default();
    var movie = new Movie_1.default(33, "Avengers", 2012, 'США', 'Avengers Assemble', 'Фантастика', '137 минут', 500);
    cart.add(movie);
    expect(cart.items.length).toBe(1);
});
test('get total', function () {
    var cart = new Cart_1.default();
    var book1 = new Book_1.default(1, 'book1', 'author1', 33, 100);
    var book2 = new Book_1.default(2, 'book2', 'author2', 77, 90);
    var book3 = new Book_1.default(3, 'book3', 'author3', 100, 80);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    expect(cart.getTotal()).toBe(210);
});
test('get discout', function () {
    var cart = new Cart_1.default();
    var book1 = new Book_1.default(1, 'book1', 'author1', 23, 100);
    var book2 = new Book_1.default(2, 'book2', 'author2', 77, 90);
    var book3 = new Book_1.default(3, 'book3', 'author3', 100, 80);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    expect(cart.getDiscout(10)).toBe(180);
});
test('delete Id', function () {
    var cart = new Cart_1.default();
    var book1 = new Book_1.default(1, 'book1', 'author1', 23, 100);
    var book2 = new Book_1.default(2, 'book2', 'author2', 77, 90);
    var book3 = new Book_1.default(3, 'book3', 'author3', 100, 80);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    cart.deleteId(3);
    expect(cart.items.length).toBe(2);
});
//# sourceMappingURL=Cart.test.js.map