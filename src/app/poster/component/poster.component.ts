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
  returnArray:any = [];
  isLoaded: boolean = false;
  constructor(private _SharedService: SharedService) { }

  ngOnInit() {
    this._SharedService
      .getAllInformation()
      .subscribe(result => {
        for (let key in result) {
          this.allInfo[key] = result[key];
        }
        this.loopGenre(this.allInfo);    
        this.isLoaded = true;
      }, error => {
      });
  }

  loopGenre(allInfo: SharedServiceDataModel) {
    this.returnArray = [];
    var genre = allInfo.Genre
    var genre_array = genre.split(',');

    for (var i = 0; i < genre_array.length; i++) {
      // Trim the excess whitespace.
      genre_array[i] = genre_array[i].replace(/^\s*/, "").replace(/\s*$/, "");  
      this.returnArray.push(genre_array[i]);
    }
  }
}