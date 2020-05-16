// JavaScript File
// let statements
let age;
let day;
let tuesday;
let wednesday;
let thursday;
//function that determines the discount eligibility of a person based on day and age
function discount() {
  //age and day assigned to whatever value is entered and tuesday, wednesday, thursday assigned to the option of those specific days
  age = document.getElementById("ageinput").value;
  day = document.getElementById("dayinput").value;
  tuesday = document.getElementById("tuesday").value;
  wednesday = document.getElementById("wednesday").value;
  thursday = document.getElementById("thursday").value;
  // if the inputted age is less than 5 or above 95 then the user gets an alert saying they can go for free
  if (age < 5 || age > 95) {
    alert("You can go for free!");
  }
  // if the inputted age is between 13 and 20 AND the day is either tuesday, wednesday or thursday, then the user gets an alert saying they get a discount
  else if ((age > 12 && age < 21) && (day == tuesday || day == wednesday || day == thursday)) {
     alert("You get the student discount!");
  }
    // otherwise, the user gets an alert saying that they must pay the normal price
  else {
    alert("You have to pay the normal price.");
  }
}
// event listener that causes the discount function to activate when the check button is pressed
document.getElementById("btn").addEventListener("click", discount);