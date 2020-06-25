import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpotGalleryComponent, SpotService } from './map/spot';
import { MapSelectorService, MapService } from './map';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotGalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SpotService,
    MapService,
    MapSelectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
