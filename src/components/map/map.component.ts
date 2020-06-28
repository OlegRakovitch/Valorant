import { Component } from '@angular/core';

import { LocationSelectorService, SpotsService, SpotSelectorService } from '../../services';
import { Location, Spot } from '../../models';
import { MapView, SpotView } from '../../views';

@Component({
  selector: 'v-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  map: MapView;
  spots: SpotView[];
  private location: Location;

  constructor(
    private spot: SpotSelectorService,
    service: LocationSelectorService,
    provider: SpotsService
  ) {
    service.location.subscribe(this.updateMap.bind(this));
    provider.calculatedLocation.subscribe(this.updateSpots.bind(this));
  }

  selectSpot(name: string): void {
    const spot = this.location.findSpotByName(name);
    this.spot.select(this.location, spot);
  }

  private updateMap(location: Location): void {
    this.location = location;
    this.map = this.toMapView(location);
  }

  private toMapView(location: Location): MapView {
    return new MapView(location);
  }

  private updateSpots(spots: Spot[]): void {
    this.spots = this.toSpotViews(spots);
  }

  private toSpotViews(spots: Spot[]): SpotView[] {
    return spots.map(spot => new SpotView(this.location, spot));
  }
}
