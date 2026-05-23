# The Four Pillars of OOP in TypeScript — Simply Explained

## Introduction

Object-Oriented Programming (OOP) has four core ideas that help us write cleaner, more organized code. They sound fancy, but each one solves a simple, everyday problem. Let's go through them one by one with straightforward TypeScript examples.

---

## 1. Encapsulation — Keep Our Data Protected

**The idea:** Hide the internal data of a class. Only let the outside world interact with it through controlled methods.

**Why it helps:** If anyone can change our data directly, bugs become impossible to track. Encapsulation puts a fence around our data.

```typescript
class BankAccount {
  private balance: number = 0; // hidden from outside

  deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // 1000

// account.balance = 99999; ❌ Error — balance is private
```

Nobody can tamper with `balance` directly. The only way in is through `deposit()`.

---

## 2. Abstraction — Show Only What's Needed

**The idea:** Hide the complex details. Show only the simple interface that others need to use.

**Why it helps:** We don't need to know how a coffee machine works internally — we just press a button. Abstraction works the same way in code.

```typescript
abstract class Notification {
  abstract send(message: string): void; // each subclass decides how

  notify(message: string): void {
    console.log("Sending notification...");
    this.send(message); // the HOW is hidden inside subclasses
  }
}

class EmailNotification extends Notification {
  send(message: string): void {
    console.log(`Email: ${message}`);
  }
}

class SMSNotification extends Notification {
  send(message: string): void {
    console.log(`SMS: ${message}`);
  }
}
```

The caller just uses `notify()`. They don't need to care whether it's email or SMS.

---

## 3. Inheritance — Reuse Code Without Rewriting It

**The idea:** A child class can inherit the properties and methods of a parent class, then add its own on top.

**Why it helps:** Write shared logic once, reuse it everywhere. No copy-pasting.

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

class Cat extends Animal {
  purr(): void {
    console.log(`${this.name} says: Purr...`);
  }
}

const dog = new Dog("Rex");
dog.move(); // inherited from Animal → "Rex is moving."
dog.bark(); // Dog's own method → "Rex says: Woof!"
```

`move()` is written once in `Animal`. Both `Dog` and `Cat` get it for free.

---

## 4. Polymorphism — One Interface, Different Behaviors

**The idea:** Different classes can share the same method name, but each behaves differently when called.

**Why it helps:** We can write one piece of code that works for many types — no messy `if/else` chains.

```typescript
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(private radius: number) { super(); }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) { super(); }

  area(): number {
    return this.width * this.height;
  }
}

// Works for any shape — no if/else needed
function printArea(shape: Shape): void {
  console.log(`Area: ${shape.area().toFixed(2)}`);
}

printArea(new Circle(5));       // Area: 78.54
printArea(new Rectangle(4, 6)); // Area: 24.00
```

`printArea()` doesn't care what shape it receives. Each shape knows how to calculate its own area.

---

## Conclusion

Here's the short version of all four pillars:

| Pillar | One-line Summary |
|---|---|
| **Encapsulation** | Protect our data — hide what doesn't need to be seen |
| **Abstraction** | Hide complexity — show only what others need to use |
| **Inheritance** | Share code — child classes get parent logic for free |
| **Polymorphism** | Flexibility — same method name, different behavior per class |

Together, these four ideas keep our code organized, easy to change, and simple to understand — no matter how large the project gets.
