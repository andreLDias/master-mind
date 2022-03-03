const answers = { 
  black: 'black', 
  white: 'white', 
  none: 'none'
}
const colors = {
  pink: 'pink', 
  red: 'red', 
  blue: 'blue', 
  yellow: 'yellow', 
  orange: 'orange', 
  green: 'green'
}

const secretPassword = [colors.pink, colors.red, colors.orange, colors.green]

const attempt1 = [colors.red, colors.pink, colors.orange, colors.blue]
const attempt2 = [colors.pink, colors.red, colors.orange, colors.green]
const attempt3 = [colors.blue, colors.blue, colors.blue, colors.blue]

const checkIfCorrect = (attempt) => {
  const compareResult = attempt.map((item, i) => {
    const index = secretPassword.indexOf(item)

    if (index === i) return answers.black
    if (index >= 0) return answers.white
  
    return answers.none
  })
  
  return compareResult
}

console.log(checkIfCorrect(attempt1))
console.log(checkIfCorrect(attempt2))
console.log(checkIfCorrect(attempt3))
