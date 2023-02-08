import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'table', component: TableComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'error', component: GlobalErrorComponent },
  { path: 'formArray', component: FormArrayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
