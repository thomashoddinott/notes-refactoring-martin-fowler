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

## Chapter 1: Refactoring: A First Example

