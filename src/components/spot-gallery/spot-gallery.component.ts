import { Component } from '@angular/core';

import { Location } from '../../models';
import { SpotView } from '../../views';
import { LocationSelectorService } from '../../services';

@Component({
  selector: 'spot-gallery',
  templateUrl: './spot-gallery.component.html',
  styleUrls: ['./spot-gallery.component.css']
})
export class SpotGalleryComponent {
  spots: SpotView[];

  constructor(service: LocationSelectorService) {
    this.subscribe(service);
  }

  subscribe(service: LocationSelectorService): void {
    service.location.subscribe(this.loadSpots.bind(this));
  }

  private loadSpots(location: Location): void {
    this.spots = this.toViews(location);
  }

  private toViews(location: Location): SpotView[] {
    return location.spots.map(spot => new SpotView(location, spot));
  }
}
