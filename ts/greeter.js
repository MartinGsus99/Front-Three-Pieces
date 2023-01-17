var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
;
function greeterStudent(student) {
    return "Hello," + student.fullName;
}
var user = {
    firstName: "Martin",
    lastName: "Wang",
    age: 16
};
var student = new Student("Martin", "M.", "Wang");
document.getElementById("content").innerHTML = greeter(user);
console.log(greeterStudent(student));
