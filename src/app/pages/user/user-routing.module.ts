import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { CheckLoginGuard } from './../../shared/guards/check-login.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      {
        path: 'welcome',
        loadChildren: () =>
          import('./welcome/welcome.module').then((m) => m.WelcomeModule),
      },
      {
        path: 'conversions',
        loadChildren: () =>
          import('./conversions/conversions.module').then(
            (m) => m.ConversionsModule
          ),
      },
      {
        path: 'dates',
        loadChildren: () =>
          import('./dates/dates.module').then((m) => m.DatesModule),
      },
      {
        path: 'form',
        loadChildren: () =>
          import('./form/form.module').then((m) => m.FormModule),
      },
      {
        path: '**',
        redirectTo: 'welcome',
      },
    ],
    canActivate: [CheckLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
