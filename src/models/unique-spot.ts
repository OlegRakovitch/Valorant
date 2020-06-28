import { Spot } from './spot';
import { Location } from './location';

export class UniqueSpot {
  constructor(
    readonly spot: Spot,
    readonly location: Location
  ) { }
}
