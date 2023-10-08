import Subjects from "./Subject";

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingC !== undefined) {
        return `Available Teacher: ${this._teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}

export default Subjects;

