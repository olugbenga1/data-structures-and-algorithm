// I have access to students from data.js

/* Write a function to add role: "student" property 
to each object using map method, assign to 
"updatedStudents" variable and log */

const updatedStudents = students.map(function (student) {
  student.role = "student";
  //   console.log(student);
  return student;
});

// console.log(updatedStudents);

/* Write a function that filters array 
and returns only scores >= 80 */

const highScores = students.filter(function (student) {
  //   if (student.score >= 80) {
  //     return student;
  //   }
  return student.score >= 80;
});

// console.log(highScores);

/* Find specific id in array, assign to 
"specificId" variable and log */

const specificId = students.find(function (student) {
  return student.id === 3;
});

// console.log(specificId);

/* sum up all student.score values with reduce, 
divide by the length of the students array,
assign to "averageScore" and log */

const averageScore = students.reduce(function (scoreTotal, student) {
  scoreTotal += student.score;
  return scoreTotal / students.length;
}, 0);

// console.log(averageScore);

/* list favorite subjects with reduce
{
    english: 1,
    history: 1,
    math: 3
}
assign to survey and log
*/

// Let us look at this concept of adding values to objects dynamically before this next challenge

const subject = "math";
const total = {};

total[subject] = "some value";
// console.log(total); // Here the value of subject will change wrt changes in the value of variable subject.

const survey = students.reduce(function (survey, student) {
  //   console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }

  return survey;
}, {});

// console.log(survey);

console.dir(document);
