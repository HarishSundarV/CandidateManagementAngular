import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatecandidateComponent } from './createcandidate/createcandidate.component';
import { UserserviceService } from './userservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchdeleteComponent } from './searchdelete/searchdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatecandidateComponent,
    SearchdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
