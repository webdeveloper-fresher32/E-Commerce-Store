import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';
  @Output() logoName = new EventEmitter<string>();

  changeLogo(newLogoName: string) {
    this.logoName.emit(newLogoName)
  }
}