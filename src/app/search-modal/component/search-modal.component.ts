import { Component, OnInit } from '@angular/core';
import { SharedServiceDataModel } from "../../shared/shared.model";
import { SharedService } from "../../shared/shared.service";

@Component({
    selector: 'modal',
    templateUrl: 'app/search-modal/component/search-modal.component.html',
    styleUrls: ['app/search-modal/component/search-modal.component.css'],
})
export class SearchModalComponent implements OnInit {
    errorMsg: string = "";
    movieName: string;
    releaseYear: string;
    isLoaded: boolean = false;
    showLoader: boolean = false;
    searchCriteriaObject: any;
    allInfo: SharedServiceDataModel = <SharedServiceDataModel>{};

    constructor(private _SharedService: SharedService) { }

    ngOnInit() {
        this.openNav();
    }

    searchMovie() {
        this.showLoader = true;
        this.searchCriteriaObject = {
            movieName: this.movieName,
            releaseYear: this.releaseYear
        }

        if (this.movieName != "" && this.movieName != undefined && this.movieName != null) {
            this.callSharedService();
        } else {
            this.showLoader = false;
            this.errorMsg = "Please enter name!!";
        }
    }

    callSharedService() {
        this._SharedService
            .getAllInformationForFirstTime(this.searchCriteriaObject)
            .subscribe(result => {
                this.showLoader = false;

                if (result.Response == "False") {
                    this.errorMsg = result.Error;
                }
                else if (result.Response == "True") {
                    for (let key in result) {
                        this.allInfo[key] = result[key];
                    }
                    this._SharedService.setAllInformation(this.allInfo);
                    this.closeNav();
                }
                this.isLoaded = true;
            }, error => {
                this.showLoader = false;
                this.errorMsg = error.statusText;
            });
    }

    openNav() {
        document.getElementById("myNav").style.height = "100%";
    }

    closeNav() {
        document.getElementById("myNav").style.height = "0%";
    }

    reset(){
        this.movieName = "";
        this.releaseYear = "";
    }

}
