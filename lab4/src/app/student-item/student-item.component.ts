import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../shared/models/student-model';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {
  @Input() student: Student;

  constructor() { }

  ngOnInit(): void {
  }

}
