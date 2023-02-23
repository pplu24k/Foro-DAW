import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  entrante = {

    'email': '',
    'pass': ''

  }

  constructor(
    private loginService: LoginService
  ){}

  submit($event: any) {

    console.log(this.entrante)

    this.loginService.entrar(this.entrante).subscribe((data:any) => {
      console.log(data.token)
      localStorage.setItem('token',data.token)
    })
    }
}
