import { Location, Spot } from '../models';

export class SpotView {
  readonly path: string;
  readonly caption: string;

  constructor(
    location: Location,
    spot: Spot
  ) {
    this.path = `${location.name}/${spot.name}.jpeg`;
    this.caption = spot.caption;
  }
}
