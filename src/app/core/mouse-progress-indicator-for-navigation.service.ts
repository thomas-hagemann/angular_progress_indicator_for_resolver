import { Injectable } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MouseProgressIndicatorForNavigationService {
  constructor(private router: Router) {
    /* add progress class to body on NavigationStart */
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => document.body.classList.add('progress'));
    /* remove progress class to body when navigation process is stoped */
    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd ||
            event instanceof NavigationError ||
            event instanceof NavigationCancel
        )
      )
      .subscribe((e) => document.body.classList.remove('progress'));
  }
}
