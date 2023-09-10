import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-pocetna-strana',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.css']
})
export class PocetnaStranaComponent {


  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {} // Inject HttpClient servis


  email: string = '';
  password: string = '';
  userType: string = 'student'; // Default value

  submit() {
  // Ovde možete da rukujete podacima koji su uneti/izabrani u formi
  console.log('Email:', this.email);
  console.log('Password:', this.password);
  console.log('User Type:', this.userType);

  // Provera userType i pozivanje odgovarajuće funkcije za prijavljivanje
  if (this.userType === 'student') {
    // Pozivanje funkcije za prijavljivanje kao student
    this.authService.loginStudent(this.email, this.password).subscribe(
      (response) => {
        // Uspesno prijavljivanje, možete dodatno rukovati ovde
        console.log(response);
        this.router.navigate(['/student']);
      }
    );
  } else if (this.userType === 'profesor') {
    // Pozivanje funkcije za prijavljivanje kao profesor
    this.authService.loginProfesor(this.email, this.password).subscribe(
      (response) => {
        // Uspesno prijavljivanje, možete dodatno rukovati ovde
        console.log(response);
        this.router.navigate(['/profesor']);
      }
    );
  }
}



  // onLogin(token: string): void {
  //   // Ovde dobijate autentifikacioni token od servera
  //   this.authService.login(token);
  // }

  // onLogout(): void {
  //   this.authService.logout();
  // }

  // onSubmit() {
  //   const userData = {
  //     email: this.email,
  //     password: this.password,
  //   };

  //   this.http.post('/api/login', userData).subscribe(
  //     (response: any) => {
  //       // Ovde se možete rukovati odgovorom sa servera
  //       // Na primer, čuvati token ili sesiju na frontendu i preusmeriti korisnika
  //       if (response && response.token) {
  //         // Ako je autentifikacija uspešna, sačuvajte token koristeći AuthService
  //         this.authService.login(response.token);
  //         // Ovde možete dodati logiku za preusmeravanje korisnika na određenu stranicu
  //         //  if (korisnikJeProfesor) {
  //         //   this.router.navigate(['/profesor']);
  //         // } else {
  //         //   this.router.navigate(['/student']);
  //         // }
  //       }
  //     }
  //   );
  // }


  
}
