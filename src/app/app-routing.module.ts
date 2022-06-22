import { LoginComponent } from './login/login.component';
import { PaginaNoEncontradaComponent } from './generales/pagina-no-encontrada/pagina-no-encontrada.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "" , component: LoginComponent},
  {path: "home" , component: HomeComponent},
  {path: 'catalogo', loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoModule) },
  { path: 'carrito', loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoModule) },
  {path: '**', component: PaginaNoEncontradaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
