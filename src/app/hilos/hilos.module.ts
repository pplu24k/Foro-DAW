import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiloComponent } from './hilo/hilo.component';



@NgModule({
  declarations: [
    HiloComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HiloComponent
  ]
})
export class HilosModule { }
