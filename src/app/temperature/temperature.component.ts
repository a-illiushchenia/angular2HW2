import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  @Input("city")
  public city: hw1.City;

  constructor() { }

  ngOnInit() {
  }

}
