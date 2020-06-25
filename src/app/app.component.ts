import { Component } from '@angular/core';

import { MapSelectorService, MapService, ValorantMap } from './map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'valorant';

  maps: ValorantMap[];

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
