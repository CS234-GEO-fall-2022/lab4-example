import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Student } from '../shared/models/student-model';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  studentList: Student[];

  profileForm = this.fb.group({
    name: [''],
    surname: [''],
    id: [''],
    address: this.fb.group({
      street: [''],
      city: ['']
    }),
    languages: this.fb.array([
      this.fb.control('')
    ])
  });

  get languages() {
    return this.profileForm.get('languages') as FormArray;
  }

  addLanguage() {
    this.languages.push(this.fb.control(''));
  }
  
  constructor(private fb: FormBuilder) {
    this.studentList = [
      {name: "name1", surname: "surname1", id: "1234567890", languages: [], address: {city: "city", street: "street"}},
      {name: "name2", surname: "surname2", id: "1234567890", languages: [], address: {city: "city", street: "street"}},
      {name: "name3", surname: "surname3", id: "1234567890", languages: [], address: {city: "city", street: "street"}}
    ]
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("onSubmit");
    console.log(this.profileForm);
    console.log(this.profileForm.controls);
    
    let newStudent: Student = {
      name: this.profileForm.controls.name.value,
      surname: this.profileForm.controls.surname.value,
      id: this.profileForm.controls.id.value,
      address: {
        street: this.profileForm.controls.address.value.street,
        city: this.profileForm.controls.address.value.city
      },
      languages: this.profileForm.controls.languages.value,
    }

    this.studentList.push(newStudent);
  }
}
