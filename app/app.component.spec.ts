import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService,GoogleLoginProvider, SocialUser,AuthServiceConfig } from 'angularx-social-login'
import { HttpClientModule } from '@angular/common/http';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1028764483066-rpemqp7qhhboe38u8rmgo3u9mkntl92g.apps.googleusercontent.com")
  },
 
]);
export function provideConfig() {
  return config;
}
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,FormsModule, ReactiveFormsModule,HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: AuthServiceConfig,
          useFactory: provideConfig
        },
        AuthService
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Project');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('Project app is running!');
  // });
});
