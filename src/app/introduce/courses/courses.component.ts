import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private router : Router){}
  courseDetails(id : string){
    this.router.navigate(['/course',id],{replaceUrl: true})
  }
}
