import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { LogUpComponent } from './log-up/log-up.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LogInComponent,
    LogUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LogModule { }
