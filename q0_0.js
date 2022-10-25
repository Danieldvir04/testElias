function Person(firstName, lastName) {
  this.FirstName = firstName;
  this.LastName = lastName;
}

Person.prototype.getFullName = function () {
  return this.FirstName + " " + this.LastName;
};
function Student(firstName, lastName, schoolName, grade) {
  Person.call(this, firstName, lastName);

  this.SchoolName = schoolName;
  this.Grade = grade;
}
////////////////////////////////////////////////////////////////
Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("muhamad", "ali", "shalom", 12);
