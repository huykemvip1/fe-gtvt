import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementDocumentsComponent } from './admin/management-documents/management-documents.component';
import { ManagementNewsComponent } from './admin/management-news/management-news.component';
import { ManagementUsersComponent } from './admin/management-users/management-users.component';
import { CourseComponent } from './common/course/course.component';
import { NewsDetailsComponent } from './common/news-details/news-details.component';
import { ProfileComponent } from './common/profile/profile.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './introduce/collections/collections.component';
import { CoursesComponent } from './introduce/courses/courses.component';
import { LecturersComponent } from './introduce/lecturers/lecturers.component';
import { LecturersManagementDocumentsComponent } from './lecturers/lecturers-management-documents/lecturers-management-documents.component';
import { LecturersManagementNewsComponent } from './lecturers/lecturers-management-news/lecturers-management-news.component';
import { ManagementStudentsComponent } from './lecturers/management-students/management-students.component';
import { ProfileLecturersComponent } from './lecturers/profile-lecturers/profile-lecturers.component';
import { ForumComponent } from './pages/forum/forum.component';
import { NewsComponent } from './pages/news/news.component';
import { ReportsComponent } from './reports/reports.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path: 'signup',component: SingupComponent},
  {path: 'signin',component: SinginComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'reports', component: ReportsComponent},
  // phần giới thiệu
  {path: 'introduce/lecturers',component: LecturersComponent},
  {path: 'introduce/courses',component: CoursesComponent},
  {path: 'introduce/collections',component: CollectionsComponent},
  // phần pages
  {path: 'pages/news',component:NewsComponent},
  {path: 'pages/news/:id',component:NewsDetailsComponent},
  {path: 'pages/forum',component: ForumComponent},
  //  Phần admin
  {path: 'admin/management-users', component: ManagementUsersComponent},
  {path: 'admin/management-news', component:ManagementNewsComponent},
  {path: 'admin/management-documents', component: ManagementDocumentsComponent},
  // Phần giảng viên
  {path: 'lecturers/profile/:id',component: ProfileLecturersComponent},
  {path: 'lecturers/management-news/:id',component: LecturersManagementNewsComponent},
  {path: 'lecturers/management-documents/:id',component: LecturersManagementDocumentsComponent},
  {path: 'lecturers/management-students/:id',component: ManagementStudentsComponent},
  // Phần gọi liên quan id
  {path: 'profile-details/:id',component: ProfileComponent},
  {path: 'course/:id',component:CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
