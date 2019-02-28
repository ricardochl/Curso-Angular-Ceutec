import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/structures/user.structure';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isOpen : boolean = true;
  public loggedUser : any;
  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }
  
  logout(){

  }

  toggle(){

  }


}

