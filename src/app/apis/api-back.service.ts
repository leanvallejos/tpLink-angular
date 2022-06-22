import { PerfilServiceService } from './../perfil-service.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil } from '../login/perfil';

@Injectable({
  providedIn: 'root'
})
export class ApiBackService {

  private url: string = environment.apiBackURL;

  constructor(
    private http: HttpClient
  ) { }

  public datosUsuario(usuario: string , password: string){
    const body = {
      "usuario" : usuario ,
      "password" : password
    }
    return  this.http.post(this.url + '/login/obtenerUsuario', body);
  }

  productosHabilitados() {
    return this.http.get(this.url + '/productos/habilitados');
  }

  promocionesActivas(){
    return this.http.get(this.url + '/promociones/activas');
  }

  productosCarrito(){
    const idCarrito = localStorage.getItem('idCarrito');
    return this.http.get(this.url + '/carritos/'+ idCarrito+'/productosXCant')
  }

  agregarProductoAlCarrito(idProducto: any, cant:number){
    const idCarrito = localStorage.getItem('idCarrito');
    const urlProducto = this.url+'/productos/'+ idProducto;

    const body = {
      "producto" : urlProducto ,
      "cant" : cant.toString()
    }

    return this.http.post(this.url + '/carritos/'+ idCarrito+'/agregarProducto', body);
  }

  eliminarProductoDelCarrito(idFila: any){
    const idCarrito = localStorage.getItem('idCarrito');
    return this.http.post(this.url + '/carritos/' + idCarrito + '/eliminarProducto' , idFila);

  }


}
