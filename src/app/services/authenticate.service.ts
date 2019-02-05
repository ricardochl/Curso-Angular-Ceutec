import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  public login(email, password) : Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public signIn(email, password): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}


// .then((result) => {
//   swal('Sucess', `Bienvenido ${result.user.displayName}`, 'success');
//     this.router.navigate(['/home']);
// }).catch(console.log);