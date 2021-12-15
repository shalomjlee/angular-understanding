import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground';
  showVehicles:boolean=true;
  showHouses: boolean = false;

  toggleMenu() {
    //this toggles menu which then makes it not showvehicles, a boolean value
    this.showVehicles = !this.showVehicles;
    this.showHouses = !this.showHouses
  }
}
