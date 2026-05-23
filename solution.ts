
// problem 1

function filterEvenNumbers(arr: number[]) : number[]{
    return arr.filter(num => num % 2 === 0);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(arr);

// console.log(evenNumbers);


// problem 2

function reverseString (str: string): string{
    return str.split('').reverse().join('');
}
const inputString = 'Hello';
const reversedString = reverseString(inputString);
// console.log(reversedString);


// problem 3

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
    if (typeof input === 'number'){
        return 'Number';
    }
    else if (typeof input === 'string'){
        return 'String';
    }
}

// console.log(checkType('Hello'));
// console.log(checkType('42')); 


// problem 4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = {
    name: "John",
    age: 25
};

// console.log(getProperty(person, "name"));
// console.log(getProperty(person, "age")); 



// problem 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus (book: Book): Book & { isRead: boolean}{
        return {
            ...book,
            isRead: true
        }
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
const updatedBook = toggleReadStatus(myBook);
// console.log(updatedBook);

// problem 6

class Person {
    name: string;
    age: number;

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }

}

class Students extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }

    getDetails(){
        console.log(`name: ${this.name}, age: ${this.age}, grade: ${this.grade}`);
    }
}

const student1 = new Students("Alice", 20, "A");

// student1.getDetails(); 


// problem 7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return [...new Set(arr1.filter(value => arr2.includes(value)))];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const intersection = getIntersection(array1, array2);
// console.log(intersection);



