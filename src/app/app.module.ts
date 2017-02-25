import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { DescriptionComponent } from './description/description.component';
import { SelectComponent } from './select/select.component';
import { CityFilterPipe } from './city-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    DescriptionComponent,
    SelectComponent,
    CityFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
