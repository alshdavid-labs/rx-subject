# rx-subject
My custom implementation of this useful utility

Usage:

```
let testSub = new Subject()

let one = testSub.subscribe(x => console.log("Sub 1 -", x))
let two = testSub.subscribe(x => console.log("Sub 2 -", x))
let three = testSub.subscribe(x => console.log("Sub 3 -", x))

two.unsubscribe()
one.unsubscribe()

testSub.next("output 1") 
testSub.next("output 2")
```

Output:
```
Sub 3 - output 1
Sub 3 - output 2
```
