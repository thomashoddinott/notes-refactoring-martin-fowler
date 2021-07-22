function discount(inputValue, quantity) {
  let result = inputValue
  if (inputValue > 50) { result -= 2 }
  if (quantity > 100) { result -= 1 }
  return result
}

module.exports = discount