import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HilosService } from 'src/app/services/hilos/hilos.service';

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.component.html',
  styleUrls: ['./categoria-page.component.css']
})
export class CategoriaPageComponent implements OnInit {

  subforo: any
  categoria: any

  categoriaDatos:any
  hilos:any

  constructor(
    private activatedRoute: ActivatedRoute,
    private hilosService: HilosService
  ){


  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
    this.subforo = params.get('subforo') || null;
    this.categoria = params.get('categoria') || null;
  });

  this.hilosService.getHilos(this.subforo,this.categoria).subscribe((datos:any) => {


    console.log(datos)
    this.hilos = datos.hilos;
    this.categoriaDatos = datos.categoria;


  })

  }






}
