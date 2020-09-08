import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
