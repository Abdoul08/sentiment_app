import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = '';
  passwordFieldType: string = 'password'; // Initialise le mot de passe à "caché"

  // Fonction pour basculer la visibilité du mot de passe
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/results']);
    } else {
      this.loginError = 'Identifiant ou mot de passe incorrect';
    }
  }
}
