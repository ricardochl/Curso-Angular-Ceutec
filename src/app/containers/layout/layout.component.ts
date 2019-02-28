import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private sidebarSubscription: Subscription;
  public isOpen : boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
