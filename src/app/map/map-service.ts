import { Injectable } from '@angular/core';
import { Map } from './map';

type MapCollection = { [name: string]: Map };

@Injectable()
export class MapService {

  private readonly cachedMaps: Promise<MapCollection>;

  constructor() {
    this.cachedMaps = this.loadMaps();
  }

  async getMap(name: string): Promise<Map> {
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
      ['split', 'Split'],
      ['bind', 'Bind']
    ];
    for(const [name, caption] of mapData) {
      maps[name] = this.createMap(name, caption);
    }
    return maps;
  }

  private createMap(name: string, caption: string) {
    return new Map(name, caption);
  }
}
