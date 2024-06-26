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

function totalNumber() : number {
    return 2
}

console.log(totalNumber())

function greetMe() : void {
    console.log("Hello Anons")
}

function multiply (a: number, b:number) {
    return a*b
}

console.log(multiply(2,3))

function add (a:number, b:number, c?:number) {
    return a + b + (c || 0)
}

console.log(add(3,3))
console.log(add(3,3,4))
 

function power (a: number, b: number = 3) {
    return a**b
}

console.log(power(2))

function divide({dividend, divisor}: {dividend: number, divisor: number}) {
return dividend/divisor
}

console.log(divide({dividend:10, divisor:2}))

function addition(a: number, b:number, ...rest: number[]) {
    return a + b + rest.reduce((y , z) => y + z , 0 )
}

console.log(addition(1,2,3,4,5,6,7,8,9))

type negation = (value:number) => number ;
const negationFunc: negation = (value) => value * -1
console.log(negationFunc(2000))

let x1: unknown = 'hello'
console.log((x1 as string).length)

let x2 : unknown = 'how are you?'
console.log((<string>x2).length)

let x3 = "Awesome"
console.log(((x3 as unknown) as string).length)

//class Person {
//    names:string;
//}

//const person = new Person();
//person.names = "Anons"

//console.log(person)

class Person1 {
    private name:string;
    public constructor (name : string) {
        this.name = name
    }

    public getName() : string {
        return this.name
    }
}

const person1 = new Person1("Anonymous");
console.log(person1.getName())


function createPair <S, T> (v1: S, v2: T): [S,T] {
    return [v1, v2]
}
console.log(createPair<string, number>('hello', 42))

class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString());

interface Persons {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(persons: Persons, property: keyof Persons) {
  console.log(`Printing person property ${property}: "${persons[property]}"`);
}
let persons = {
  name: "Max",
  age: 27
};
printPersonProperty(persons, "name"); 

interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  if (yardSize === undefined) {
    console.log('No yard');
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500
  
};

printYardSize(home); // Prints 'No yard'