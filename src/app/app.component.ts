import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'codesandbox-template-angular';

  ngOnInit() {
    // Promises 
    // 1. Can return only one value
    // 2. Eager - will run before called then
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise working');
        resolve('Promise working1');
      }, 1000);
    });
    promise.then((res) => {
      console.log(res);
    });

    // Observables
    // 1. Can return multiple values
    // 2. Lazy - called only when subscribed
    // 3. Should be unsubscribed 
    // 4. Operators are available such as filter
    const observables = new Observable((obj) => {
      setTimeout(() => {
        obj.next('Observable working');
        obj.next('Observable working1');
      }, 1000);
    });

    observables.subscribe((obj) => console.log(obj));
  }
}
