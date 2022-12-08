import { Component } from '@angular/core';

//Decorador
@Component({
  //Le dice a Angular que cree e inserte una instancia de este componente siempre que encuentre la etiqueta ej:'app-root' en el html. El selector es el nombre por el cual luego invocamos al componente en el html.
  selector: 'app-root',
  //Contiene el HTML para visualizar la interfaz de usuario(vista)
  templateUrl: './app.component.html',
  //Estilos
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PortfolioAngular';
}


//app.component.ts: controlador donde se encuentra la lógica.
//Este archivo debe incluir una clase y esta es la que va a contener las propiedades que se van a usar en la vista y los metodos que serán las acciones que se ejecutarán en la misma. En este archivo de lógica también se incluye una metadata, que es definida con un decorador, que identifica a Angular como un componente.