import Subjects from "./Subject";

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingReact !== undefined) {
        return `Available Teacher: ${this._teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}

export default Subjects;

