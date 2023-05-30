import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee/dashboard',
    pathMatch: 'full'
  },
  { 
    path: 'employee', 
    loadChildren: () => 
      import('./employee/employee.module').then(m => m.EmployeeModule) 
  }, 
  { 
    path: 'admin', 
    loadChildren: () => 
      import('./admin/admin.module').then(m => m.AdminModule) 
  }, 
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
