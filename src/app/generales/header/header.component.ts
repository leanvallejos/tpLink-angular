import { PerfilServiceService } from './../../perfil-service.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/login/perfil';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

   nombreUsuario: string ;

  constructor(
    private router: Router,
    private perfilService:PerfilServiceService
  ) {
    this.nombreUsuario = '';
   }

  ngOnInit(): void {
    this.perfilService.actualizacionPerfil.subscribe((perfil:Perfil) =>{
      console.log('el nombre del usuario es ' + perfil.nombre);
      this.nombreUsuario = perfil.nombre;
    })
  }

  public cerrarSesion(){

    this.perfilService.eliminarDatosPerfil();

    this.router.navigate(['/']);
  }

}
