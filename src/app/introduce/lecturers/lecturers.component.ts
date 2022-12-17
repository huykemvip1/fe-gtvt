import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private router : Router){}
  userDetails(id : string){
    this.router.navigate(['/profile',id],{replaceUrl: true})
  }
}
