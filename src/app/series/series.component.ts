import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {


 
  series : Serie[];
  selectedSerie: Serie;



  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(): void {
    this.serieService.getSeries()
      .subscribe(series => this.series = series)
  }
  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
