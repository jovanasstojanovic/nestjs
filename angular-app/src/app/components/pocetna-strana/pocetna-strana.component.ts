import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-pocetna-strana',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.css']
})
export class PocetnaStranaComponent {

  email: string = '';
  
  password: string = '';
  

  constructor(private http: HttpClient, private authService: AuthService) {} // Inject HttpClient servis


  onLogin(token: string): void {
    // Ovde dobijate autentifikacioni token od servera
    this.authService.login(token);
  }

  onLogout(): void {
    this.authService.logout();
  }

  onSubmit() {
    const userData = {
      email: this.email,
      password: this.password,
    };

    this.http.post('/api/login', userData).subscribe(
      (response: any) => {
        // Ovde se možete rukovati odgovorom sa servera
        // Na primer, čuvati token ili sesiju na frontendu i preusmeriti korisnika
        if (response && response.token) {
          // Ako je autentifikacija uspešna, sačuvajte token koristeći AuthService
          this.authService.login(response.token);
          // Ovde možete dodati logiku za preusmeravanje korisnika na određenu stranicu
          //  if (korisnikJeProfesor) {
          //   this.router.navigate(['/profesor']);
          // } else {
          //   this.router.navigate(['/student']);
          // }
        }
      }
    );
  }
}
