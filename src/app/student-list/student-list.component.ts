import { Component, OnInit } from '@angular/core';
import { Student, STUDENTS } from './student';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Routes, Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];

  // constructor() {
  //   this.students = STUDENTS;
  // }
  myForm: FormGroup;
  name: AbstractControl;
  sex: AbstractControl;
  web: AbstractControl;
  embeded: AbstractControl;
  public value: string;
  insertStu: any[];

  constructor(fb: FormBuilder, private router: Router) {
    this.students = STUDENTS;
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'sex': ['', Validators.required],
      'web': ['', Validators.required],
      'embeded': ['', Validators.required]
    });
    this.name = this.myForm.controls['name'];
    this.sex = this.myForm.controls['sex'];
    this.web = this.myForm.controls['web'];
    this.embeded = this.myForm.controls['embeded'];
  }

  insertValue() {

  }

  ngOnInit() {
  }

}
