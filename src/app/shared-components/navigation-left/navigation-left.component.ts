import {Component, inject} from '@angular/core';
import {GlobalService} from '../../global.service';

@Component({
  selector: 'app-navigation-left',
  imports: [],
  templateUrl: './navigation-left.component.html',
  styleUrl: './navigation-left.component.scss'
})
export class NavigationLeftComponent {
  globalService = inject(GlobalService)

  navigateTo(route: string) {
    this.globalService.setActiveRoute(route);
    this.globalService.navigateTo(route);
  }
}
