import Subjects from "./Teacher";

namespace Subjects {
  export class Subject {
    private _teacher: Teacher | undefined;

    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }
  }
}

export default Subjects;

