import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';


//Importamos nuestros componentes
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';


//Array Routes que contendrá nuestras rutas virtuales
const routes: Routes = [
  //El Home
  {path: '', component: HomeComponent },
  {path: 'Sobre-Mi', component: InfoComponent },
  {path: 'Experiencia', component: ExperienceComponent},
  {path: 'Contacto', component: ContactComponent},
  {path: 'Acceso', component: LoginComponent}
];

@NgModule({
  //Importamos el Router Module
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//Exportamos el Routier Module
export class AppRoutingModule { }


//Estamos en el módulo del sistema de rutas.
//Se debe importar este módulo en el AppModule.ts que es el módulo que contendrá los componentes dinámicos