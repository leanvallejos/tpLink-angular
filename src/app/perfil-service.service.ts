import { Perfil } from './login/perfil';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilServiceService {

  private datosPerfil: Perfil|undefined;

  @Output() actualizacionPerfil: EventEmitter<Perfil>;

  constructor() {
    this.actualizacionPerfil = new EventEmitter();
    this.datosPerfil =this.perfilVacio();
   }

   public agregarDatosPerfil(perfil: Perfil){
    this.datosPerfil = perfil;
    localStorage.setItem('idUsuario', perfil.id);
    localStorage.setItem('idCarrito', perfil.idCarrito);
    this.notificarCambio();
   }

   public eliminarDatosPerfil(){
    this.datosPerfil = this.perfilVacio();
    localStorage.removeItem('idCarrito');
    this.notificarCambio();
   }

   private notificarCambio(){
    this.actualizacionPerfil.emit(this.datosPerfil);
  }

  private perfilVacio(){

    const perfilVacio = {
      id: '0',
      nombre: '',
      apellido: '',
      usuario: '',
      rol: '',
      idCarrito: '0',
      token: ''
    }

    return perfilVacio;
  }

}
