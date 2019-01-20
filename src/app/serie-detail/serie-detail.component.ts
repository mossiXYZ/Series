import { Component, OnInit, Input  } from '@angular/core';
import { Serie } from '../serie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  @Input() serie: Serie;

  constructor(  
    private route: ActivatedRoute,
    private serieService: SerieService,
    private location: Location )
    { }

  ngOnInit() {
    this.getSerie();
  }


  getSerie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serieService.getSerie(id).subscribe(serie => this.serie = serie);
  }

  goBack(): void {
    this.location.back();
  }
}
