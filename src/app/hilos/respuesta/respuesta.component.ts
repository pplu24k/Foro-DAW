import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit{


  @Input() datos:any
  creacion !: string

  ngOnInit(): void {/*
    if(this.datos){
      console.log(this.datos)
      console.log(this.datos.usuario)

    }*/

    let fragmentos = this.datos.respuesta.created_at.split('T')

    this.creacion = fragmentos[0] + ' ' + fragmentos[1].split('.')[0]

    console.log(this.creacion)
  }

}
