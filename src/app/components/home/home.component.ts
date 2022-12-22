import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
// import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    
  }

}


// implements OnInit {
//   miPortfolio:any;


//   constructor(
//     private datosPortfolio:PortfolioService
//     ) { }

//   ngOnInit(): void {
//     this.datosPortfolio.obtenerDatos().subscribe(data =>{
//       console.log(data);
//       this.miPortfolio=data;
//     } );
//   }
// }
