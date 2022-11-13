import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-exp-comp',
  templateUrl: './exp-comp.component.html',
  styleUrls: ['./exp-comp.component.css']
})
export class ExpCompComponent implements OnInit {

  experienciaList:any;
  proyectosList:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.experienciaList=data.experiencia;

      this.proyectosList=data.proyectos;
    })
  }
}



  
