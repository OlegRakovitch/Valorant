import { Location, Spot } from '../models';

export class SpotView {
  readonly name: string;
  readonly path: string;
  readonly caption: string;
  readonly coords: string;

  constructor(
    location: Location,
    spot: Spot
  ) {
    this.name = spot.name;
    this.path = `${location.name}/${spot.name}.jpeg`;
    this.caption = spot.caption;
    this.coords = this.toCoords(spot.area);
  }

  private toCoords(area: number[]): string {
    return `${area}`;
  }
}
