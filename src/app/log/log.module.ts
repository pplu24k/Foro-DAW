import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { LogUpComponent } from './log-up/log-up.component';



@NgModule({
  declarations: [
    LogInComponent,
    LogUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LogModule { }
