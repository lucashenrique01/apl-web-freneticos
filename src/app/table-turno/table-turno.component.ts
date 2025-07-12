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
  timesID = ['27682669','47586861','8722663','50140473','15697689','3743325','8003703','12259599','29700525','2253460','12001243','8082206','8518577','377421','90370','13976402','28162860','77297','50039243','49212869','61403','7894575','24765079','25297388','25676578','13941667','471943','428784','49502770','49141511','803851','17931529','27462196','257506','220863','49238520','26651951','3710334','25428714','14213413','49214864','794559']

  constructor(private api: CartolaApiService) {}
  
  ngOnInit(): void {
    this.getDados();
  }
  
  getDados() {
    this.timesID.forEach(time => {
      this.api.getData(time).subscribe({
        next:(response) => {
          const timeData = {
            nome: response?.time?.nome,
            nome_pessoa: response?.time?.nome_cartola,
            patrimonio: response?.patrimonio,
            pontos: response?.pontos,
            total: response?.pontos_campeonato,
            escudo: response?.time?.url_escudo_svg
          };
          this.times.push(timeData);
          console.log(response)
        }
      });
    });
  }
  
}

