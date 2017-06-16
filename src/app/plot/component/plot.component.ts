import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'plot',
  templateUrl: 'app/plot/component/plot.component.html',
  styleUrls: ['app/plot/component/plot.component.css'],
})
export class PlotComponent implements OnInit {
  @Input() theData:any; 
  isLoaded:boolean = false;

  constructor() {}

  ngOnInit() {
  }
}
