// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://yd0xc93nh7.execute-api.us-east-1.amazonaws.com/prod/api'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Méthode pour appeler l'API et transformer les données reçues
  getApiData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => JSON.parse(response.body)) // Transformer la chaîne en JSON
    );
  }
}
