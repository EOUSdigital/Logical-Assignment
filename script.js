//TODO 📗 Module 5. Logic and Control Flow - Lesson 08.01: Logical Assignment


//TODO 📝 Step 1: Explore the Topic

//* 🎯 Definition:
//  Logical assignment operators in JavaScript combine logical operations (like ||, &&, and ??) with assignment (=). These shorthand operators allow you to conditionally assign values to variables in a more concise way.

//* 🟨 Three Key Operators:
//  1. ||= (Logical OR Assignment): Assigns the right-hand value only if the left-hand value is falsy (e.g., false, 0, '', null, undefined, NaN).
//  2. &&= (Logical AND Assignment): Assigns the right-hand value only if the left-hand value is truthy.
//  3. ??= (Nullish Coalescing Assignment): Assigns the right-hand value only if the left-hand value is null or undefined.

//* 🟨 Syntax:

let a;
let b;

a ||= b;                    //  a = a || b
a &&= b;                    //  a = a && b
a ?? b;                     //  a = a ?? b

//* 🟨 Significance:
//  • Reduces verbosity in conditional assignments.
//  • Makes code cleaner and more readable.
//  • Useful in setting default values or guarding against reassignments.

//* 🟨 Where It is Used:
//  • Initializing configuration options with defaults.
//  • Avoiding reassignment of already set values.
//  • Assigning fallback values only when necessary.

//* 🟨 Limitations:
//  • Can lead to unexpected behavior if you misunderstand what qualifies as "falsy" or "nullish".
//  • Should be used only when you are sure the side effects are acceptable.


//TODO 📝 Step 2: Real-World Examples

//  These examples illustrate how ||=, &&=, and ??= can simplify everyday coding patterns.


//? ⏹️ Scenario 1: User Settings with Defaults (||=)
//  We are building a customizable theme for a website. If a user has not specified a theme, we want to use a default:

let userTheme = '';                                     // User hasn't set a theme
userTheme ||= 'light';                                  // Assigns 'light' because '' is falsy
console.log(userTheme);                                 // Output: 'light'

//! Real-world analogy: Like assigning a default pizza topping if the customer does not choose one.


//? ⏹️ Scenario 2: Only Assign If Condition Is True (&&=)
//  We have a flag that should only be updated if it is already true:

let isConnected = true;
let newStatus = false;

// Only update isConnected if it is currently true
isConnected &&= newStatus;
console.log(isConnected);                               // Output: false

//! Use case: Logging a user out only if they are currently logged in.


//? ⏹️ Scenario 3: Avoid Overwriting Set Values (??=)
//  We are working with user preferences stored in a config object. We want to apply a default only if the value is not provided at all:

let options = {
    fontSize: null,
    fontFamily: undefined,
    color: 'blue'
};

options.fontSize ??= 16;
options.fontFamily ??= 'Arial';
options.color ??= 'black';

console.log(options);

//  Output: { fontSize: 16, fontFamily: 'Arial', color: 'blue' };

//! Key Point: ??= skips assignment if the property already has a non-null/undefined value—even if it's falsy like 0 or ''.


//? ⏹️ Scenario 4: Progressive Enhancement (||=)
//  In a progressive web app, we might only apply enhancements if they have not been initialized:

let config = '';
let defaultAnimation = '';

let animationConfig = config.customAnimation;
//  Apply default if none defined
animationConfig ||= defaultAnimation;


//TODO 📝 Step 3: Quiz Questions

//? 🧪 Multiple Choice (Choose the best answer unless stated otherwise)

//* 1. Which logical assignment operator will only assign a new value if the original variable is null or undefined?
//  A. ||=
//  B. &&=
//  C. ??=
//  D. !==

//! Answer: C

//* 2. What will be the value of theme after the code below runs?

let theme = '';
theme ||= 'dark';

//  A. 'dark'
//  B. ''
//  C. undefined
//  D. null

//! Answer: A

//* 3. Consider this code:

let isLoggedIn = false;
isLoggedIn &&= false;

//  What will isLoggedIn be after execution?
//  A. true
//  B. false
//  C. undefined
//  D. null

//! Answer: B

//* 4. Which value types will trigger assignment with the ||= operator?
//  A. Only undefined
//  B. null and undefined
//  C. All falsy values
//  D. All values

//! Answer: C

//* 5. Fill in the blank:
//  The logical assignment x ??= y will only assign y to x if x is ______.
//  A. 0 or ''
//  B. null or undefined
//  C. false
//  D. not NaN

//! Answer: B

//* 6. What does the following code output?

let config2 = { max: 0 };
config2.max ||= 10;
console.log(config2.max);

//  A. 10
//  B. 0
//  C. undefined
//  D. null

//! Answer: A

//* 7. Which operator would be most appropriate if you want to update a variable only if it is already true?
//  A. ??=
//  B. ||=
//  C. &&=
//  D. !==

//! Answer: B

//* 8. True or False:
//  The ??= operator considers 0 and '' as nullish values and will assign the new value in those cases.

//! Answer: False

//* 9. What will be the final output?

let language;
language ??= 'JavaScript';
console.log(language);

//  A. 'undefined'
//  B. 'JavaScript'
//  C. null
//  D. false

//! Answer: B

//* Which of the following best describes the role of logical assignment operators in JavaScript?
//  A. They perform complex mathematical operations.
//  B. They shorten conditional assignments based on logical evaluation.
//  C. They compare data types.
//  D. They initialize variables automatically.

//! Answer: B










