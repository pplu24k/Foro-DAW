import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HiloContentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private uri = 'http://127.0.0.1:8000/api/subforos/'


  public getHilo(subforo:string,categoria:string,id:string){
    return this.httpClient.get(this.uri+subforo+'/'+categoria+'/'+id);
  }

}
