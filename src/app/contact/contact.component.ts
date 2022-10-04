import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  template: `<div>
    <h2>{{ currentMessage }}</h2>
    <p>
      Enter msg: <input type="text" #message />
      <button (click)="sendMessage(message.value)">Send message</button>
    </p>
  </div>`,
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  currentMessage: any;
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notificationSubject.subscribe((d) => {
      this.currentMessage = d;
    });
  }

  // @ts-ignore
  sendMessage(data) {
    this.notificationService.sendNotification(data);
    console.log('d', data);
  }
}
