import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-townhomes',
  templateUrl: './townhomes.component.html',
  styleUrls: ['./townhomes.component.css']
})
export class TownhomesComponent implements OnInit {


isRed: boolean = false;
isGreen: boolean= false
custom: string = "red"
  constructor() { }

  ngOnInit(): void {
  }
  makeRed(){
    this.isGreen=false;
    this.isRed=true;
    this.custom = "white"
  }  
  makeGreen(){
    this.isGreen=true;
    this.isRed=false;
    this.custom="black"
  }  

}
