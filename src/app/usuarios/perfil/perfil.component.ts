import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilService } from '../../services/usuarios/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {



  usuario: any


  constructor(
    private activatedRoute: ActivatedRoute,
    private perfilService: PerfilService

  ){


  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {


    this.perfilService.getPerfil(this.usuario = params.get('nick') as string).subscribe((data) => {

      console.log(data)

      this.usuario = data
    })

  });
  }

  submit($event: any) {

    $event.preventDefault()

    try {
      const archivoCapturado = $event.target.avatar.files[0]
      console.log($event.target.avatar.files[0])
      //this.perfilService.establecerAvatar()

      const formularioImagen = new FormData()

      formularioImagen.append('file',archivoCapturado)

      this.perfilService.establecerAvatar(formularioImagen).subscribe((data) => {
        console.log(data)
      })
    } catch (error) {
      console.log(error)
    }

  }

}
