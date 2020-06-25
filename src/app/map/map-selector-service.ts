import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';

import { MapService } from './map-service';
import { ValorantMap } from './map';

@Injectable()
export class MapSelectorService {
  readonly map: Observable<ValorantMap>;
  readonly mapPublisher = new ReplaySubject<ValorantMap>();

  constructor(private service: MapService) {
    this.map = this.mapPublisher.asObservable();
  }

  async selectMap(name: string) {
    this.mapPublisher.next(await this.service.getMap(name));
  }
}
