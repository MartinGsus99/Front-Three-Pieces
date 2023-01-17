class Student{
    fullName:string;
    constructor(public firstName:string,public middleInitial:string,public lastName:string){
        this.fullName=firstName+" "+middleInitial+" "+lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function greeter(person: Person) {
    return "Hello," + person.firstName + " " + person.lastName;
};

function greeterStudent(student:Student){
    return "Hello," +student.fullName;
}

let user = {
    firstName: "Martin",
    lastName: "Wang",
    age: 16,
};

let student=new Student("Martin","M.","Wang");


document.getElementById("content").innerHTML = greeter(user);
console.log(greeterStudent(student));