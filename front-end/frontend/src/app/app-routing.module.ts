import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { DivisaComponent } from './components/divisa/divisa.component';

const routes: Routes = [
  {path:"producto", component:ProductoComponent},
  {path:"producto-form/:id", component:ProductoFormComponent},
  {path:"punto2", component:DivisaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
