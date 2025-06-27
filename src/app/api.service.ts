import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

declare global {
  interface Window {
    env: {
      baseApi?: string;
      production?: boolean;
      [key: string]: any;
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient)

  apiBaseUrl: string = 'http://localhost:8080/';

  constructor() { }

  getAllNotifications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiBaseUrl + 'notifications');
  }

  createNotification(notification: any): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl + 'notifications', notification);
  }
}
