import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  //first created this, then went to cars component html to create ngFor
  makes: string[] = ["honda", "BMW", "Lexus", "Chevy"]

  constructor() { }

  ngOnInit(): void {
  }

}
