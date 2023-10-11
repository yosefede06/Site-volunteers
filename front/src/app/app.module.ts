import {NgOptimizedImage} from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/topography/header/header.component';
import { FooterComponent } from './components/topography/footer/footer.component';
import { SidebarComponent } from './components/topography/sidebar/sidebar.component';
import { LoaderComponent } from './components/topography/loader/loader.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

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
    LoaderComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    // MatTextareaAutosizeModule 
    NgOptimizedImage,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
