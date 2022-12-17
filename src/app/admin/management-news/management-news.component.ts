import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewsComponent } from 'src/app/common/create-news/create-news.component';

@Component({
  selector: 'app-management-news',
  templateUrl: './management-news.component.html',
  styleUrls: ['./management-news.component.css']
})
export class ManagementNewsComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private dialog : MatDialog){}
  addNews(){
    this.dialog.open(CreateNewsComponent)
  }
}
