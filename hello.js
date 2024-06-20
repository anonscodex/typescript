var message = "Hello TypeScript";
var year = 2024;
var clas = "level 2";
console.log(message + " in " + year + "i am " + clas);
var u = true;
u = "string";
console.log(u);
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
