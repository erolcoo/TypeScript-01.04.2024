var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.meow = function () {
        console.log("".concat(this.name, ", age ").concat(this.age, " says Meow"));
    };
    return Cat;
}());
function createCats(catInfo) {
    var cats = [];
    for (var _i = 0, catInfo_1 = catInfo; _i < catInfo_1.length; _i++) {
        var info = catInfo_1[_i];
        var _a = info.split(' '), name_1 = _a[0], ageStr = _a[1]; // Split by space
        var age = parseInt(ageStr);
        var cat = new Cat(name_1, age); // Use Cat class
        cats.push(cat);
    }
    return cats;
}
var catsInfo1 = ['Mellow 2', 'Tom 5'];
var cats1 = createCats(catsInfo1); // Create cats from info1
// Call meow for each cat in cats1
for (var _i = 0, cats1_1 = cats1; _i < cats1_1.length; _i++) {
    var cat = cats1_1[_i];
    cat.meow();
}
var catsInfo2 = ['Candy 1', 'Poppy 3', 'Nyx 2'];
var cats2 = createCats(catsInfo2); // Create cats from info2
// Call meow for each cat in cats2 (optional)
// for (const cat of cats2) {
//   cat.meow();
// }
