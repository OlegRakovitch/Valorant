import { Spot } from './spot';

export class Location {
  constructor(
    readonly name: string,
    readonly caption: string,
    readonly spots: Spot[]
  ) { }

  findSpotByName(name: string): Spot {
    return this.spots.find(spot => spot.name === name);
  }
}
