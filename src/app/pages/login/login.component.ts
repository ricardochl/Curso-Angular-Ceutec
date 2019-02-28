import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',    
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginParams : any = {};
  public errorMessage : string = '';
  constructor() {
   }

  ngOnInit() {
  }

}
