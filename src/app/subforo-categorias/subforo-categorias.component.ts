import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subforo-categorias',
  templateUrl: './subforo-categorias.component.html',
  styleUrls: ['./subforo-categorias.component.css']
})
export class SubforoCategoriasComponent implements OnInit{



  subforo: any

  constructor(
    private activatedRoute: ActivatedRoute
  ){


  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
    this.subforo = params.get('subforo') || null;

  });
  }

}
