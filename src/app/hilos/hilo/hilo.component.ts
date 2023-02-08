import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hilo',
  templateUrl: './hilo.component.html',
  styleUrls: ['./hilo.component.css']
})
export class HiloComponent {

  @Input() nombre!:string;

}
