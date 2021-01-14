import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorLoginComponent } from './login/doc-login.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorLoginComponent
  },

  {
    path: 'dashboard',  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
