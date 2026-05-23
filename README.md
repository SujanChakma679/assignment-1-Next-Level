# Assignment 1 - TypeScript Basics

This repository contains the solution for Assignment 1 of the Next Level TypeScript course. It includes TypeScript problem solutions and two short blog posts explaining important TypeScript and object-oriented programming concepts.

## Repository Contents

| File | Description |
| --- | --- |
| `solution.ts` | Contains solutions for the TypeScript coding problems. |
| `blog-1.md` | Blog post about why `any` is unsafe and why `unknown` is a safer alternative. |
| `blog-2.md` | Blog post explaining the four pillars of OOP in TypeScript. |
| `README.md` | Project overview and usage instructions. |

## Problems Covered

The `solution.ts` file includes solutions for the following problems:

1. Filter even numbers from an array.
2. Reverse a string.
3. Check whether a value is a string or a number.
4. Get a property value from an object using TypeScript generics.
5. Add read status to a book object.
6. Create `Person` and `Students` classes using inheritance.
7. Find the intersection of two number arrays.

## Blog Topics

### Blog 1: `any` vs `unknown`

This blog explains why `any` can break TypeScript's type safety and how `unknown` helps developers handle uncertain data more safely. It also covers type narrowing using `typeof`, `instanceof`, the `in` operator, and custom type guards.

### Blog 2: Four Pillars of OOP

This blog explains the four core principles of object-oriented programming with TypeScript examples:

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

## How to Run the TypeScript File

If TypeScript is installed globally, compile the file with:

```bash
tsc solution.ts
```

Then run the generated JavaScript file with:

```bash
node solution.js
```

You can also run it directly with `ts-node`:

```bash
ts-node solution.ts
```

Note: Most `console.log` statements in `solution.ts` are commented out. Uncomment the lines you want to test before running the file.

## Technologies Used

- TypeScript
- Markdown

## Author

Prepared as part of the Next Level TypeScript Assignment 1.
