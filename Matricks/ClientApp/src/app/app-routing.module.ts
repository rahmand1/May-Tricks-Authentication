import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemopofileComponent } from './demopofile/demopofile.component';
import { RegisterComponent } from './register/register.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { MessagesComponent } from './messages/messages.component';
import { FollowingComponent } from './following/following.component';

const routes: Routes = [
  {
    path: '',
    component: DemopofileComponent

  },
  { path: 'register', component: RegisterComponent },
  { path: 'viewdetails', component: ViewprofileComponent },
  {
    path: 'messsages', component: MessagesComponent
  }, {    path : 'following', component: FollowingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
