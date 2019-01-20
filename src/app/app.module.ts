import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SerieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
