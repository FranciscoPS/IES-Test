import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckLoginGuard } from './shared/guards/check-login.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
    canActivate: [CheckLoginGuard],
  },
  {
    path: 'conversions',
    loadChildren: () =>
      import('./pages/conversions/conversions.module').then(
        (m) => m.ConversionsModule
      ),
    canActivate: [CheckLoginGuard],
  },
  {
    path: 'dates',
    loadChildren: () =>
      import('./pages/dates/dates.module').then((m) => m.DatesModule),
    canActivate: [CheckLoginGuard],
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./pages/form/form.module').then((m) => m.FormModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
