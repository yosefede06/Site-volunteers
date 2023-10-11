import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private db: AngularFireDatabase) {

  }

  add(newUser: User) {
    this.db.list('site-volunteer').push(newUser);
  
  }
}