import { ChangeEvent, useState } from "react";
import { Faculty, Student } from "../hooks/useStudents";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

// we could use react-hook-form for better control of validation, but since the time is limited, we will ignore it first

export function AddStudentDialog({
  addStudent,
}: {
  addStudent: (student: Student) => void;
}) {
  const [student, setStudent] = useState<Student>({} as Student);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudent({
      ...student,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Add More Student</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Student</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              value={student.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              className="col-span-3"
              value={student.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Faculty of study
            </Label>
            <select
              name="faculty"
              value={student.faculty}
              onChange={handleSelectChange}
            >
              {Object.values(Faculty).map((faculty) => (
                <option key={faculty} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Years
            </Label>
            <Input
              id="year"
              className="col-span-3"
              value={student.year}
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <button type="button" onClick={() => addStudent(student)}>
            Submit
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
