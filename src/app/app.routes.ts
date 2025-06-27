import {Routes} from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {NotificationspageComponent} from './pages/notifications-page/notificationspage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },  {
    path: 'notifications',
    component: NotificationspageComponent
  }
];
