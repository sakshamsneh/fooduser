import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { BookhistoryComponent } from './user-profile/bookhistory/bookhistory.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { FoodComponent } from './user-profile/food/food.component';
import { BookfoodComponent } from './user-profile/bookfood/bookfood.component';
import { HomeComponent } from './user-profile/home/home.component';
import { AboutComponent } from './user-profile/about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {
    path: '404', component: PagenotfoundComponent,
  },
  {
    path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard],
    children: [
      { path: 'bookhistory', component: BookhistoryComponent },
      { path: 'food', component: FoodComponent },
      {path: 'bookfood' , component: BookfoodComponent},
      {path: 'home' , component: HomeComponent },
      {path: 'about' , component: AboutComponent},
    ]
  },
  {
    path: '', redirectTo: '/userprofile/home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/404',  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
