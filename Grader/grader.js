// Welcome to the Student Grade Calculator!
// This program prompts the user to input student marks
// and then outputs the corresponding grade.

// Prompt the user for input
const input = prompt("Enter student's mark (between 0 and 100):");

// Convert the input to a number
const mark = parseFloat(input);

// Check if the input is valid
if (!isNaN(mark) && mark >= 0 && mark <= 100) {
  let grade;

  // Determine the grade based on the mark
  if (mark > 79) {
    grade = "A";
  } else if (mark >= 60) {
    grade = "B";
  } else if (mark >= 50) {
    grade = "C";
  } else if (mark >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Output the result
  console.log(`The student's grade is: ${grade}`);
} else {
  console.log("Invalid input. Mark must be between 0 and 100.");
}
