import { Directive, OnInit, OnDestroy, HostListener } from '@angular/core';

import { SpotsService, LocationSelectorService } from '../services';
import { waitUntil } from '../utils';

declare var $: any;
interface Image {
  width: number;
  naturalWidth: number;
}

@Directive({selector: '[vSpy]'})
export class SpyDirective {
  private image: Image;

  constructor(
    private spotsService: SpotsService,
    maps: LocationSelectorService
  ) {
    maps.location.subscribe(this.provideRatio.bind(this));
  }

  @HostListener('window:resize')
  onResize(): void {
    this.provideRatio();
  }

  private async provideRatio(): Promise<void> {
    await waitUntil(this.imageRendered.bind(this));
    this.image = this.getImage();
    this.spotsService.setRatio(this.calculateRatio());
  }

  private getImage(): Image {
    return $('div.map img.image')[0];
  }

  private imageRendered(): boolean {
    const image = this.getImage();
    return !!image && !!image.width && !!image.naturalWidth;
  }

  private calculateRatio(): number {
    return this.image.width / this.image.naturalWidth;
  }
}
