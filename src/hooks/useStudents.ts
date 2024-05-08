import { useState } from "react";

export type Student = {
    id: string;
    name: string;
    email: string;
    faculty: string;
    year: number;
}

export function useStudents() {
    const [studentsList, setStudentsList] = useState<Student[]>([{
        id: "1",
        name: "John Doe",
        email: "johnDoe@gmail.com",
        faculty: "Engineering",
        year: 2024
    }]);

    function addStudent(student: Student) {
        setStudentsList([...studentsList, student]);
    }

    function removeStudent(id: string) {
        setStudentsList(studentsList.filter((student) => student.id !== id));
    }

    return {
        studentsList,addStudent,removeStudent
    }

}