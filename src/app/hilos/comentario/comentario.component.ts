import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {
  @Input() contenido:any;
  @Input() usuario!:string;
  @Input() creacion!:string;
  @Output() abirRespuesta = new EventEmitter<string>();






  ngOnInit(): void {


    let fragmentos = this.creacion.split('T')

    this.creacion = fragmentos[0] + ' ' + fragmentos[1].split('.')[0]

    console.log(this.contenido)

  }

  emitirAccion(){

    console.log("EEE")

    this.abirRespuesta.emit("ABRIR")


  }
}
