import { Component, OnInit } from '@angular/core';
import { SharedServiceDataModel } from "../../shared/shared.model";
import { SharedService } from "../../shared/shared.service";

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/component/dashboard.component.html',
  styleUrls: ['app/dashboard/component/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
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
