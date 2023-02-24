import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private httpClient: HttpClient
  ) {
  }




  getPerfil(nick:string){

    return this.httpClient.get('http://127.0.0.1:8000/api/perfil/'+nick);

  }

  establecerAvatar(imagen:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/perfil/pplu24k/avatar',imagen,{responseType: 'text'});
  }


}
