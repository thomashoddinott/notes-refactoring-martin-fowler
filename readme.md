To run the tests yourself do an `npm install`, then run `npm test` with the Jest framework.

`npm test -- --watch` to run tests on save. Leave it running in a terminal. This is handy when refactoring (compile-test-commit).  

https://memberservices.informit.com/my_account/index.aspx - access to the web edition. 

##### Other handy resources I found: 

- https://github.com/wickedwukong/martin-fowler-refactoring-2nd — coded examples
- https://github.com/korkorna/refactoring-2nd — coded examples
- https://gist.github.com/cs-cordero/3799f26699bdecdb286fd719f08122af — concise explanations of the refactorings

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

## Chapter 2: Principles in Refactoring

**Refactoring** (noun): a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behaviour.

Refactoring is all about applying small behaviour-preserving steps and making a big change b stringing together a sequence of these behaviour-preserving steps.

**The two hats**: adding functionality, and refactoring. As we develop software, we find ourselves swapping hats frequently.

### Why Refactor?

- Improves the design of software - Hastily written, poorly designed code will get out the door fast, but its functionality will not scale with time.

- Makes software easier to understand

- Finds bugs - "I'm not a great programmer; I'm just a good programmer with great habits." 

- Write programs faster - as a consequence of the above!

### When Refactor? 

**The Rule of Three** - The first time, you just do it. The second time you do something similar, you wince at the duplication, but duplicate anyway. The third time, you refactor.

**Preparatory Refactoring** - Making it easier to add a feature. 

**Comprehension Refactoring** - Making code easier to understand. 

Often the best way to understand an unfamiliar piece of code you've been tasked on working on (assuming it needs refactoring!).

**Litter-Pickup Refactoring** - You understand what the code is doing but realise it's doing it badly.

**Planned and Opportunistic Refactoring** 

"I don't set aside time at the beginning to spend on refactoring--instead, I do refactoring as part of adding a feature of fixing a bug. It's part of my natural flow of programming."

**Long-Term Refactoring**

"... Even in such cases [where the refactoring will take weeks], I'm reluctant to have a team do dedicated refactoring. Often, a useful strategy is to agree to gradually work on the problem over the course of the next few weeks. **Whenever anyone goes near any code that's in the refactoring zone, they move it a little way in the direction they want to improve.** This takes advantage of the fact that refactoring doesn't break the code--each small change leaves everything in a still-working state."

**Refactoring in a Code Review**

Pair programming works well when refactoring someone's code. The author can provide content on the code and fully appreciate the reviewers' intentions for their changes. 

**What Do I Tell My Manager?**

Good managers appreciate and encourage refactoring. If yours doesn't, don't tell! - Refactoring is your duty as a professional software developer. 

**When Should I Not Refactor?**

1. Some ugly code that works but you never need to modify. Treat it as an API.
2. When it's actually easier to rewrite the code! Takes experience to learn how to judge this.

### Problems with Refactoring

**Slowing Down New Features**

It very likely will at the start, but "we refactor because it makes us faster [in the long run]--faster to add features, faster to fix bugs". 

Communicate the **economic benefits** of refactoring to managers and customers. 

**Code Ownership**

A preference for team code ownership. Programmers may still have individual responsibility of a system. 

Some teams encourage an open-source-like model where people from other teams can change a branch of their code and send the commit in to be approved (Pull Request). 

**Branches**

(The Continuous Integration vs Feature Branches debate) - see https://www.martinfowler.com/articles/continuousIntegration.html

My 2 cents: I think it's a good idea, but as a junior programmer, or as someone learning a new codebase, I wouldn't feel so comfortable doing it. Wait until you're experienced and familiar with the code (and its standards) that you're working on?

**Testing**

Can't start without 'em. 

**Legacy Code**

A great opportunity in refactoring to turn legacy code into a polished gem :gem:. A common dragon :dragon: is a lack of tests! 

**Databases**

You can now. The essence of the technique is to combine the structural changes to a database's schema and access code with data migration scripts that ca easily *compose* to handle large changes.

### Refactoring, Architecture, and Yagni

"Adopting yagni (you aren't going to need it) doesn't mean I neglect all upfront architectural thinking. There are still cases where refactoring changes are difficult and some preparatory thinking can save time. But the balance has shifted a long way--I'm much more inclined to deal with issues later when I understand them better. All this has led to a growing discipline of evolutionary architecture where architects explore the patterns and practices that take advantage of our ability to iterate over architectural decisions."

https://www.oreilly.com/library/view/building-evolutionary-architectures/9781491986356/

### Refactoring and the Wider Software Development Process

In reality most agile projects only use the name. To really operate in an agile way, a team has to be capable and enthusiastic refactorers.

In a team, Continuous Integration is encouraged. Allows each member's refactoring efforts to be shared quickly with colleagues and no one builds on interfaces that are being removed. 

These three work nicely together: **self-testing code, continuous integration, refactoring**

## Chapter 3: Bad Smells in Code

(see full list of code smells in the book)

