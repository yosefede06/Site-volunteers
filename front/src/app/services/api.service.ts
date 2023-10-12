import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {Observable} from 'rxjs';

import { Helper } from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private db: AngularFireDatabase) {

  }

  getHelpers(): Observable<Helper[]> {
    return this.db.list<Helper>('tohelp').valueChanges();
  }

  addHelper(newUser: Helper) {
    this.db.list('tohelp').push(newUser);
  }

  addForHelp(newUser: Helper) {
    this.db.list('forhelp').push(newUser);
  }
}