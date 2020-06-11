import { Component, OnInit,NgZone} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService,GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InterceptorService } from './interceptor.service';
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
  
  constructor(private fb: FormBuilder, private authService: AuthService, private http:HttpClient, private router: Router,private service:InterceptorService,private ngZone:NgZone) { }  
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
            const str=response.idToken;
               const str1=str.substring(0,10);
               console.log(str1);
            localStorage.setItem('token',str1);
            //this.router.navigateByUrl('/dashboard');
          }
          else{
            this.loggedIn=false;
            alert("Please use Accolite Mail ID");
          }
        })
      }
    )
    let resp=this.service.checkUser();
         
      resp.subscribe(result => this.ngZone.run(() =>{
        
        let x=JSON.stringify(result);
        console.log("App component ts");
        console.log(x);
         if(x === "Login sucessfull and User is Authenticated")
         {
          //this.router.navigateByUrl("/opportunity");
          this.loggedIn=true;
        }
        else
         {
          //this.router.navigateByUrl("/login");    
          this.loggedIn=false;
         }
     
   },(error) => {
     alert(JSON.stringify(error, undefined, 2));
    }));
  }



  signOut(): void {
    this.authService.signOut();
    this.loggedIn=false;
  }
 
}