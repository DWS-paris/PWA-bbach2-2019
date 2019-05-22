import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header [title]="appTitle"></app-header>
    <router-outlet></router-outlet>
    <button (click)="title = 'New title'" >test</button>
  `
})
export class AppComponent implements OnInit {
  
  public appTitle: string;

  constructor(){
    this.appTitle = `Hello Stranger`
  }

  ngOnInit(){}
}
