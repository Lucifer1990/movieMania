import { Component, OnInit } from '@angular/core';
import { SharedServiceDataModel } from "../../shared/shared.model";
import { SharedService } from "../../shared/shared.service";

@Component({
  selector: 'basic-information-grid',
  templateUrl: 'app/basic-information/component/basic-information.component.html',
  styleUrls: ['app/basic-information/component/basic-information.component.css'],
})
export class BasicInformationComponent implements OnInit {
  isLoaded:boolean = false;
  allInfo: SharedServiceDataModel = <SharedServiceDataModel>{};

  constructor(private _SharedService : SharedService) {}

  ngOnInit() {
    this.getAlldata();
  }

  getAlldata() {
    this._SharedService
      .getAllInformation()
      //.subscribe((result: SharedServiceDataModel) => {
        .subscribe(result => {
        for (let key in result) {
          this.allInfo[key] = result[key];
        }
        this.isLoaded = true;
      }, error => {
      });
  }

}
