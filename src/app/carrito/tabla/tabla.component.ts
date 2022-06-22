import { ApiCotizacionDolarService } from './../../apis/api-cotizacion-dolar.service';
import { Perfil } from 'src/app/login/perfil';
import { Component, OnInit } from '@angular/core';
import { ApiBackService } from 'src/app/apis/api-back.service';
import { Producto } from 'src/app/catalogo/entities/producto';
import { PerfilServiceService } from 'src/app/perfil-service.service';

@Component({
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  productoEjemplo: Producto | undefined;
  filas: any;

  constructor(
    private apiBackService: ApiBackService,
    private apiCotizacionDolarService :ApiCotizacionDolarService


  ) {
    this.filas = [];
   }

  ngOnInit(): void {


    this.crearTabla();

  }

  private crearTabla(){

    this.apiCotizacionDolarService.cotizacionDolar().subscribe((cotizacion:any) => {

      this.apiBackService.productosCarrito().subscribe((productosXCant:any) =>{

      productosXCant.forEach((productoXCant:any) => {

        const fila = {
          idFila: productoXCant.id,
          producto: productoXCant.producto.nombre,
          proveedor: productoXCant.producto.proveedor.nombre,
          cant: productoXCant.cant,
          precioPesos: productoXCant.producto.precioDolar*cotizacion.venta
        }
        console.log('precio pesos :' + fila.precioPesos);
        this.filas.push(fila);
      })
    });
    });


  }

}
