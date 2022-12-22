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