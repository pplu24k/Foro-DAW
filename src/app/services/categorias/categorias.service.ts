import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private uri = 'http://127.0.0.1:8000/api/subforos/'


  public getCategorias(subforo:string){
    return this.httpClient.get(this.uri+subforo);
  }
}
