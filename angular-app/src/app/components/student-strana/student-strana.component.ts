import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-student-strana',
  templateUrl: './student-strana.component.html',
  styleUrls: ['./student-strana.component.css']
})
export class StudentStranaComponent {

  constructor(private authService:AuthService, private router: Router)
  {

  }

  onLogout(): void {
    this.authService.logout();
    // Ovde možete dodati logiku za preusmeravanje korisnika ili druge akcije nakon odjave
    this.router.navigate(['/pocetna']);
  }

}
