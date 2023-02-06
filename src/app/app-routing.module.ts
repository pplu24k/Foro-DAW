import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log/log-in/log-in.component';
import { LogUpComponent } from './log/log-up/log-up.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth/login', component: LogInComponent},
  {path: 'auth/logup', component: LogUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
