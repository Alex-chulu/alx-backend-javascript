import Subjects, { Teacher, Cpp, Java, React } from "./subjects";

// Create and export constants for subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create a teacher object with experienceTeachingC
const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// For Cpp subject
console.log("Cpp:");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log("\nJava:");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("\nReact:");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

