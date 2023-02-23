import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/auth/register.service';

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})
export class LogUpComponent {

  registrante = {
    'nick' : '',
    'email': '',
    'nombre': '',
    'pass1': '',
    'pass2': ''
  }

  constructor(
    private registerService: RegisterService
  ){}

  submit($event: any) {

    console.log(this.registrante)

    this.registerService.registrarse(this.registrante).subscribe((data:any) => {
      console.log(data.token)
      localStorage.setItem('token',data.token)
    })
    }

}
