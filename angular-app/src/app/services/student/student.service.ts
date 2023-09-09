import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Student[]>(environment.api+'/student');
  }
}