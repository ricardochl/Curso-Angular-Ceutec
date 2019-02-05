import { AuthenticateService } from './../../services/authenticate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginParams : any = {};
  public errorMessage : string = '';
  constructor(private authenticateService : AuthenticateService, private router : Router) { }

  ngOnInit() {
  }

  login(){
    this.authenticateService.login(this.loginParams.email, this.loginParams.password).then((result) => {
      swal('SGA', `Bienvenido ${result.user.displayName}`, 'success');
        this.router.navigate(['/home']);
        console.log(result)
    }).catch((error)=>{
      console.log(error)
      switch(error.code){
        case 'auth/user-not-found':
        this.errorMessage = "No hay registro de usuario correspondiente a este identificador.";
        console.log(this.errorMessage);
        break;
        case 'auth/wrong-password':
        this.errorMessage = "La contraseña no es válida.";
        break;
        case  'auth/invalid-email':
        this.errorMessage = "El correo electrónico es inválido, intente de nuevo.";
        break;
        default: 
        this.errorMessage = "Ha ocurrido un error.";
        break;
      }
      swal('Error', `${this.errorMessage}`, 'error');
    });
  }
}
