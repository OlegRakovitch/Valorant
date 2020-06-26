import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { Location } from '../models';
import { LocationService } from './location.service';

@Injectable()
export class LocationSelectorService {
  readonly location: Observable<Location>;

  private readonly locationPublisher = new ReplaySubject<Location>();

  constructor(private service: LocationService) {
    this.location = this.locationPublisher.asObservable();
  }

  async selectLocation(name: string): Promise<void> {
    this.locationPublisher.next(this.service.getLocation(name));
  }
}
