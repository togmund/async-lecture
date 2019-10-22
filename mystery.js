const numbers = [14, 78, 100, 5, 13, 9, 673, 4567]

const mystery = (nums) => {
  for (const num of nums) {
    setTimeout(() => {
      console.log(num)
    }, num)
  }
}

mystery(numbers)