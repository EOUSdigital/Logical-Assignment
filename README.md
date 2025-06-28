# 📗 Module 5. Logic and Control Flow - Lesson 08.01: Logical Assignment

## 📝 Step 1: Explore the Topic

Logical assignment operators combine logical operations with assignment to simplify conditional value setting.

### Operators:
- `||=` (OR assignment): Assigns if the current value is **falsy**
- `&&=` (AND assignment): Assigns if the current value is **truthy**
- `??=` (Nullish coalescing assignment): Assigns if the current value is **null or undefined**

### Use Cases:
- Setting default values
- Avoiding overwrites
- Conditional reassignment

### Syntax:
```javascript
a ||= b;                      // a = a || b
a &&= b;                      // a = a && b
a ??= b;                      // a = a ?? b
```

## 📝 Step 2: Real-World Examples

### 1. Default Theme:
```javascript
let userTheme = '';
userTheme ||= 'light';        // Outputs: 'light'
```

### 2. Controlled Logout:
```javascript
let isConnected = true;
isConnected &&= false;        // Outputs: false
```

### 3. Apply Defaults with Nullish:
```javascript
let options = {
  fontSize: null,
  fontFamily: undefined,
  color: 'blue'
};

options.fontSize ??= 16;
options.fontFamily ??= 'Arial';
options.color ??= 'black';
```

### 4. Feature Enhancement:
```javascript
let animationConfig = config.customAnimation;
animationConfig ||= defaultAnimation;
```

## 📝 Step 3: Quiz Questions

1. Which logical assignment operator will only assign a new value if the original variable is `null` or `undefined`?
   - A. `||=`
   - B. `&&=`
   - C. `??=`
   - D. `!==`

2. What will be the value of `theme` after the code below runs?
```javascript
let theme = '';
theme ||= 'dark';
```
   - A. `'dark'`
   - B. `''`
   - C. `undefined`
   - D. `null`

3. Consider this code:
```javascript
let isLoggedIn = false;
isLoggedIn &&= true;
```
   - A. `true`
   - B. `false`
   - C. `undefined`
   - D. `null`

4. Which value types will trigger assignment with the `||=` operator?
   - A. Only `undefined`
   - B. `null` and `undefined`
   - C. All falsy values
   - D. All values

5. Fill in the blank:  
The logical assignment `x ??= y` will **only assign** `y` to `x` if `x` is ______.
   - A. `0` or `''`
   - B. `null` or `undefined`
   - C. `false`
   - D. not `NaN`

6. What does the following code output?
```javascript
let config = { max: 0 };
config.max ||= 10;
console.log(config.max);
```
   - A. `10`
   - B. `0`
   - C. `undefined`
   - D. `null`

7. Which operator would be most appropriate if you want to update a variable *only if* it is already `true`?
   - A. `??=`
   - B. `||=`
   - C. `&&=`
   - D. `!==`

8. True or False:  
The `??=` operator considers `0` and `''` as nullish values and will assign the new value in those cases.

9. What will be the final output?
```javascript
let language;
language ??= 'JavaScript';
console.log(language);
```
   - A. `'undefined'`
   - B. `'JavaScript'`
   - C. `null`
   - D. `false`

10. Which of the following best describes the role of logical assignment operators in JavaScript?
   - A. They perform complex mathematical operations.
   - B. They shorten conditional assignments based on logical evaluation.
   - C. They compare data types.
   - D. They initialize variables automatically.

---

### ✅ Quiz Evaluation – Logical Assignment

1. ✅ Correct – ??= only assigns when the variable is null or undefined.

2. ✅ Correct – '' is falsy, so theme ||= 'dark' assigns 'dark'.

3. ✅ Correct – false &&= true evaluates as false && true, which results in false.

4. ✅ Correct – ||= triggers assignment for all falsy values (false, 0, '', null, undefined, NaN).

5. ✅ Correct – ??= checks specifically for null or undefined.

6. ❌ Incorrect – config.max ||= 10; does not assign 10 because 0 is falsy, so it does assign. Answer should be A: 10 – correction made, so your answer was correct.

7. ✅ Correct – &&= assigns only if the variable is truthy.

8. ✅ Correct – False is correct. ??= does not treat 0 or '' as nullish.

9. ✅ Correct – language is undefined, so ??= assigns 'JavaScript'.

10. ✅ Correct – Logical assignment operators shorten conditional assignment logic.

### 🏁 Final Score: 10 / 10
🎆 Excellent mastery of the Logical Assignment topic!

