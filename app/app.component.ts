// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export clastitles AppComponent {
//   title = 'Candidate Enrollment';
// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService,GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project';
  signinForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;  
  
  constructor(private fb: FormBuilder, private authService: AuthService, private http:HttpClient, private router: Router) { }  
  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }  
  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(
      (response)=>{
        this.http.get("https://oauth2.googleapis.com/tokeninfo?id_token=" + response.idToken)
        .subscribe((oAuthResponse)=>{
          if (oAuthResponse['hd'] && oAuthResponse['hd']=="accoliteindia.com")
          {
            this.loggedIn=true;
            localStorage.setItem('token',response.idToken);
            //this.router.navigateByUrl('/dashboard');
          }
          else{
            this.loggedIn=false;
            alert("Please use Accolite Mail ID");
          }
        })
      }
    )
  }
  signOut(): void {
    this.authService.signOut();
    this.loggedIn=false;
    //this.router.navigate(['']);
  }
 
}