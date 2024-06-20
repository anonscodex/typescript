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
