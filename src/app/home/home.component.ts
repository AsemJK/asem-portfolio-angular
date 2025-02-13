import { Component, signal } from '@angular/core';
import { HeaderComponent } from "../layouts/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  message = signal('Hello World');
}
