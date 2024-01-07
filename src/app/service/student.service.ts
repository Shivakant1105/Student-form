import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  getStudents(): Observable<Student[]> {
    const storedStudents = localStorage.getItem('students');
    this.students = storedStudents ? JSON.parse(storedStudents) : [];
    return of(this.students);
  }
}