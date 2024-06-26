import { useState } from "react";
import { AddStudentDialog } from "../components/AddStudentDialog";
import { Student, useStudents } from "../hooks/useStudents";

export function StudentLists() {
  const { studentsList, addStudent, removeStudent } = useStudents();
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1>Student Lists</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Faculty of study</th>
            <th>Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {studentsList.map((student: Student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.faculty}</td>
              <td>{student.year}</td>
              <td>
                <button onClick={() => removeStudent(student.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddStudentDialog
        addStudent={addStudent}
        open={openDialog}
        onOpenChange={setOpenDialog}
      />
    </div>
  );
}
