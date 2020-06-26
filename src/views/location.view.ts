import { Location } from '../models';

export class LocationView {
  readonly name: string;
  readonly caption: string;

  constructor(location: Location) {
    this.name = location.name;
    this.caption = location.caption;
  }
}
