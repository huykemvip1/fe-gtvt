import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  statusTogglePage = true;
  statusToggleIntroduction = true;
  statusToggleProfile = true;
  @ViewChild('toggleNavPage') toggleNavPage:ElementRef | undefined;
  @ViewChild('toggleNavIntroDuction') toggleNavIntroDuction:ElementRef | undefined;
  @ViewChild('toggleNavProfile') toggleNavProfile:ElementRef | undefined;
  ngOnInit(): void {
    
    
  }
  constructor(){}
  showPage(){
    if (this.statusTogglePage === true) {
      this.toggleNavPage?.nativeElement.classList.add('show')
      this.statusTogglePage = false
    }else{
      this.toggleNavPage?.nativeElement.classList.remove('show')
      this.statusTogglePage = true
    }
  }
  showIntroduction(){
    if (this.statusToggleIntroduction === true) {
      this.toggleNavIntroDuction?.nativeElement.classList.add('show')
      this.statusToggleIntroduction = false
    }else{
      this.toggleNavIntroDuction?.nativeElement.classList.remove('show')
      this.statusToggleIntroduction = true
    }
  }
  showProfile(){
    if (this.statusToggleProfile === true) {
      this.toggleNavProfile?.nativeElement.classList.add('show')
      this.statusToggleProfile = false
    }else{
      this.toggleNavProfile?.nativeElement.classList.remove('show')
      this.statusToggleProfile = true
    }
  }
  setStatusToggle(){
    this.statusTogglePage = true;
    this.statusToggleIntroduction = true;
    this.statusToggleProfile = true
  }
}
