import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  entrar(datos:any){

    return this.httpClient.post('http://localhost:8000/api/auth/login',{

      "email": datos.email,
      "password": datos.pass,


    })

  }
}
