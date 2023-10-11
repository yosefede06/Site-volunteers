import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyCy9gohxz_giHiIKSsrqrSXcrr9xxH1blk",
  authDomain: "site-volunteer.firebaseapp.com",
  databaseURL: "https://site-volunteer-default-rtdb.firebaseio.com",
  projectId: "site-volunteer",
  storageBucket: "site-volunteer.appspot.com",
  messagingSenderId: "590377290259",
  appId: "1:590377290259:web:03fe2f8266d9f291b64de6",
  measurementId: "G-7SXH4DMJQH"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
