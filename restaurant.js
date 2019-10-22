/*
Making a restaurant simulator

- a menu with options
- press a number to select an option (fries)
  - that item will start being processed
- will be able to select multiple options
- when an item is complete, it will be presented to us (console.log)
- press 'p' to save a receipt
*/

const fs = require('fs');

const menu = {
  a: {
    name: 'Electric Mouse Shake',
    time: 2000
  },
  b: {
    name: 'Captain United States Burger',
    time: 4000
  },
  c: {
    name: 'Night Monkey Fries',
    time: 3000
  },
}

const order = []

const printMenu = () => {
  for (const key in menu) {
    console.log(`${key} - ${menu[key].name}`)
  }
  console.log('Press p to save your order receipt.')
}


const stdin = process.stdin
stdin.setRawMode(true)
stdin.setEncoding('utf8')

// stdin <--- this object has SOME WAY to listen for key presses

// there might be a function
// we might need a timer

stdin.on('data', (data) => {

  if (data === '\u0003') {
    process.exit()
  }

  // console.log(data, menu[data])
  
  if (menu[data]) {
    // console.log('we have that item')
    order.push(menu[data].name)
    
    setTimeout(() => {
      console.log(`DING! Your ${menu[data].name} is ready!`)
    }, menu[data].time)
  } 

  if (data === 'p') {
    console.log('... printing receipt!')
    console.log(order) // we have this array of strings

    // const orderString = ...
    
    // take a look at the writeFileSync, think about HOW that would change your code... and also what are the benefits of using that instead?
    // clear the previous file
    fs.writeFile('receipt.txt', order, function (err) {
      if (err) throw err;
      console.log('Saved!');
    }); 
  }

})

console.log('Welcome to Copyright Strike Shack')
printMenu()