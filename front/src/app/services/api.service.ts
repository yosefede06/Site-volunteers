import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map, tap } from 'rxjs';
import { Helper, Suggestion } from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private db: AngularFireDatabase) {}

  getSuggestions(): Observable<Suggestion[]> {
    return this.db.list<Suggestion>('forhelp').snapshotChanges()
      .pipe(
        map((changes: any) => changes.map(
          (c: any) => ({ key: c.payload.key, ...c.payload.val() })
        ))
        , tap((next) => { }
        ));
  }

  getHelpers(): Observable<Helper[]> {
    return this.db.list<Helper>('tohelp').snapshotChanges()
      .pipe(
        map((changes: any) => changes.map(
          (c: any) => ({ key: c.payload.key, ...c.payload.val() })
        ))
        , tap((next) => { }
        ));
  }

  addHelper(newUser: Helper) {
    this.db.list('tohelp').push(newUser);
  }

  addForHelp(suggestion: Suggestion) {
    this.db.list('forhelp').push(suggestion);
  }

  changeHelperStatus(helper: Helper) {
    this.db.list('tohelp').update(helper.key, helper);
  }

  changeForHelpStatus(suggestion: Suggestion) {
    this.db.list('forhelp').update(suggestion.key, suggestion);

  }
}