class student {
    #grades;
    constructor(name, id, grades = []) {
        this.name = name;
        this.id = id;
        this.#grades = grades;


    }

    addGrade(grade) {
        if (typeof grade === "number" && grade >= 0 && grade <= 100) {
            this.#grades.push(grade)
        }
        else {
            console.log(`Invalid grade. Please input a number between 0 and 100`)
        }

    }



    getDetails() {
        return `Student Name: ${this.name} , Student ID: ${this.id} Student grade: ${this.#grades}`

    }


    calculateAverage() {
        let totalGrades = 0;
        for (let i = 0; i < this.grades.length; i++) {
            totalGrades += this.grades[i];
        }


        return totalGrades / this.grades.length;


    }


    get grades() {
        return [...this.#grades];
    }
};



class studentManagement {

    constructor() {
        this.studentList = [];
    }
    addStudent(name, id, grades ) {
        const existingStudent = this.studentList.find(student => student.id === id);
        if (existingStudent) {
            console.log(`Error: Student with this id already exists!`);

            return;
        }
        const newStudent = new student(name, id, grades)
        this.studentList.push(newStudent);
        console.log(`This student ${name} with ID: ${id} has been added`)
    }

    viewStudent() {
        return this.studentList.map(student => student.getDetails()).join("\n");

    }

    findStudentById() {


    }
}

 const newStudentManagement = new studentManagement
console.log (newStudentManagement.addStudent(`prudence`, `stu/001`, [12,37,73,87]))
console.log (newStudentManagement.addStudent(`courage`, `stu/002`, [12,45,84,24]))

console.log(newStudentManagement.viewStudent())

const student001 = new student
console.log(student001.calculateAverage())