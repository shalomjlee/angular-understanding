import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component'
import { PlanesComponent } from './planes/planes.component';
import { TrucksComponent } from './trucks/trucks.component';
import { TownhomesComponent } from './townhomes/townhomes.component';
import { CondoComponent } from './condo/condo.component';
//routes are imported here from angular router
//Can name path anything you want - it does not matter
//after naming routes, go to app-component html modules to then set up routes using routerlink
//can't have slashes in routes - data type of routes is routestype - takes in array of objects.
//
const routes: Routes = [
  {path: 'cars', component: CarsComponent},
  {path: 'trucks', component: TrucksComponent},
  {path: 'planes', component: PlanesComponent},
  {path: 'condos', component: CondoComponent},
  {path: 'townhomes', component: TownhomesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
