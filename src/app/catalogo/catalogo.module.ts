import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { ProductoComponent } from './producto/producto.component';
import { ListadoComponent } from './listado/listado.component';
import { PromocionComponent } from './promocion/promocion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [


    ProductoComponent,
        ListadoComponent,
        PromocionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CatalogoRoutingModule,
    HttpClientModule
  ]
})
export class CatalogoModule { }
