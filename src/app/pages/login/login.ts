import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer';
import { NavbarComponent } from '../../components/navbar/navbar';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Added for ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterModule, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  // Data binding properties
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onLogin() {
    // Static credential check
    if (this.username === 'admin' && this.password === '1234') {
      console.log('Login successful');
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password. Try admin / 1234';
    }
  }
}