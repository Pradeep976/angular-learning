import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'codesandbox-template-angular';

  // Subjects types
  // 1. Subject - Has no initial value and replay not available
  // 2. BehaviorSubject - Requires initial value and emits current value to new subs
  // 3. AsyncSubject - Emits latest value to subs when it completes an async task
  // 4. ReplaySubject - Replays a specific number of last values to new subs

  // BehaviorSubject holds one value, when it is subscribed it emits the
  // value immediately
  // Subject does not hold a value

  ngOnInit() {
    // Normal Subject
    // Until something is emitted with next method in the subject
    // the subs will not get notified
    const subject = new Subject();

    subject.subscribe((d) => console.log('Subj sub 1', d));
    subject.next(2020);
    subject.subscribe((d) => console.log('Subj sub 2', d));
    subject.next(2021);

    // BehaviorSubject
    // But with bSubjects , subs wil get notified with the default value
    // itself - it holds and emits the init value
    // it holds init value or last emitted value
    const behaviorSubject = new BehaviorSubject<number>(2022);
    behaviorSubject.subscribe((d) => console.log('bSubj 1 ', d));
    behaviorSubject.next(2023);
    behaviorSubject.subscribe((d) => console.log('bSubj 2 ', d));

    // Output
    // Subj sub 1 2020
    // Subj sub 1 2021
    // Subj sub 2 2021
    // bSubj 1  2022
    // bSubj 1  2023
    // bSubj 2  2023
  }
}
