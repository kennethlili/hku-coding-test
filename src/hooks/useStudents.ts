import { useState } from "react";

export type Student = {
    id: string;
    name: string;
    email: string;
    faculty: Faculty;
    year: number;
}

export enum Faculty {
    Engineering = "Engineering",
    Science = "Science",
    Arts = "Arts",
    Business = "Business",
    Medicine = "Medicine",
    Law = "Law",
    SocialSciences = "Social Sciences",
    Education = "Education",
    Architecture = "Architecture",
    Music = "Music"
}

export function useStudents() {
    const [studentsList, setStudentsList] = useState<Student[]>([{
        id: "1",
        name: "John Doe",
        email: "johnDoe@gmail.com",
        faculty: Faculty.Engineering,
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