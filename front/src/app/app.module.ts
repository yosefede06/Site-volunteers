import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/topography/header/header.component';
import { FooterComponent } from './components/topography/footer/footer.component';
import { SidebarComponent } from './components/topography/sidebar/sidebar.component';
import { LoaderComponent } from './components/topography/loader/loader.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppComponent,
    LandingPageComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
