import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartolaApiService {
  private apiUrl = 'http://apl-api-freneticos-production.up.railway.app/mensal/mes/julho/participantes'
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }

}
