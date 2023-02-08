import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../services/categorias/categorias.service';

@Component({
  selector: 'app-subforo-categorias',
  templateUrl: './subforo-categorias.component.html',
  styleUrls: ['./subforo-categorias.component.css']
})
export class SubforoCategoriasComponent implements OnInit{



  subforo: any
  categorias : any;
  estado: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriasService: CategoriasService
  ){


  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
    this.subforo = params.get('subforo') || null;

    this.categoriasService.getCategorias(this.subforo).subscribe(categorias => {

      this.categorias = categorias



    })

  });
  }

}
