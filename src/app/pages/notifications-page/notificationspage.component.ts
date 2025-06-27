import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import {AppInputComponent} from '../../shared-components/app-input/app-input.component';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [CommonModule, TableModule, AppInputComponent, AppInputComponent],
  templateUrl: './notificationspage.component.html',
  styleUrl: './notificationspage.component.scss'
})
export class NotificationspageComponent implements OnInit {

  notifications = signal<any[]>([]);

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllNotifications().subscribe({
      next: (data) => {
        this.notifications.set(data);
      },
      error: (err) => console.error(err)
    });
  }
}
