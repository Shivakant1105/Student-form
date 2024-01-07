import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  studentForm: FormGroup;

  
  constructor(private fb: FormBuilder, private studentService: StudentService) {


    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      previousSchool: ['', Validators.required],
      previousClass: ['', Validators.required],
      previousClassName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      parentMobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      email: ['', [Validators.required, 
        // Validators.email
      ]],
      previousGrades: ['', Validators.required],
      favoriteSubject: ['', Validators.required],
    });
  }
  
  alphaOnly(event: KeyboardEvent): boolean {
    const input = event.key;
    const pattern = /^[a-zA-Z]+$/;

    if (!pattern.test(input) && input !== 'Backspace') {
      event.preventDefault();
      return false;
    }
    return true;
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      console.log('Form data submitted:', this.studentForm.value);

      this.studentService.addStudent(this.studentForm.value);
      this.studentForm.reset();

    }
  }
}
