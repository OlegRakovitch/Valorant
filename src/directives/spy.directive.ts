import { Directive, OnInit, OnDestroy, HostListener } from '@angular/core';

import { SpotsService } from '../services';
import { waitUntil } from '../utils';

declare var $: any;
interface Image {
  width: number;
  naturalWidth: number;
}

@Directive({selector: '[vSpy]'})
export class SpyDirective implements OnInit, OnDestroy {
  private image: Image;

  constructor(
    private spotsService: SpotsService
  ) { }

  ngOnInit(): void {
    this.image = $('div.map img.image')[0];
    this.provideRatio();
  }

  private async provideRatio(): Promise<void> {
    await waitUntil(this.imageRendered.bind(this));
    this.spotsService.setRatio(this.calculateRatio());
  }

  @HostListener('window:resize')
  onResize(): void {
    this.spotsService.setRatio(this.calculateRatio());
  }

  private imageRendered(): boolean {
    return !!this.image.width && !!this.image.naturalWidth;
  }

  private calculateRatio(): number {
    return this.image.width / this.image.naturalWidth;
  }

  ngOnDestroy(): void {
  }
}
