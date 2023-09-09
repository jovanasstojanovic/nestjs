import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Predmet } from 'src/app/models/predmet';

@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Predmet[]>(environment.api+'/student');
  }
}
