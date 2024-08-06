import { Component, OnInit } from '@angular/core';
import { UserauthService } from '../../services/userauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  message: String = '';
  isError: boolean = false;

  constructor(private authService: UserauthService, private router: Router) {}
  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (data) => {
        sessionStorage.setItem('authToken', data.token);
        localStorage.setItem('username', JSON.stringify(data.username));
        this.message = data.message;
        this.isError = false;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
      },
      error: (err) => {
        console.log(err);
        this.message = err.error.message;
        this.isError = true;
        setTimeout(() => {
          this.message = '';
        }, 1000);
      },
    });
  }
  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      if (
        sessionStorage.getItem('authToken') &&
        localStorage.getItem('username')
      ) {
        this.router.navigate(['/']);
        let username = localStorage.getItem('username');
        console.log(username);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
}
