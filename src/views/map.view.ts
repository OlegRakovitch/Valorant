import { Location } from '../models';
export class MapView {
  readonly path: string;

  constructor(location: Location) {
    this.path = `${location.name}_map.png`;
  }
}
