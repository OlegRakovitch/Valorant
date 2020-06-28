import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppComponent,
  LocationsComponent,
  MapComponent,
  SpotComponent
} from './components';
import {
  LocationService,
  LocationSelectorService,
  SpotsService,
  SpotSelectorService
} from './services';
import {
  SpyDirective
} from './directives';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    MapComponent,
    SpotComponent,
    SpyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LocationService,
    LocationSelectorService,
    SpotsService,
    SpotSelectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
