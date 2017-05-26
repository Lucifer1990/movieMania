import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared/shared.service";
import { SharedServiceDataModel } from "../../shared/shared.model";

@Component({
  selector: 'poster',
  templateUrl: 'app/poster/component/poster.component.html',
  styleUrls: ['app/poster/component/poster.component.css']
})
export class PosterComponent implements OnInit {
  allInfo: SharedServiceDataModel = <SharedServiceDataModel>{};
  isLoaded:boolean = false;
  constructor(private _SharedService: SharedService) { }

  ngOnInit() {
    this._SharedService
      .getAllInformation()
      .subscribe(result => {
        for (let key in result) {
          this.allInfo[key] = result[key];
        }
        this.isLoaded = true;
      }, error => {
      });
  }
}