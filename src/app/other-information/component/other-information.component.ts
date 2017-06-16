import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'other-information',
  templateUrl: 'app/other-information/component/other-information.component.html',
  styleUrls: ['app/other-information/component/other-information.component.css'],
})
export class OtherInformationComponent implements OnInit {
  @Input() theData:any; 
  isLoaded:boolean = false;

  constructor() {}

  ngOnInit() {
  }
}
