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
  timesID = ['12001243','15697689','601738','49182691','12259599','29700525','8722663','28162832','220863','13993854','24765079','25366600','7894575','47534415','3540755','6980766','257506','2253460','1531069','8005845','49212869','8082206','13974630','16189753','90370','49214864','8546278','1836283','49141511','3591914','24868336','27462196','985500','245003','7669893','8003703','27682669','105071','47586861','27313570','68025','17378508','27960867','49238520','49864964','8376161']

  constructor(private api: CartolaApiService) {}
  
  ngOnInit(): void {
    this.getDados();
  }
  
  getDados() {
    this.timesID.forEach(time => {
      this.api.getData(time).subscribe(response => {
        const timeData = {
          nome: response?.time?.nome,
          nome_pessoa: response?.time?.nome_cartola,
          patrimonio: response?.patrimonio,
          pontos: response?.pontos,
          total: response?.pontos_campeonato,
          escudo: response?.time?.url_escudo_svg
        };
        this.times.push(timeData);
        console.log(response);
      });
    });
  }
  
}

