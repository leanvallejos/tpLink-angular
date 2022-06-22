import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { TablaComponent } from './tabla/tabla.component';
import { FilaTablaComponent } from './fila-tabla/fila-tabla.component';


@NgModule({
  declarations: [


    TablaComponent,
    FilaTablaComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule
  ]
})
export class CarritoModule { }
