import { Component, OnInit } from '@angular/core';
import { SharedServiceDataModel } from "../../shared/shared.model";
import { SharedService } from "../../shared/shared.service";

@Component({
  selector: 'imdb',
  templateUrl: 'app/imdb-rating/component/imdb-rating.component.html',
  styleUrls: ['app/imdb-rating/component/imdb-rating.component.css'],
})
export class ImdbRatingComponent implements OnInit {
  isLoaded:boolean = false;
  allInfo: SharedServiceDataModel = <SharedServiceDataModel>{};

  constructor(private _SharedService : SharedService) {}

  ngOnInit() {
    //this.getAlldata();
  }

  getAlldata() {
    this._SharedService
      .getAllInformationForFirstTime()
      //.subscribe((result: SharedServiceDataModel) => {
        .subscribe(result => {
        for (let key in result) {
          this.allInfo[key] = result[key];
        }
        this._SharedService.setAllInformation(this.allInfo);
        this.isLoaded = true;
      }, error => {
      });
  }

}
