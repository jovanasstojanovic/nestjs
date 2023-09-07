import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profesor-strana',
  templateUrl: './profesor-strana.component.html',
  styleUrls: ['./profesor-strana.component.css']
})
export class ProfesorStranaComponent {

  constructor(private authService:AuthService, private router: Router){
    
  }

  onLogout(): void {
    this.authService.logout();
    // Ovde možete dodati logiku za preusmeravanje korisnika ili druge akcije nakon odjave
    this.router.navigate(['/pocetna']);
  }
}
