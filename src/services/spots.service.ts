import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { LocationSelectorService } from './location-selector.service';
import { Location, Spot } from '../models';


@Injectable()
export class SpotsService {
  readonly calculatedLocation: Observable<Spot[]>;

  private readonly locationPublisher = new ReplaySubject<Spot[]>();
  private location: Location;

  constructor(service: LocationSelectorService) {
    this.calculatedLocation = this.locationPublisher.asObservable();
    service.location.subscribe(this.saveLocation.bind(this));
  }

  setRatio(ratio: number): void {
    const location = this.adjustLocation(ratio);
    this.locationPublisher.next(location.spots);
  }

  private saveLocation(location: Location): void {
    this.location = location;
  }

  private adjustLocation(ratio: number): Location {
    const spots = this.location.spots.map(spot => this.adjustSpot(ratio, spot));
    return new Location(this.location.name, this.location.caption, spots);
  }

  private adjustSpot(ratio: number, spot: Spot): Spot {
    const area = this.adjustArea(ratio, spot.area);
    return new Spot(spot.caption, area, spot.name);
  }

  private adjustArea(ratio: number, area: number[]): number[] {
    return area.map(coord => coord * ratio);
  }
}
