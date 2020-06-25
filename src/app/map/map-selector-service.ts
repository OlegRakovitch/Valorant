import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Map } from './map';
import { MapService } from './map-service';

@Injectable()
export class MapSelectorService {

  readonly map: Observable<Map>;
  readonly mapPublisher = new ReplaySubject<Map>();

  constructor(private service: MapService) {
    this.map = this.mapPublisher.asObservable();
  }

  async selectMap(name: string) {
    this.mapPublisher.next(await this.service.getMap(name));
  }
}
