import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codesandbox-template-angular';
  
  ngOnInit() {
    
    // We know how to pass data from parent to child using @Input()
    // Also from child to parent using @Output() emitter
    // But what to do when we need to share data from one component that is not at all related to another component ?
    
  }
}
