import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('toggle', [
      state('open', style({
        width: '200px',
        height: '100%',
        overflow: 'hidden',
      })),
      state('closed', style({
        left: '-200px',
        overflow: 'hidden'
      })),
      transition('* => *', animate('500ms ease-in'))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  public isOpen = true;
  public userName: any = null;
  constructor() { }

  ngOnInit() {

  }
}

