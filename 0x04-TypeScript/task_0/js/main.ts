// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Get the table body to append rows
const tableBody = document.querySelector("#studentTable tbody");

// Iterate through the students and append rows to the table
studentsList.forEach((student) => {
  const row = tableBody.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

