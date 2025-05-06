import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Register form';
  displayname = '';
  displayemail = '';
  displaycontact = '';
  displayaddresses = '';

  getValue(name: string, email: string, contact: string, addresses: string): void {
    this.displayname = name;
    this.displayemail = email;
    this.displaycontact = contact;
    this.displayaddresses = addresses;
  }
}
