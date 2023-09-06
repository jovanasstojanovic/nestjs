import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pocetna-strana',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.css']
})
export class PocetnaStranaComponent {

  email: string = '';
  
  password: string = '';

  constructor(private http: HttpClient) {} // Inject HttpClient servis

  onSubmit() {
    const userData = {
      email: this.email,
      password: this.password,
    };

    this.http.post('/api/login', userData).subscribe(
      (response: any) => {
        // Ovde se možete rukovati odgovorom sa servera
        // Na primer, čuvati token ili sesiju na frontendu i preusmeriti korisnika
      }
    );
  }
}
