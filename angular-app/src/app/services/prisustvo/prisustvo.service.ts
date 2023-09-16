import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, forkJoin, map, mergeMap, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Prisustvo } from 'src/app/models/prisustvo';

interface CasData {
  cas_id: number;
  casCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class PrisustvoService {
 constructor(private httpClient:HttpClient) { }
 
  getPrisustvaWithStudentInfoByPredmetId(predmetId: number){
    return this.httpClient.get<any[]>(environment.api+`/prisustvo/predmet/${predmetId}`);
  }

  getAll(){
    return this.httpClient.get<Prisustvo[]>(environment.api+'/student');
  }

  pronadjiPrisustvo(studentId: number, predmetId: number): Observable<any> {
    const url = environment.api+`/prisustvo/student/${studentId}/predmet/${predmetId}`;
    return this.httpClient.get(url);
  }


  increaseCasCount(prisustvoId: number): Observable<any> {
    const url = environment.api+`/prisustvo/increase-cas-count/${prisustvoId}`;
    return this.httpClient.put(url, {});
  }

  posecenostNaCasovima(predmetId: number): Observable<CasData[]> {
  const casoviSaBrojem$ = this.httpClient.get<any[]>(environment.api + `/prisustvo-po-casu/predmet/${predmetId}/casovi/count`);
  const sviCasovi$ = this.httpClient.get<any[]>(environment.api + `/cas/poPredmetu/${predmetId}`);

  sviCasovi$.subscribe((cas)=>{console.log(cas)});

  return combineLatest([casoviSaBrojem$, sviCasovi$]).pipe(
    map(([casoviSaBrojem, sviCasovi]) => {
      const azuriraniCasovi = [...sviCasovi];

      console.log(azuriraniCasovi);
      casoviSaBrojem.forEach(({ cas_id, casCount }) => {
        const indeks = sviCasovi.findIndex((cas) => cas.cas_id === cas_id);

        if (indeks !== -1) {
          azuriraniCasovi[indeks].casCount = casCount;
        }
      });

      // Sortiranje po cas_id u rastućem redosledu
      azuriraniCasovi.sort((a, b) => a.cas_id - b.cas_id);

      // Postavljanje cas_id na vrednost indeksa
      azuriraniCasovi.forEach((cas, indeks) => {
        cas.cas_id = indeks;
      });

      console.log(azuriraniCasovi);

      return azuriraniCasovi;
    })
  );
 
  // return forkJoin([casoviSaBrojem$, sviCasovi$]).pipe(
  //   map(([casoviSaBrojem, sviCasovi]) => {
  //     console.log(casoviSaBrojem);
  //     console.log('ovde',sviCasovi);
  //     const azuriraniCasovi = [...sviCasovi];
  //     console.log(azuriraniCasovi);

  //     casoviSaBrojem.forEach(({ cas_id, casCount }) => {
  //       const indeks = azuriraniCasovi.findIndex((cas) => cas.cas_id == cas_id);
  //       console.log(indeks);
  //       if (indeks !== -1) {
  //         azuriraniCasovi[indeks].casCount = casCount;
  //       }
  //     });
  //     console.log(azuriraniCasovi);

  //     // Sortiranje po cas_id u rastućem redosledu
  //     azuriraniCasovi.sort((a, b) => a.cas_id - b.cas_id);

  //     // Postavljanje cas_id na vrednost indeksa
  //     azuriraniCasovi.forEach((cas, indeks) => {
  //       cas.cas_id = indeks;
  //     });

  //     console.log(azuriraniCasovi);
  //     return azuriraniCasovi;
  //   })
  // );
}

  
}
