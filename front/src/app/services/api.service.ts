import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {Observable} from 'rxjs';

import {Helper, Suggestion} from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private db: AngularFireDatabase) {

  }

  getBasic() {
    return this.db.list<Suggestion>('forhelp').valueChanges();
  }
  getSuggestions():  Observable<Suggestion[]>  {
    return this.db.list<Suggestion>('forhelp').valueChanges();
  }

  getHelpers(): Observable<Helper[]> {
    return this.db.list<Helper>('tohelp').valueChanges();
  }

  addHelper(newUser: Helper) {
    this.db.list('tohelp').push(newUser);
  }

  addForHelp(suggestion: Suggestion) {
    this.db.list('forhelp').push(suggestion);
  }

  changeHelperStatus(helper: Helper) {

  }

  changeForHelpStatus(suggestion: Suggestion){

  }
}