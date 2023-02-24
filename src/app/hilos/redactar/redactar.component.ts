import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-redactar',
  templateUrl: './redactar.component.html',
  styleUrls: ['./redactar.component.css']
})
export class RedactarComponent {

  @Output() cerrar = new EventEmitter<string>();




  cerrarVentana(){

    console.log("EEE")

    this.cerrar.emit("Cerrar")


  }
}
