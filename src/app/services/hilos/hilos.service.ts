import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HilosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private uri = 'http://127.0.0.1:8000/api/subforos/'


  public getHilos(subforo:string,categoria:string){
    return this.httpClient.get(this.uri+subforo+'/'+categoria);
  }
}
