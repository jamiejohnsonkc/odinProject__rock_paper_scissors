let test = 1

console.log(test)

function foo() {
  test += 1
  return test
}

foo()
foo()
foo()

test += 1

console.log(foo())

test += 1

i = 0
while (i < 10) {
  test++
  i++
}

console.log(test)
