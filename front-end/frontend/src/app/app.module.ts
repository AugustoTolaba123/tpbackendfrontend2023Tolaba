import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { DivisaComponent } from './components/divisa/divisa.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductoFormComponent,
    FooterComponent,
    HeaderComponent,
    DivisaComponent,
    TransaccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
