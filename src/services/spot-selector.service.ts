import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { Location, Spot, UniqueSpot } from '../models';

@Injectable()
export class SpotSelectorService {
  readonly spot: Observable<UniqueSpot>;

  private readonly spotPublisher = new ReplaySubject<UniqueSpot>();

  constructor() {
    this.spot = this.spotPublisher.asObservable();
  }

  select(location: Location, spot: Spot): void {
    this.spotPublisher.next(new UniqueSpot(spot, location));
  }
}
