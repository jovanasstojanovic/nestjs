import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Predmet } from 'src/app/models/predmet';
import { Profesor } from 'src/app/models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Profesor[]>(environment.api+'/student');
  }

  getPredmetiByProfesorId(profesorId: number): Observable<Predmet[]> {
    return this.httpClient.get<Predmet[]>(environment.api+`/profesor/${profesorId}/predmeti`);
  }
}
