const age = parseInt( prompt("how old are you?") ); //assigning a value

if ( isNaN(age) || age < 0 ) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("you are too young");
} else if (age >= 18 && age <= 50) {  // && and operator || or operator
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise");
} else if (age === 100) { // check for equality !== not
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("you can do whatever you want");
}

//else if로 끝나도 상관없음 else로 꼭 끝나야 하는 것은 아님

if ((a && b) || (c && d) || (x || w)) {
//will be executed
}

//clicks, events, interacting with users (listen)