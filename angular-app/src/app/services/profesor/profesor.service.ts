import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Profesor } from 'src/app/models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Profesor[]>(environment.api+'/student');
  }
}
