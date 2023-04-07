import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    { _id: '1', name: 'angular', category: 'font-end' },
    { _id: '2', name: 'angular version 2', category: 'type script' },
  ];
  displayedColumns = ['id','name', 'category'];

  constructor() {
    // this.courses = [];
  }

  ngOnInit(): void {}
}
