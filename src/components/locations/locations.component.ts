import { Component } from '@angular/core';

import { Location } from '../../models';
import { LocationService, LocationSelectorService } from '../../services';
import { LocationView } from '../../views';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  locations: LocationView[];

  constructor(
    private selector: LocationSelectorService,
    service: LocationService
  ) {
    this.locations = this.toViews(service.getLocations());
  }

  select(name: string): void {
    this.selector.selectLocation(name);
  }

  private toViews(locations: Location[]): LocationView[] {
    return locations.map(location => new LocationView(location));
  }
}