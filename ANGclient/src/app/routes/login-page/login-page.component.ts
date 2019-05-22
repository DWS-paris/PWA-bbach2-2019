import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../models/user.model";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnInit {

  constructor(
    private AuthService: AuthService
  ) { }

  private loginUser = ( userData: UserModel ) => {
    this.AuthService.login( userData )
    .then( apiResponse => {
      console.log(apiResponse)

      window.localStorage.setItem( 'user-token', apiResponse.data.token )
    } )
    .catch( apiResponse => console.error(apiResponse) )
  }

  ngOnInit() {
  }

}
