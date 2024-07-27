import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartolaApiService {
  private apiUrl = 'https://api.cartola.globo.com/time/id/'
  constructor(private http: HttpClient) { }

  getData(value: string): Observable<any> {
    return this.http.get<any>(this.apiUrl+value)
  }

}
