import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  image:string="myimage.jpg"
  errorMessages: string[] = [
    "Oops! We can't seem to find the page you're looking for.",
    "Are you sure you typed the URL correctly?",
    "Get back to where you belong using the button below.",
  ];

  currentMessage: number = 0;

  constructor() { }

  ngOnInit() {
    this.rotateMessages();
  }

  rotateMessages() {
    setInterval(() => {
      this.currentMessage = (this.currentMessage + 1) % this.errorMessages.length;
    }, 3000); 
  }
}
