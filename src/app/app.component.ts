import { Component } from '@angular/core';
import { MapSelectorService } from './map/map-selector-service';
import { MapService } from './map/map-service';
import { Map } from './map/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valorant';

  maps: Map[];

  constructor(
    private map: MapSelectorService,
    private mapsLoader: MapService
  ) {
    this.loadMaps();
  }

  private async loadMaps() {
    this.maps = await this.mapsLoader.getMaps();
  }

  async selectMap(name: string) {
    await this.map.selectMap(name);
  }
}
