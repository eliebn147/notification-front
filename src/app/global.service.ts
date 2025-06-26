import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  router = inject(Router);

  navigateTo(module: string,path: string) {
    this.router.navigate(['/' + module, path]);
  }
}
