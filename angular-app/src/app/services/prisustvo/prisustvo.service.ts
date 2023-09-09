import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Prisustvo } from 'src/app/models/prisustvo';

@Injectable({
  providedIn: 'root'
})
export class PrisustvoService {

 constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Prisustvo[]>(environment.api+'/student');
  }
}
