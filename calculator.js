function calculation() {

  //get the values from the prompt and store the in two vars
  let number1 = Number(prompt("Enter the number 1:"))
  let number2 = Number(prompt("Enter the number 2:"))

  //do the operations and store the results in vars(you need 4 vars)
  let sum = number1 + number2
  let substraction = number1 - number2
  let multiplication = number1 * number2
  let divison = number1 / number2

  //display the result in the html
  document.getElementById("sum").innerHTML = `${number1} + ${number2} = ${sum}`
  document.getElementById("substraction").innerHTML = `${number1} - ${number2} = ${Math.round(substraction)}`
  document.getElementById("multiplication").innerHTML = `${number1} * ${number2} = ${multiplication}`
  document.getElementById("division").innerHTML = `${number1} / ${number2} = ${divison.toFixed(2)}`

  document.getElementById('calculators').style.display = 'flex';
}
