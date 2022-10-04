import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notificationSubject = new BehaviorSubject<string>('Default');
  constructor() {}

  // @ts-ignore
  sendNotification(data) {
    this.notificationSubject.next(data);
  }
}
