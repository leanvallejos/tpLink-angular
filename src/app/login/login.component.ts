import { PerfilServiceService } from './../perfil-service.service';
import { ApiBackService } from './../apis/api-back.service';
import { Perfil } from './perfil';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup|null;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiBackService: ApiBackService,
    private perfilService: PerfilServiceService
  ) {
    this.formulario = null;
  }

  ngOnInit(): void {
    this.inicializarFormulario();

  }

  private inicializarFormulario(){
    this.formulario = this.formBuilder.group(
      {
        usuario : ['' , Validators.required],
        password : ['' , Validators.required]
      }
    );
  }

  iniciarSesion(){
    var usuario = this.formulario?.get('usuario')?.value;
    var password = this.formulario?.get('password')?.value;
    this.obtenerDatosUsuarioApi(usuario, password);



  }
  obtenerTokenApi(usuario: any, password: any) {


 //ACA TENDRIA QUE OBTENER EL TOKEN DE LA API USANDO UN SERVICIO
    return '123456';
  }
  obtenerDatosUsuarioApi(usuario: any, password: any) {

    this.apiBackService.datosUsuario(usuario, password).subscribe((datos:any) => {

      if(datos != null){



        const perfil = {
          id:  datos.id,
          nombre: datos.nombre,
          apellido: datos.apellido,
          usuario: datos.user,
          rol: datos.tipo,
          idCarrito: datos.carrito.id,
          token:'token',
        }

        this.perfilService.agregarDatosPerfil(perfil);
        this.router.navigate(['/home']);

/*
        localStorage.setItem('idUsuario', datos.id);
        localStorage.setItem('nombreUsuario', datos.nombre);
        localStorage.setItem('tipoUsuario', datos.tipo);

        */
      }else{

        //this.perfilService.eliminarDatosPerfil();
        alert('Usuario o contraseña incorrecta');
        this.router.navigate(['/']);

        /*

        localStorage.setItem('idUsuario', '');
        localStorage.setItem('nombreUsuario', '');
        localStorage.setItem('tipoUsuario', '');
        */

      }




    });


  }



}
