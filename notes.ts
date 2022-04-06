// TYPESCRIPT NOTES

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// printName takes name as string, returns void. Void returns undefined.
// never is also an option, does not return anything.
let printName: (name: string) => void;

// Alias. One is type, other is interface.
// type
// type Person = {
//   name:string;
//   age?:number;
// }

// let person: Person = {
//   name: 'Ernest',
// }

// let people: Person[];

interface Person {
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession: string;
}

type X = {
  a: string;
  b: number;
}

// // Y can contain both contents of X and Y.\
// // type can be extended.
// type Y = X & {
//   c: string;
//   d: number;
// }
