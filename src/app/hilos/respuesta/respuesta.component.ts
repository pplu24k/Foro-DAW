import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit{


  @Input() datos:any

  ngOnInit(): void {
    if(this.datos){
      console.log(this.datos)
      console.log(this.datos.usuario)
    }
  }

}
