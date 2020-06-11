import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatecandidateComponent } from './createcandidate/createcandidate.component';
import { UserserviceService } from './userservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchdeleteComponent } from './searchdelete/searchdelete.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { TrendsComponent } from './trends/trends.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SidebarComponent } from './sidebar/sidebar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ViewComponent } from './view/view.component';
import { InterceptorService } from './interceptor.service';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1028764483066-rpemqp7qhhboe38u8rmgo3u9mkntl92g.apps.googleusercontent.com")
  },
 
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    CreatecandidateComponent,
    SearchdeleteComponent,
    HomeComponentComponent,
    TrendsComponent,
    SidebarComponent,
    ViewComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NgxChartsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },UserserviceService,
{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },
  ],
  // providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
