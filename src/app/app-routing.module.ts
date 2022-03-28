import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }, 
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  {path:'template',component:TemplateComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'auth',component:AuthComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
