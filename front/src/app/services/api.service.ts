import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private db: AngularFireDatabase) {

  }

  addHelper(newUser: User) {
    this.db.list('tohelp').push(newUser);
  }

  addForHelp(newUser: User) {
    this.db.list('forhelp').push(newUser);
  }
}