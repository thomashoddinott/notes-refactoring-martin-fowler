do a `npm install` to run the tests with Jest - `npm test` 

`npm test -- --watch` to run tests on save. Leave it running in a terminal. This is handy for refactoring (compile-test-commit).  

https://memberservices.informit.com/my_account/index.aspx - access to the web edition

## Foreword & Preface

Refactoring is not a once-a-year ritual.

> The more you dig, the more stuff you turn up...and the more changes you make. Eventually you dig yourself into a hole you can't get out of. To avoid digging your own grave, refactoring must be done systematically. 

> He [Kent Beck] did several things differently, but one of the most important changes was to insist on continuous cleaning up of the code using refactoring.

What is Refactoring?

> Refactoring is the process of changing a software system in a way that does not alter the external behaviour of the code yet improves its internal structure. It is a disciplined way to clean up code that minimises the chances of introducing bugs. In essence, when you refactor, **you are improving the design of the code after it has been written.**

## Chapter 1: Refactoring: A First Example

### worked example: [ch1](./ch1) 

### notes

Add structure first (functions, classes) to help understand the code. Then make changes. This is positive feedback loop: add some structure ==> gain more understanding ==> transfer that understanding from your head to the code by adding some more structure ==> gain more understanding ==> ...

The true test of good code is how easy it is to change it.

More lines of code to set better structure is absolutely worth it.

With that said, if the code works and never needs to change. i.e. no one will **ever** read it again, it's fine to leave it alone!

The first step of refactoring: **tests** 

[./ch1/tests/statement.test.js](./ch1/tests/statement.test.js)

Naming is important and tricky. Don't dwell on it for too long. If your naming is awkward you can always change it on the next pass.

Baby steps - e.g. see commit log for [./ch1/statement.js](https://github.com/thomashoddinott/notes-refactoring-martin-fowler/commits/master/ch1/statement.js) and [./ch1/createStatementData.js](https://github.com/thomashoddinott/notes-refactoring-martin-fowler/commits/master/ch1/createStatementData.js).

Don't worry about performance. If your refactoring introduces slow-downs, finish refactoring and then optimise the slow part of code.

Always leave the code base healthier than when you found it. It will never be perfect, but it should be better. 

Read the code, gain some insight, and use refactoring to move that insight from your head back into the code.







