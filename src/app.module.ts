import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppComponent,
  SpotGalleryComponent,
  LocationsComponent
} from './components';
import {
  LocationService,
  LocationSelectorService
} from './services';

@NgModule({
  declarations: [
    AppComponent,
    SpotGalleryComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LocationService,
    LocationSelectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
