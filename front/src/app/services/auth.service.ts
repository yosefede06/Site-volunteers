import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email = 'dolevaviya10@gmail.com';
  password = 'Aa1234';

  AuthState: Subject<boolean> = new Subject<boolean>();

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    // Set the persistence to 'session' so the authentication state persists during the session.
    this.afAuth.setPersistence('session');
    this.afAuth.onAuthStateChanged(user => {
      // Check if a user is logged in or not
      this.AuthState.next(!!user);
    });
  }

  get authState(): Observable<boolean> {
    return this.AuthState.asObservable();
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.AuthState.next(true);
    } catch (error) {
      this.AuthState.next(false);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.AuthState.next(false);
      this.router.navigateByUrl('login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}
