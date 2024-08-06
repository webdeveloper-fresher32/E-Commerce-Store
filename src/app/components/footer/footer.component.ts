import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  Date() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}/${month}/${date.getFullYear()}`;
  }
}
