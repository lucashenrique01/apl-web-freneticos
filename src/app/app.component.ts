import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { ReactiveFormsModule  } from '@angular/forms';
import { TableTurnoComponent } from './table-turno/table-turno.component';
import { MensalComponent } from './mensal/mensal.component';
import { HttpClientModule } from '@angular/common/http';
import { CartolaApiService } from './cartola-api.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, ReactiveFormsModule, TableTurnoComponent, HttpClientModule, MensalComponent],
    providers: [CartolaApiService]
})
export class AppComponent {
  title = 'freneticos';
}
