import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpotGallery } from './map/spot-gallery.component';
import { SpotService } from './map/spot-service';
import { MapSelectorService } from './map/map-selector-service';
import { MapService } from './map/map-service';

@NgModule({
  declarations: [
    AppComponent,
    SpotGallery
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
