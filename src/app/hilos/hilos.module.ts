import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiloComponent } from './hilo/hilo.component';
import { HiloPageComponent } from './hilo-page/hilo-page.component';
import { RouterModule } from '@angular/router';
import { ComentarioComponent } from './comentario/comentario.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { RedactarComponent } from './redactar/redactar.component';



@NgModule({
  declarations: [
    HiloComponent,
    HiloPageComponent,
    ComentarioComponent,
    RespuestaComponent,
    RedactarComponent
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
