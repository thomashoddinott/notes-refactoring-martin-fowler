do a `npm install` to run the tests with Jest - `npm test`

https://memberservices.informit.com/my_account/index.aspx - access to the web edition

## Playing around with `git diff`

`git diff 43d0aa58e1fe0394a82e4911cd64a751a74bb299 4c31f1d6efcd6440e7c600e1629dd263586b2b25` - diff of 2 commits

```diff
 function doSomeMath(a, b) {
-    const c = a + b
-    console.log(`sum ${a} + ${b} = ${c}`)
+    const c = a * b
+    console.log(`product ${a} x ${b} = ${c}`)
 }
 doSomeMath(2, 3)
```

`git diff` - diff of current state and last commit

```diff
 function doSomeMath(a, b) {
-    const c = a * b
-    console.log(`product ${a} x ${b} = ${c}`)
+    const c = a / b
+    console.log(`quotient ${a} / ${b} = ${c}`)
 }
 doSomeMath(2, 3)
```

**^ could use this to work through the examples**

## Foreword & Preface

Refactoring is not a once-a-year ritual.

> The more you dig, the more stuff you turn up...and the more changes you make. Eventually you dig yourself into a hole you can't get out of. To avoid digging your own grave, refactoring must be done systematically. 

> He [Kent Beck] did several things differently, but one of the most important changes was to insist on continuous cleaning up of the code using refactoring.

What is Refactoring?

> Refactoring is the process of changing a software system in a way that does not alter the external behaviour of the code yet improves its internal structure. It is a disciplined way to clean up code that minimises the chances of introducing bugs. In essence, when you refactor, **you are improving the design of the code after it has been written.**

## Chapter 1: Refactoring: A First Example

*$ node statement-original.js*

```
Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
```

