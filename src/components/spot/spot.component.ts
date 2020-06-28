import { Component } from '@angular/core';

import { SpotSelectorService } from '../../services';
import { Spot, Location, UniqueSpot } from '../../models';
import { SpotView } from '../../views';

@Component({
  selector: 'v-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent {
  spot: SpotView;

  constructor(private service: SpotSelectorService) {
    this.service.spot.subscribe(this.setSpot.bind(this));
  }

  private setSpot(unique: UniqueSpot): void {
    this.spot = this.toView(unique.location, unique.spot);
  }

  private toView(location: Location, spot: Spot): SpotView {
    return new SpotView(location, spot);
  }
}
