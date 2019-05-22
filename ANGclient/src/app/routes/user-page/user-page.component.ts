import { Component, OnInit } from '@angular/core';
import { AuthService } from "../..//services/auth/auth.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styles: []
})
export class UserPageComponent implements OnInit {

  constructor(
    private AuthService: AuthService
  ) { }

  private userAuthentication = () => {
    this.AuthService.authenticate()
    .then( data => console.log(data) )
    .catch( err => console.error(err) )
  }

  ngOnInit() {
    this.userAuthentication()
  }

}
