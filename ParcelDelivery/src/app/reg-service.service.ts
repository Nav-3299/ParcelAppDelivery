import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User.model';




@Injectable({
  providedIn: 'root'
})
export class RegServiceService {
  selectedUser: User = {
    name: '',
    email: '',
    phone: '',
    passwd: '',
  }
  constructor(private http: HttpClient) { }
  postUser(user: User) {
    return this.http.post('http://localhost:3000' + '/register', user);

  }

}

