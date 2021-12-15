import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { PlanesComponent } from './planes/planes.component';
import { TrucksComponent } from './trucks/trucks.component';
import { CondoComponent } from './condo/condo.component';
import { TownhomesComponent } from './townhomes/townhomes.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    PlanesComponent,
    TrucksComponent,
    CondoComponent,
    TownhomesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
