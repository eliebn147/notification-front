import {Component, inject, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import { MessageService } from 'primeng/api';
import {AppInputComponent} from '../../shared-components/app-input/app-input.component';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {Toast} from 'primeng/toast';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-homepage',
  imports: [
    AppInputComponent,
    DropdownModule,
    FormsModule,
    Toast,
    Button
  ],
  templateUrl: './homepage.component.html',
  providers: [MessageService],  // Provide here or in a shared module
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  apiService = inject(ApiService);
  messageService = inject(MessageService);

  notificationForm: any = {
    id: 0,
    message: "",
    recipient: "",
    type: "email"
  };

  typeOptions = [
    { label: 'Email', value: 'email' },
    { label: 'App Notification', value: 'APP_NOTIFICATION' }
  ];


  createNotification() {
    this.apiService.createNotification(this.notificationForm).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Notification created' });
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create notification' });
      }
    });  }
}
