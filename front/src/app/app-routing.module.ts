import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {adminGuard} from './admin.guard';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {SignUpFormComponent} from './components/sign-up-form/sign-up-form.component';
import {SuccessComponent} from './components/success/success.component';
import {SuggestionsFormComponent} from './components/suggestions-form/suggestions-form.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'signup', component: SignUpFormComponent},
  {path: 'suggest', component: SuggestionsFormComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'admin', component: AdminComponent, canActivate: [adminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
