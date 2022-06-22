import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBackService } from 'src/app/apis/api-back.service';
import { Producto } from '../entities/producto';

@Component({
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  productoEjemplo: Producto | undefined;
  productos: any;
  promociones: any;

  constructor(
    private apiBackService: ApiBackService
  ) {

    this.productos = [];
    this.promociones = [];

  }

  ngOnInit(): void {
    this.crearProductos();
    this.crearPromociones();
  }
  crearPromociones() {
    this.apiBackService.promocionesActivas().subscribe((promocionesApi:any) => {
      promocionesApi.forEach((promocion:any) => {
        const promocionEjemplo = {
          nombre: promocion.nombre,
          descuento: promocion.porcentaje,
          producto: 'nombre producto'
        }
        this.promociones.push(promocionEjemplo);
      });
    })
  }

  private crearProductos(){


    this.apiBackService.productosHabilitados().subscribe((productosApi:any) => {

      productosApi.forEach((producto:any) => {

            console.log('nombre de producto: ' + producto.nombre);

            const productoEjemplo = {
              id: producto?.id,
              nombre: producto?.nombre,
              proveedor: "proveedor",
              urlImagen: producto?.urlImagen,
              precioPesos: this.calcularPrecioPesos(producto?.precioDolar),
              descripcion: producto?.descripcion

            }
            this.productos.push(productoEjemplo);

            });

          });

        }



  calcularPrecioPesos(precioPesos: number): number {
    const precioPesosRedondeado = precioPesos;
   return precioPesosRedondeado*200;
  }
}
