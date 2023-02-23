import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {
  @Input() contenido:any;
  @Input() usuario!:string;
  @Input() creacion!:string;


  ngOnInit(): void {


    let fragmentos = this.creacion.split('T')

    this.creacion = fragmentos[0] + ' ' + fragmentos[1].split('.')[0]



  }
}
