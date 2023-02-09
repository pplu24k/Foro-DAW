import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hilo',
  templateUrl: './hilo.component.html',
  styleUrls: ['./hilo.component.css']
})
export class HiloComponent implements OnInit{


  @Input() nombre!:string;
  @Input() usuario!:string;
  @Input() creacion!:string;


  ngOnInit(): void {
    console.log(this.creacion.split('T'))

    let fragmentos = this.creacion.split('T')

    this.creacion = fragmentos[0] + ' ' + fragmentos[1].split('.')[0]
  }




}
