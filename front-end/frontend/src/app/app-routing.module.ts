import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { DivisaComponent } from './components/divisa/divisa.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

const routes: Routes = [
  {path:"producto", component:ProductoComponent},
  {path:"producto-form/:id", component:ProductoFormComponent},
  {path:"punto2", component:DivisaComponent},
  {path:"transacciones-form/:id", component:TransaccionComponent},
  {path:"punto3", component:TicketComponent},
  {path:'ticket-form/:id', component:TicketFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
