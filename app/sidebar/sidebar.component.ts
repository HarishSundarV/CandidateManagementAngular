import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.authService.signOut();
   // this.loggedIn=false;
    //this.router.navigate(['']);
  }

}
