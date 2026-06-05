import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';

const routes: Routes = [
  { path: '', component: ProductoListComponent },
  { path: 'nuevo', component: ProductoFormComponent },
  { path: 'editar/:id', component: ProductoEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}