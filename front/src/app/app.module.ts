import { NgOptimizedImage } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
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
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SuggestionsFormComponent } from './components/suggestions-form/suggestions-form.component';
import { FormComponent } from './components/form/form.component';
import { AdminComponent } from './components/admin/admin.component';
import { HelperCardComponent } from './components/helper-card/helper-card.component';
import { SuggestionCardComponent } from './components/suggestion-card/suggestion-card.component';
import { SuccessComponent } from './components/success/success.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

const firebaseConfig = {
  apiKey: "AIzaSyCy9gohxz_giHiIKSsrqrSXcrr9xxH1blk",
  databaseURL: "https://site-volunteer-default-rtdb.firebaseio.com",
  projectId: "site-volunteer",
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
    SignUpFormComponent,
    SuggestionsFormComponent,
    FormComponent,
    AdminComponent,
    HelperCardComponent,
    SuggestionCardComponent,
    SuccessComponent,
    LoginAdminComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    // MatTextareaAutosizeModule 
    NgOptimizedImage,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
