import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
// import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {

  persona: persona = new persona("", "", "");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    
  }

}

// implements OnInit {

//   educacionList:any;

//   constructor(private datosPortfolio:PortfolioService) { }

//   ngOnInit(): void {
//     this.datosPortfolio.obtenerDatos().subscribe(data =>{
//       this.educacionList=data.educacion;
//     })
//   }
// }