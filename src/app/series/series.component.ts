import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SERIES } from '../mock-series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {


 
  series = SERIES;
  selectedSerie: Serie;



  constructor() { }

  ngOnInit() {
  }


  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
