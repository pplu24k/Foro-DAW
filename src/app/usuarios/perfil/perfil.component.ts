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

}
