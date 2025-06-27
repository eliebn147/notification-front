import {inject, Injectable, signal} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  router = inject(Router);
  private activeRoute = signal<string>("");

  navigateTo(path: string) {
    this.router.navigate(['/' + path]);
  }

  getActiveRoute() {
    return this.activeRoute();
  }

  setActiveRoute(route: string) {
    this.activeRoute.set(route);
  }
}
