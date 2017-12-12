

console.log("This file is linked!");
// File Link test
alert("Welcome to the FFXV Teacher Page!")
// JS Testing

//Ignis

var teacherName = "Ignis Scientia";
var department = "Culinary Arts";
var rating = [5.0, 5.0, 4.9];

console.log("Teacher: " + teacherName);
console.log("Department: " +  department);
console.log("Ratings: " + rating);


var getRatingAvg = function(){
        var sum = 0;
        for(var i = 0; i < rating.length; i++){
         sum += rating[i];

       }
     return sum;
   }

console.log("Average Rating:" + getRatingAvg());


function addTeacherRating (rating, newRating) {
  rating.push(newRating);
  return rating;
}

var newRating = prompt("We would like for you to review our teacher. Please enter a rating between 0.0 and 5.0?");
  if (newRating >=0 && <=5 ) {
    addTeacherRating;
    alert("Thanks for your review! " + teacherName + "'s average rating is now " + (getRatingAvg()) + ".");
  } else {
    prompt("We would like for you to review our teacher. Please enter a rating between 0.0 and 5.0?");
  }



     // divide ratings by 3 to find the average

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
