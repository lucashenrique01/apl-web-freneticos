import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TableTurnoComponent } from "../table-turno/table-turno.component";

@Component({
  selector: 'app-mensal',
  standalone: true,
  imports: [CommonModule, TableTurnoComponent],
  templateUrl: './mensal.component.html'
})
export class MensalComponent {

}