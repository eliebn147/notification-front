import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationLeftComponent} from './shared-components/navigation-left/navigation-left.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationLeftComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'notification-app';
}
