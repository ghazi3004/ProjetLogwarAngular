import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Transaction} from '../Model/Transaction'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AccountAuthentificationService {
isValidUrl = 'api/account/isValid/';
getAccountUrl = 'api/account/'
  constructor(private http: Http) { }
isValidAccount(accountNumber : number){
  return this.http.get(this.isValidUrl+accountNumber);
}
getAccount(accountNumber : number){
  return this.http.get(this.getAccountUrl+accountNumber);
}
}