import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ApiBackService } from 'src/app/apis/api-back.service';
import { Producto } from '../entities/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoComponent implements OnInit {

  @Input()
  producto: Producto | null | undefined;

  cant: number;

  constructor(
    private apiBackService: ApiBackService
  ) {
    this.cant = 1;
  }

  ngOnInit(): void {
  }

  agregarAlCarrito(){
    this.apiBackService.agregarProductoAlCarrito(this.producto?.id, this.cant).subscribe((response:any) => {
      console.log('id del producto: ' + response.producto.nombre + ' cant: ' + this.cant);

    })

  }

}
