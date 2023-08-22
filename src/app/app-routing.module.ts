import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/layout/main/main.component';
import { HomeComponent } from './pages/home/components/home.component';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'home' , loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
      {path: 'personal' , loadChildren: () => import('./pages/personal/personal.module').then(m => m.PersonalModule)},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
