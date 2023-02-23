import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  registrarse(datos:any){

    return this.httpClient.post('http://localhost:8000/api/auth/register',{

      "nombre": datos.nombre,
      "email": datos.email,
      "nick": datos.nick,
      "password": datos.pass1,
      "password_confirmation": datos.pass2

    })

  }
}
