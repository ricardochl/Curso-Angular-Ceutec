import { Router } from '@angular/router';
import { AuthenticateService } from './../../services/authenticate.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerParams : any = {};
  public errorMessage : string = '';
  constructor(private authenticateService : AuthenticateService, private router : Router) { }

  ngOnInit() {
  }

  signIn(){
    this.authenticateService.signIn(this.registerParams.email, this.registerParams.password,).then((result) => {
      result.user.updateProfile({
        displayName : this.registerParams.nombre,
        photoURL : ''
      });
      swal('SGA', `Bienvenido ${result.user.displayName}`, 'success');
      this.router.navigate(['/home']);
   }).catch((error)=>{
    console.log(error)
    switch(error.code){
      case 'auth/email-already-in-use':
      this.errorMessage = "La dirección de correo electrónico ya está en uso por otra cuenta.";
      break;
      default: 
      this.errorMessage = "Ha ocurrido un error, intente de nuevo.";
      break;
    }
    swal('Error', `${this.errorMessage}`, 'error');
  });
  }

}
