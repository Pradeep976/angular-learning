import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'codesandbox-template-angular';

  ngOnInit() {
    // Observables
    // 1. Unicast - means that each subscriber has the own
    // instance of the Observables
    const observable = new Observable((obj) => {
      setTimeout(() => {
        obj.next(Math.random());
      });
    });

    // obs sub 1
    observable.subscribe((res) => console.log('obs sub 1', res));

    // obs sub 2
    observable.subscribe((res) => console.log('obs sub 2', res));

    // Subjects
    // 1. Multicast - means that only one instance of the subject
    // is shared to all subscribers
    const subject = new Subject();

    // subj sub 1
    subject.subscribe((res) => console.log('subj sub 1', res));

    // subj sub 2
    subject.subscribe((res) => console.log('subj sub 2', res));

    subject.next(Math.random());
  }
}
