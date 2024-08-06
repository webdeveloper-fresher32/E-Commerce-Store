import { Component } from '@angular/core';
import { UserauthService } from '../../services/userauth.service';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  message: String = '';
  isloggedin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private authService: UserauthService, private router: Router) {}

  register() {
    this.authService
      .register(this.username, this.email, this.password)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.message = data.message;
          this.isloggedin.next(true);
          setTimeout(() => {
            this.router.navigate(['/']);
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
