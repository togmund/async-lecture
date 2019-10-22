const adlib = () => {
  console.log("It's YA BOI")
}

// // Wait two seconds
// for (let i = 0; i < 2343943756; i++) {
//   // nothing
// }

const someFunc = () => {
  console.log('hello!')
}

// this is where we can use a callback
setTimeout(adlib, 2000) // set a timer, to go off after 2 seconds

someFunc()
console.log('WOOOO!') // immediately, so before the previous line