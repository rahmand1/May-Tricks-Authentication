import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DemopofileComponent } from './demopofile/demopofile.component';
import { RegisterComponent } from './register/register.component';


// Services
import { DataService } from './service/data.service';
import { AuthService } from './service/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DemopofileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
