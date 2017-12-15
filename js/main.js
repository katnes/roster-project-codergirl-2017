

console.log("This file is linked!");
// File Link test
alert("Welcome to the FFXV Teacher Page!")
// JS Testing

//Ignis

var teacherName = "Ignis Scientia";
var department = "Culinary Arts";
var rating = [5.0, 5.0, 4.9];

console.log("Teacher: " + teacherName);
console.log("Department: " + department);
console.log("Ratings: " + rating);


var getRatingAvg = function() {
  var sum = 0;
  for (var i = 0; i < rating.length; i++) {
   // will add them all together
    sum += rating[i];

 }
  // need to divide

 return sum / rating.length;
}

var addTeacherRating = function(ratingToAddToArray) {
  var newRatingInt = parseInt(ratingToAddToArray, 10);
  // because we return rating.push(newRatingInt);
  // you can think of this as doing
  // var foo = rating.push(newRatingInt);
  // return foo;
  return rating.push(newRatingInt);
}

//well written code- the function tranforms the prompt into an intr before the input is entered

console.log("Average Rating:" + getRatingAvg());

var newRating = prompt("We would like for you to review our teacher. Please enter a rating between 0.0 and 5.0?");
if (newRating >= 0 && newRating <= 5) {
    // add newRating to the rating array

  addTeacherRating(newRating);

  // alert the user of the new average
  alert("Thanks for your review! " + teacherName + "'s average rating is now " + (getRatingAvg()) + ".");
  } else {
    prompt("We would like for you to review our teacher. Please enter a rating between 0.0 and 5.0?");
  }

//parseInt changes a string to an integer


//Glady
/*
var teacherName = "Gladiolus Amicitia";
var department = "Physical Education";
var rating = ["3.5", "4.9", "5.0"];

console.log("Teacher: " + teacherName);
console.log("Department: " + department);
console.log("Ratings: " + rating);

var avg = (2.3+1.2+.5) / (3);
var aveRating = Math.round(avg * 100) / 100;
console.log("Avg Rating: " + aveRating);

console.log("This file is linked!");
var teacherName = "Ardyn Izunia";
var department = "Psychology";
var rating = ["3.5", "4.9", "5.0"];

console.log("Teacher: " + teacherName);
console.log("Department: " + department);
console.log("Ratings: " + rating);

var avg = (2.3+1.2+.5) / (3);
var aveRating = Math.round(avg * 100) / 100;
console.log("Avg Rating: " + aveRating);

console.log("This file is linked!");
var teacherName = " Gentiana ";
var department = "Psychology";
var rating = ["5", "4.9", "5.0"];

console.log("Teacher: " + teacherName);
console.log("Department: " + department);
console.log("Ratings: " + rating);

var avg = (2.3+1.2+.5) / (3);
var aveRating = Math.round(avg * 100) / 100;
console.log("Avg Rating: " + aveRating);
*/
