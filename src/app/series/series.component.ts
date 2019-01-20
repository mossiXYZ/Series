import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  serie : Serie = {
   
      idSERIE: 1,
      titre: "How I Met Your Mother",
      description: "Ted has fallen in love. It all started when his best friend, Marshall, drops the bombshell ",
      annee: "2006",
      image: "http://www.gstatic.com/tv/thumb/tvbanners/9916255/p9916255_b_v8_aa.jpg",
  };
 
  constructor() { }

  ngOnInit() {
  }

}
