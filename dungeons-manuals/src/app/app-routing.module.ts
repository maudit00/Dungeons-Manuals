import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'classes', loadChildren: () => import('./pages/classes/classes.module').then(m => m.ClassesModule) },
  { path: 'monsters', loadChildren: () => import('./pages/monster/monster.module').then(m => m.MonsterModule) },
  { path: 'subclasses', loadChildren: () => import('./pages/sub-classes/sub-classes.module').then(m => m.SubClassesModule) },
  { path: 'races', loadChildren: () => import('./pages/races/races.module').then(m => m.RacesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
