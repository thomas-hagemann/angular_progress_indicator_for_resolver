import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataResolverService implements Resolve<number> {
  /* This "data" needs 1 second to be loaded. */
  resolve(): Observable<number> {
    return of(1).pipe(delay(1000));
  }
}
