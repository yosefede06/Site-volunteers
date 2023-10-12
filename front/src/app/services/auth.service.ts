import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email = 'dolevaviya10@gmail.com';
  password = 'Aa1234';

  AuthState: Subject<boolean> = new Subject<boolean>();

  constructor(private afAuth: AngularFireAuth) { this.AuthState.next(false);}

  get authState() : Observable<boolean>{
    return this.AuthState
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.AuthState.next(true);
    } catch (error) {
      this.AuthState.next(false);
    }
  }
}
