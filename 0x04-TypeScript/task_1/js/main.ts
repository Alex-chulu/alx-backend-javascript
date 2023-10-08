class Teacher {
  private _firstName: string;
  private _lastName: string;
  private _fullTimeEmployee: boolean;
  private _yearsOfExperience?: number;
  private _location: string;
  private _attributes: { [key: string]: any } = {};

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullTimeEmployee = fullTimeEmployee;
    this._location = location;
  }

  setAttribute(key: string, value: any) {
    this._attributes[key] = value;
  }

  getAttribute(key: string) {
    return this._attributes[key];
  }

  toString() {
    const obj: { [key: string]: any } = {
      firstName: this._firstName,
      lastName: this._lastName,
      fullTimeEmployee: this._fullTimeEmployee,
      location: this._location,
      ...this._attributes,
    };
    return JSON.stringify(obj, null, 2);
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
  }
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
  }

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

