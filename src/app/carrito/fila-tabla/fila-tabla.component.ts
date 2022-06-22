import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBackService } from 'src/app/apis/api-back.service';
import { Producto } from 'src/app/catalogo/entities/producto';

@Component({
  selector: 'app-fila-tabla',
  templateUrl: './fila-tabla.component.html',
  styleUrls: ['./fila-tabla.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilaTablaComponent implements OnInit {

  @Input()
  fila: any | null | undefined;


  constructor(
    private apiBackService: ApiBackService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  eliminarDelCarrito(){
    this.apiBackService.eliminarProductoDelCarrito(this.fila.idFila).subscribe((respuesta:any) => {
      console.log(respuesta);

    })

    this.router.navigate(['/catalogo']);

   }



}
