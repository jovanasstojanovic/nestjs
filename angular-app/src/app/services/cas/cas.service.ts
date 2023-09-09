import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Cas } from 'src/app/models/cas';

@Injectable({
  providedIn: 'root'
})
export class CasService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Cas[]>(environment.api+'/student');
  }
}
