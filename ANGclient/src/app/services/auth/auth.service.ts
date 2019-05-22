import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private HttpClient: HttpClient
  ) { }

  // Method Register POST
  public register = ( userData: UserModel ): Promise<any> => {
    const myHeader = new HttpHeaders()
    myHeader.append('Content-Type', 'application/json')

    return this.HttpClient.post('https://mcba.dwsapp.io/api/auth/register', userData, { headers: myHeader })
    .toPromise().then(this.getData).catch(this.handleError)
  }

  // Method Login POST
  public login = ( userData: UserModel ): Promise<any> => {
    const myHeader = new HttpHeaders()
    myHeader.append('Content-Type', 'application/json')

    return this.HttpClient.post('https://mcba.dwsapp.io/api/auth/login', userData, { headers: myHeader })
    .toPromise().then(this.getData).catch(this.handleError)
  }

  // Method Authenticate POST
  public authenticate = (): Promise<any> => {
    const myHeader = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${window.localStorage.getItem('user-token')}`)
    }

    return this.HttpClient.get('https://mcba.dwsapp.io/api/user/me', myHeader)
    .toPromise().then(this.getData).catch(this.handleError)
  }

  // Get the API response
  private getData(res: any){
    return res || {};
  };

  // Get the API error
  private handleError(err: any){
    return Promise.reject(err.error);
  };
//
}
