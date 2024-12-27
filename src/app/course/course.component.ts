import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './dataCourses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {


  courses: Array<Course> =[];
  getCourseList(): Array<Course> {
    return dataCourses;
  }
  constructor(){}


  ngOnInit(): void {
    this.courses = this.getCourseList();
  }

}
