import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit, OnChanges {

  public loggedNav: Array<any>
  public unLoggedNav: Array<any>
  public activeNav: Array<any>
  public userIsConnected: boolean

  @Input() title: string

  constructor() {
    this.userIsConnected = false;
    this.unLoggedNav = [
      {
        value: 'Accueil',
        path: '/'
      },
      {
        value: 'Inscription',
        path: '/register'
      },
      {
        value: 'Connexion',
        path: '/login'
      }
    ]

    this.loggedNav = [
      {
        value: 'Accueil',
        path: '/'
      },
      {
        value: 'Mon compte',
        path: '/me'
      }
    ]
   }

  private checkUserToken = () => {
    if(window.localStorage.getItem('user-token')){
      this.activeNav = this.loggedNav 
      this.userIsConnected = true
    }
    else{
      this.activeNav = this.unLoggedNav 
      this.userIsConnected = false
    }
  }

  public logoutUser = () => {
    window.localStorage.removeItem('user-token')
    this.activeNav = this.unLoggedNav 
    this.userIsConnected = false
  }

  ngOnInit() {
    this.checkUserToken()
  }

  ngOnChanges(changes: any) {
    console.log(changes)
  }

}
