import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CartolaApiService } from '../cartola-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-turno',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './table-turno.component.html',
  styleUrl: './table-turno.component.css'
})
export class TableTurnoComponent {
  times: any[] = [];  

  constructor(private api: CartolaApiService) {}
  
  ngOnInit(): void {
    this.getDados();
  }
  
  getDados() {
    this.api.getData().subscribe({
      next:(response) => {
        response.forEach((pt: { time: { nome: any; urlEscudoSvg: any; nomeCartola: any; }; patrimonio: any; pontos: any; pontosCampeonato: any; somatorioMensal: any; }) => {
          var timeData = {
          nome: pt?.time?.nome,
          cartoleiro: pt?.time?.nomeCartola,
          patrimonio: pt?.patrimonio,
          pontos: pt?.pontos,
          total: pt?.somatorioMensal,
          escudo: pt?.time?.urlEscudoSvg
        };
        this.times.push(timeData);
        });
      }
    });    
  }  
}