## Chapter 4: Building Tests

Use a testing library with a 'watch' mode. This runs tests on parts of the code based that change on save, so you can tab back and forth from your code to passing/failing tests. 

e.g. Run `npm test -- --watch` in a terminal with your IDE/editor in another window and tab back and forth on each refactoring (commit/save).

### code: [ch4](./ch4)

### Notes

Even without refactoring, writing good tests increases my effectiveness as a programmer. This was a surprise for me and is counterintuitive for most programmers—so it's worth explaining why.

Programmers spend only a fraction of their time writing code. Some time is spent figuring out what ought to be going on, some time is spent designing, **but most time is spent debugging**.

Fixing the bug is usually pretty quick, but finding it is a nightmare.

Your code should be [self-testing](https://martinfowler.com/bliki/SelfTestingCode.html):

> You have self-testing code when you can run a series of automated  tests against the code base and be confident that, should the tests  pass, your code is free of any substantial defects. One way I think  of it is that as well as building your software system, you  simultaneously build a bug detector that's able to detect any faults  inside the system. Should anyone in the team accidentally introduce  a bug, the detector goes off. By running the test suite frequently,  at least several times a day, you're able to detect such bugs soon  after they are introduced, so you can just look in the recent  changes, which makes it *much* easier to find them. No  programming episode is complete without working code and the tests  to keep it working. Our attitude is to assume that any non-trivial  code without tests is broken.

**A suite of tests is a powerful bug detector that decapitates the time it takes to find bugs.** 

We can also use TDD: First, write a (failing) test. Then write the code to make that test work. And then refactor to ensure the result is as clean as possible.

**What tests to write?**

The style I follow is to look at all the things the class should do and test each one of them for any conditions that might cause the class to fail. This is not the same as testing every public method, which is what some programmers advocate. Testing should be risk-driven; remember, I'm trying to find bugs, now or in the future. Therefore I don't need test accessors that just read and write a field: They are so simple that I'm not likely to find a bug there.

It's better to write and run incomplete tests than not to run complete tests.

**Fixtures**

Don't share global fixtures. It's asking for trouble (data mutation, interacting tests, ... ).

```js
describe('province', () => {
	const asia = new Province(sampleProvinceData()) // no!
    test('shortfall', () => {
        expect(asia.shortfall).toBe(5);
    });
    test('profit', () => {
        expect(asia.profit).toBe(230);
    });
 	// ...
});
```

Use `beforeEach` instead:

```js
describe('province', () => {
    let asia;
    beforeEach(() => { 
        asia = new Province(sampleProvinceData())
    })
    test('shortfall', () => {
        expect(asia.shortfall).toBe(5);
    });
    test('profit', () => {
        expect(asia.profit).toBe(230);
    });
 	// ...
});
```

---

A common pattern is to take the initial standard fixture that's **set up** by the `beforeEach` black, **exercise** that fixture for the test, and **verify** the fixture has done what I think it should have done. 

This is described variously as: *setup-exercise-verify*, *given-when-then*, or *arrange-act-assert*.

Implicit in this pattern is the final step: **teardown**, which removes the fixture between tests so that different tests don't interact with each other.

^ Yes, I've seen this more explicitly in tests which target a DB :floppy_disk:. 

**Think of the boundary conditions under which things might go wrong and concentrate your tests there.**

Notice how I'm playing the part of enemy to my code. I'm actively thinking about how I can break it. :smiling_imp:

If I'm writing tests like this [tests which throw *runtime* errors - see page 98 for example] I would probably discard this test. **Refactoring should preserve the observable behaviour**; an error like this is outside the bounds of observable, so I need not be concerned if my refactoring changes the code's response to this condition. 

**When to stop?**

Don't let the fear that testing can't catch all bugs stop you from writing tests that catch most bugs.

There's a law of diminishing returns in testing. Concentrate on where the risk is.

Your tests will not find every bug, but as you refactor, you will understand the program better and thus find more bugs. Although I always start refactoring with a *test suite*, I invariably add to it as I go along.

**Final thoughts**

Testing is now increasingly a first-class concern of any decent software developer. Architectures often are, rightly, judged on their testability.

We've written unit tests, but there are [many other types](https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing).

Like most of programming, testing is iterative. Unless you're very talented, or very lucky, you won't get your tests write first time.

**When you get a bug report, start by writing a unit test that exposes the bug.**

**The best measure for a good enough test suite is subjective.** How confident are you that if someone introduces a defect into the code, some test will fail? If I can refactor my code and be pretty sure that I've not introduced a bug because my tests *come back green*—then I can be happy that I have **good enough** tests.

It is possible to write too many tests. One sign of that is when I spend more time changing the tests than the code under test—and I feel the tests are slowing me down. 

Over-testing does happen, but it's rare compared to under-testing.

## Chapter 11: Refactoring APIs

**Modules and their functions are the building blocks of our software. APIs are the joints that we use to plug them together.** Making these APIs easy to understand and use is important but also difficult: I need to refactor them as I learn how to improve them.

















