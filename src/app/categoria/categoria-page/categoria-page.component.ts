import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.component.html',
  styleUrls: ['./categoria-page.component.css']
})
export class CategoriaPageComponent implements OnInit {

  subforo: any
  categoria: any

  constructor(
    private activatedRoute: ActivatedRoute
  ){


  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
    this.subforo = params.get('subforo') || null;
    this.categoria = params.get('categoria') || null;
  });
  }






}
