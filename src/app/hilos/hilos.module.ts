import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiloComponent } from './hilo/hilo.component';
import { HiloPageComponent } from './hilo-page/hilo-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HiloComponent,
    HiloPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HiloComponent
  ]
})
export class HilosModule { }
