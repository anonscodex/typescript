let message : string = "Hello TypeScript";
let year : number = 2024;
let clas : string = "level 2"

console.log(message + " in " + year + "i am " + clas)

let u : any = true;
u = "string";
console.log(u) 

let myCollection : [number, string, number, boolean];
myCollection = [5,"hello",4, true]
console.log(myCollection)

enum Schools {
    BUK,
    ABU,
    NSUK,
    UI
}

let PresentSchool = Schools.NSUK
console.log("The value of the school is " + PresentSchool)

enum Anime {
    Jujutsu_Kaisen = 1,
    HunterXHunter,
    Ninja_Kamui,
    Chainsaw

}
let favAnime = Anime.HunterXHunter
console.log ("The value of this anime is " + favAnime )