import { Injectable } from '@angular/core';
import { ValorantMap } from './map';

type MapCollection = { [name: string]: ValorantMap };

@Injectable()
export class MapService {
  private readonly cachedMaps: Promise<MapCollection>;

  constructor() {
    this.cachedMaps = this.loadMaps();
  }

  async getMap(name: string): Promise<ValorantMap> {
    const maps = await this.cachedMaps;
    return maps[name];
  }

  async getMaps() {
    const maps = await this.cachedMaps;
    return Object.values(maps);
  }

  private async loadMaps() {
    const maps: MapCollection = {};
    const mapData = [
      ['ascent', 'Ascent'],
      ['split', 'Split']
    ];

    for (const [name, caption] of mapData) {
      maps[name] = this.createMap(name, caption);
    }

    return maps;
  }

  private createMap(name: string, caption: string) {
    return new ValorantMap(name, caption);
  }
}
