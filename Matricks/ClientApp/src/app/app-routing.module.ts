import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemopofileComponent } from './demopofile/demopofile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: DemopofileComponent

  },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
