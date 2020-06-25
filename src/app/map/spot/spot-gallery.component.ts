import { ValorantMap } from '../map';
import { Component } from '@angular/core';
import { SpotService } from './spot-service';
import { Spot } from './spot';
import { MapSelectorService } from '../map-selector-service';

@Component({
  selector: 'app-spot-gallery',
  templateUrl: './spot-gallery.component.html',
  styleUrls: ['./spot-gallery.component.css']
})

export class SpotGalleryComponent {
  public spots: Spot[];

  constructor(
    private service: SpotService,
    maps: MapSelectorService
  ) {
    this.subscribe(maps);
  }

  public subscribe(maps: MapSelectorService) {
    maps.map.subscribe(this.loadSpots.bind(this));
  }

  private async loadSpots(map: ValorantMap) {
    this.spots = await this.service.loadSpots(map);
  }
}
