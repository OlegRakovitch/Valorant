import { Location } from '../models';

export class LocationView {
  readonly name: string;
  readonly caption: string;
  readonly path: string;

  constructor(location: Location) {
    this.name = location.name;
    this.caption = location.caption;
    this.path = `${location.name}.jpeg`;
  }
}
