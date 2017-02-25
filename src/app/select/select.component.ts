import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  public cities: hw1.City[];
  public isCIS: boolean = null;

  @Output()
  public clickOnCity: EventEmitter<hw1.City> = new EventEmitter<hw1.City> ();

  constructor() {
    this.cities = [
      {
        name: "Минск",
        photo: "assets/minsk01.jpg",
        temperature: 3,
        hotel: "Europe",
        hotelPhoto: "assets/minsk-hotel-europe.jpg",
        followers: 25,
        following: 2,
        isCIS: true
      },
      {
        name: "Москва",
        photo: "assets/moskva01.jpg",
        temperature: -10,
        hotel: "Космос",
        hotelPhoto: "assets/moskva-hotel-cosmos.jpg",
        followers: 5000,
        following: 1000,
        isCIS: true
      },
      {
        name: "Киев",
        photo: "assets/kiev01.jpg",
        temperature: -3,
        hotel: "Premier",
        hotelPhoto: "assets/kiev-hotel-premier.jpg",
        followers: 2300,
        following: 480,
        isCIS: true
      },
      {
        name: "Вильнюс",
        photo: "assets/vilnius01.jpg",
        temperature: 0,
        hotel: "Novotel",
        hotelPhoto: "assets/vilnius-hotel-novotel.jpg",
        followers: 2400,
        following: 500,
        isCIS: false
      },
      {
        name: "Рига",
        photo: "assets/riga01.jpg",
        temperature:-1,
        hotel: "Mercure",
        hotelPhoto: "assets/riga-hotel-mercure.jpg",
        followers: 1800,
        following: 270,
        isCIS: false
      },
      {
        name: "Таллин",
        photo: "assets/tallinn01.jpg",
        temperature: 0,
        hotel: "Meriton",
        hotelPhoto: "assets/tallinn-hotel-meriton.jpg",
        followers: 2100,
        following: 330,
        isCIS: false
      }
    ];
  }

  ngOnInit() {
    this.selectCity(this.cities[0]);
  }

  public selectCity(city: hw1.City){
    this.clickOnCity.next(city);
  }

  public setCIS(isCIS: boolean){
    this.isCIS = isCIS;
  }

}
