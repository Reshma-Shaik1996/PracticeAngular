import { IStudent } from "./Istudent";

class Student implements IStudent{
    studentId: string;

    showData():void{
        console.log(`Student Id: ${this.studentId}`)
    }
}