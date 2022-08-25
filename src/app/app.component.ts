import { Component, VERSION } from '@angular/core';
import { MouseProgressIndicatorForNavigationService } from './core/mouse-progress-indicator-for-navigation.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(
    private mouseProgress: MouseProgressIndicatorForNavigationService
  ) {}
}
