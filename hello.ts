let message : string = "Hello TypeScript";
let year : number = 2024;
let clas : string = "level 2"

console.log(message + " in " + year + "i am " + clas)

let u : any = true;
u = "string";
console.log(u) 

const names : string[] = []
names.push("Anons")
console.log(names)

const films: readonly string[] = []
//this is readonly you cant add to it

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

enum StatusCodes {
    NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes.NotFound)
console.log(StatusCodes.Accepted)

type CarYear = number
type CarType = string
type CarModel = string 

type Car = {
    year : CarYear
    type : CarType
    model : CarModel
}

const CarYear: CarYear = 2001
const CarType: CarType ="Toyota"
const CarModel: CarModel = "Corolla"

const car : Car = {
    year: CarYear,
    type : CarType,
    model: CarModel
}

console.log(car)

interface Rectangle {
    height: number,
    width: number
}

const rectangle : Rectangle = {
    height: 30,
    width: 20
}

console.log(rectangle)

interface Person {
    country: string,
    age: number
}

interface ColoredPerson extends Person {
    color: string
}

const coloredPerson : ColoredPerson = {
    country: "Nigeria",
    age: 20,
    color: "black"
}

console.log(coloredPerson)

function printMyResult (result : string|number) {
    console.log(`Your result is ${result}`)
}

printMyResult(90)
printMyResult("A")