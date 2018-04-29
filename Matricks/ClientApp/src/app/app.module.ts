// adding the forums module
import { FormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DemopofileComponent } from './demopofile/demopofile.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';


// Services
import { DataService } from './service/data.service';
import { AuthService } from './service/auth.service';

import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DemopofileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:50758']
      }
    })

  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
