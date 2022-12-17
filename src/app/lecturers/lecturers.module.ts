import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { LecturersComponent } from './lecturers.component';

import { ManagementStudentsComponent } from './management-students/management-students.component';
import { ProfileLecturersComponent } from './profile-lecturers/profile-lecturers.component';
import { LecturersManagementNewsComponent } from './lecturers-management-news/lecturers-management-news.component';
import { LecturersManagementDocumentsComponent } from './lecturers-management-documents/lecturers-management-documents.component';




@NgModule({
  declarations: [
    LecturersComponent,
    ManagementStudentsComponent,
    ProfileLecturersComponent,
    LecturersManagementNewsComponent,
    LecturersManagementDocumentsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class LecturersModule { }
