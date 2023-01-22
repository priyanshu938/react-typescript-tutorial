function calculate(num1: number, num2: number) {
  return num1 + num2;
}
// console.log(calculate(1,2));

function getTotal(numbers: Array<number>) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// console.log(getTotal([1,2,3,4,5]));

// const user={
//     firstName:"John",
//     lastName:'Doe',
//     role:'Professor'
// }
// console.log(user.role)

/*ype alias*/
type User = {
  name: string;
  age: number;
  address?: string; // add ? to make any field optional
};

const user: User = {
  name: "sdfd",
  age: 2,
};

console.log(user.name);

function login(user: User): User {
  return user;
}

console.log(login(user));

/*custom types*/
type ID = number;
const a: ID = 5,
  b: ID = 123;

/*interfaces->these are the shape of the object*/
interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}
interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transaction: Transaction[];
}

const bankAccount: BankAccount = {
  accountNumber: 123,
  accountHolder: "John Doe",
  balance: 4000,
  isActive: true,
  transaction: [
    { payeeAccountNumber: 123, payerAccountNumber: 3454 },
    { payerAccountNumber: 123, payeeAccountNumber: 268 },
  ],
};

/*How to extend interfaces*/
interface Book {
  name: string;
  price: number;
}

interface Ebook extends Book {
  fileSize: number;
  format: string;
}

interface AudioBook extends Ebook {
  duration: number;
}

const book: AudioBook = {
  name: "1213",
  price: 323,
  fileSize: 113,
  format: "dwfd",
  duration: 2e4,
};

/*Merging of interfaces-> if two interfaces are of same name then they are merged automatically(this is not possible in type)*/
interface Car {
  name: string;
  price: number;
}

interface Car {
  color: string;
}

const car: Car = {
  name: "sdbfjs",
  price: 23214,
  color: "adbj",
};

/* interface b extends string{} -> this is not possible in interfaces*/
type a = string;

/*unions*/
type X = number | string;

function printX(id: X) {
  console.log(id);

  //Below type checking with typeof keyword is called Narrowing
  if (typeof id === "string") {
    console.log(id.toLowerCase());
  } else {
    console.log(id);
  }
}
printX("khjb"); // prints KHJB
printX(2); //prints 2

function getFirstThree(x: string | number[]) {
  return x.slice(0, 3);
}
console.log(getFirstThree("ABCDE")); //prints ABC
console.log(getFirstThree([1, 2, 3, 4, 5])); //prints [1,2,3]

/*Generics*/

//Example 1
function printY<T>(x: T): T {
  console.log(x);
  return x;
}
printY("ssc"); //prints ssc
printY([1, 2, 3]); //prints [1,2,3]
printY(true); //prints true

//Example 2
interface HasAge {
  age: number;
}
interface Player {
  name: string;
  age: number;
}

const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 50 }];

const players: Player[] = [
  { name: "A", age: 23 },
  { name: "B", age: 23 },
  { name: "C", age: 23 },
];

function getOldest<T extends HasAge>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0]; //sorts the array in desc order and then picks the 0th element
}

const person1 = getOldest(people);
console.log(person1.age); //prints oldest person age
const person2 = getOldest(players);
console.log(person2.name, person2.age); //prints oldest player name and age

//Example 3
interface IPost {
  title: string;
  id: number;
  description: string;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

const fetchDataGeneric = async <ResultType>(
  path: string
): Promise<ResultType> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};

(async () => {
  const users = await fetchDataGeneric<IUser[]>("/users");
  console.log(users[0].age);
  const posts = await fetchDataGeneric<IPost[]>("/posts");
  console.log(posts[0].description);
})();

/*Structural typing or duck typing*/
interface ICredential {
  username: string;
  password: string;
  isAdmin?: boolean;
}

function loginCredential(credentials: ICredential): boolean {
  console.log(credentials);
  return true;
}
const userDetails = {
  username: "priyanshu",
  password: "wfwffw",
  isAdmin: true,
};

loginCredential(userDetails); //we have not provided userDetails any type yet this function understands the type because of the argument passed,this is called Structural or Duck typing.

/*make a interface with a function*/
interface IAuth {
  username: string;
  password: string;
  login(username: string, password: string): boolean; // write return type here  else void
}

const auth: IAuth = {
  username: "priyanshu",
  password: "secret",
  login(username: string, password: string) {
    console.log(username, password);
    return true;
  }
};
