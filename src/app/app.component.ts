import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public select: hw1.City;

  constructor(){}

  selectCity($event){
    this.select = $event;
  }
}
