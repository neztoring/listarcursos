import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {


  courses: Array<Course> =[];
  constructor(){}


  ngOnInit(): void {
    
  }

}
