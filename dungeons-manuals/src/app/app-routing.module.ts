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
  { path: 'spells', loadChildren: () => import('./pages/spells/spells.module').then(m => m.SpellsModule) },
  { path: 'traits', loadChildren: () => import('./pages/traits/traits.module').then(m => m.TraitsModule) },
  { path: 'races', loadChildren: () => import('./pages/races/races.module').then(m => m.RacesModule) },
  { path: 'features', loadChildren: () => import('./pages/features/features.module').then(m => m.FeaturesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration : 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
