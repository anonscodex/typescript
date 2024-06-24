var message = "Hello TypeScript";
var year = 2024;
var clas = "level 2";
console.log(message + " in " + year + "i am " + clas);
var u = true;
u = "string";
console.log(u);
var names = [];
names.push("Anons");
console.log(names);
var films = [];
//this is readonly you cant add to it
var myCollection;
myCollection = [5, "hello", 4, true];
console.log(myCollection);
var Schools;
(function (Schools) {
    Schools[Schools["BUK"] = 0] = "BUK";
    Schools[Schools["ABU"] = 1] = "ABU";
    Schools[Schools["NSUK"] = 2] = "NSUK";
    Schools[Schools["UI"] = 3] = "UI";
})(Schools || (Schools = {}));
var PresentSchool = Schools.NSUK;
console.log("The value of the school is " + PresentSchool);
var Anime;
(function (Anime) {
    Anime[Anime["Jujutsu_Kaisen"] = 1] = "Jujutsu_Kaisen";
    Anime[Anime["HunterXHunter"] = 2] = "HunterXHunter";
    Anime[Anime["Ninja_Kamui"] = 3] = "Ninja_Kamui";
    Anime[Anime["Chainsaw"] = 4] = "Chainsaw";
})(Anime || (Anime = {}));
var favAnime = Anime.HunterXHunter;
console.log("The value of this anime is " + favAnime);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Accepted);
var CarYear = 2001;
var CarType = "Toyota";
var CarModel = "Corolla";
var car = {
    year: CarYear,
    type: CarType,
    model: CarModel
};
console.log(car);
var rectangle = {
    height: 30,
    width: 20
};
console.log(rectangle);
var coloredPerson = {
    country: "Nigeria",
    age: 20,
    color: "black"
};
console.log(coloredPerson);
function printMyResult(result) {
    console.log("Your result is ".concat(result));
}
printMyResult(90);
printMyResult("A");
function totalNumber() {
    return 2;
}
console.log(totalNumber());
function greetMe() {
    console.log("Hello Anons");
}
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(3, 3));
console.log(add(3, 3, 4));
function power(a, b) {
    if (b === void 0) { b = 3; }
    return Math.pow(a, b);
}
console.log(power(2));
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
function addition(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (y, z) { return y + z; }, 0);
}
console.log(addition(1, 2, 3, 4, 5, 6, 7, 8, 9));
var negationFunc = function (value) { return value * -1; };
console.log(negationFunc(2000));
var x1 = 'hello';
console.log(x1.length);
var x2 = 'how are you?';
console.log(x2.length);
var x3 = "Awesome";
console.log(x3.length);
