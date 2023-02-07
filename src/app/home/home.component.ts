import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SubforosService } from '../services/subforos/subforos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  subforos: any;


  constructor(
    private subforoService: SubforosService
  ){

  }

  ngOnInit(){


    this.getSubforos()

  }

  getSubforos(){

    this.subforoService.getSubforos()
      .subscribe((datos:any) => {
        this.subforos = datos
        console.log(datos)

    })


  }


}
