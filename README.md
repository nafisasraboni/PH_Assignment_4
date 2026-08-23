# TypeScript Problem-Solving Assignment

This repository contains solutions to a TypeScript problem-solving assignment. The assignment focuses on functions, TypeScript types, arrays, union types, conditional logic, `reduce()`, and edge-case handling.

## 📌 Assignment Overview

The assignment consists of 5 TypeScript problems. Each problem is implemented in a separate file inside the `src` directory.

### General Rules Followed

* Function names are kept exactly as provided.
* Every problem is solved using a function.
* Every function returns a value.
* Appropriate TypeScript types are used for parameters and return values.
* `any` is not used.
* ES6 features such as `reduce()` and template literals are used.
* Test cases are considered for each problem.
* Edge cases such as empty arrays and invalid input are handled where required.

---

## 🧩 Problems

### Problem 01 — Battery Level Status

**File:** `src/p1.ts`

**Function:** `getBatteryStatus`

Returns a battery status based on the given battery percentage.

| Percentage | Status |
| ---------- | ------ |
| 0–20       | Low    |
| 21–50      | Medium |
| 51–90      | High   |
| 91–100     | Full   |

Invalid percentages below `0` or above `100` are also handled.

---

### Problem 02 — Table Booking Confirmation

**File:** `src/p2.ts`

**Function:** `formatBookingConfirmation`

Uses a typed `Booking` object containing:

* `name`
* `guests`
* `time`

The function returns a formatted booking confirmation message.

**Example:**

```text
Aisha's table for 4 guests is confirmed at 7:00 PM.
```

---

### Problem 03 — Weekly Expense Tracker

**File:** `src/p3.ts`

**Function:** `calculateWeeklyTotal`

Calculates the total of weekly expenses using the `reduce()` method.

**Example:**

```text
[200, 450, 100] → 750
```

An empty array returns `0`.

---

### Problem 04 — Traffic Light Action

**File:** `src/p4.ts`

**Function:** `getTrafficAction`

Uses a TypeScript union type:

```ts
type Light = "red" | "yellow" | "green";
```

Returns the appropriate action based on the traffic light.

| Light  | Action    |
| ------ | --------- |
| red    | Stop      |
| yellow | Slow Down |
| green  | Go        |

---

### Problem 05 — Quiz Score Summary

**File:** `src/p5.ts`

**Function:** `getQuizSummary`

Calculates the total and average of quiz scores and returns them as an object.

**Example:**

```ts
getQuizSummary([8, 9, 7, 10]);
```

Returns:

```ts
{
    total: 34,
    average: 8.5
}
```

For an empty array:

```ts
{
    total: 0,
    average: 0
}
```

---

## 🛠️ Technologies Used

* TypeScript
* JavaScript ES6
* TypeScript Functions
* Type Aliases
* Union Types
* Arrays
* `reduce()`
* Template Literals
* Conditional Statements

---

## 📂 Project Structure

```text
PH_Assignment_4/
│
├── src/
│   ├── p1.ts    # Battery Level Status
│   ├── p2.ts    # Table Booking Confirmation
│   ├── p3.ts    # Weekly Expense Tracker
│   ├── p4.ts    # Traffic Light Action
│   └── p5.ts    # Quiz Score Summary
│
├── .gitattributes
├── README.md
└── tsconfig.json
```

---

## 🎯 Learning Objectives

Through this assignment, I practiced:

* Defining function parameter and return types
* Creating and using TypeScript type aliases
* Working with typed arrays
* Using union types
* Applying conditional logic
* Using `reduce()` for calculations
* Returning typed objects from functions
* Handling edge cases
* Organizing TypeScript solutions into separate files

---

## 👩‍💻 Author

**Nafisa Tabassum Sraboni**

Full Stack Developer | TypeScript Learner

---

## 📄 Purpose

This project was created as part of a TypeScript problem-solving assignment for learning and practicing TypeScript fundamentals.

