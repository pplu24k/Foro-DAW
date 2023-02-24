import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HiloContentService } from 'src/app/services/hilos/hilo-content.service';

@Component({
  selector: 'app-hilo-page',
  templateUrl: './hilo-page.component.html',
  styleUrls: ['./hilo-page.component.css']
})
export class HiloPageComponent implements OnInit {

  subforo: any
  categoria: any
  idHilo: any

  redactar:boolean = false;
  responder:boolean = false;

  datosHilo:any
  contenido:any[] = []

  constructor(
    private hiloContentService: HiloContentService,
    private activatedRoute: ActivatedRoute
  ){


  }
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      this.subforo = params.get('subforo')
      this.categoria = params.get('categoria')
      this.idHilo = params.get('hilo')


    })

    this.hiloContentService.getHilo(this.subforo,this.categoria,this.idHilo).subscribe((data:any) => {



      this.datosHilo = data.hilo

      this.contenido = Array.of(...data.contenido)

    })


  }

  mostrarRedactor(){

    this.redactar = true;

  }

  mostrarResponder(mensaje: any){

    console.log(mensaje)
    this.responder = true;
  }

  cerrarRedaccion(mensaje:string){


    this.redactar = false;
    this.responder = false;
  }


}
