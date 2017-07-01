import { Component, Injector, Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/map';

import { SharedServiceDataModel, SearchCriteriaDataModel } from "./shared.model";


@Injectable()
export class SharedService {
    constructor(private _Http: Http) {
    }

    private basicInfo = new Subject<object>();

    setAllInformation(data:any) {
        this.basicInfo.next(data);
    }
    getAllInformation(): Observable<any> {
        return this.basicInfo.asObservable();
    }

    getAllInformationForFirstTime(searchCriteriaObject:SearchCriteriaDataModel) {

        var movie = searchCriteriaObject.movieName;
        var year = ((searchCriteriaObject.releaseYear == "" || searchCriteriaObject.releaseYear == undefined)? "" : ("&y="+searchCriteriaObject.releaseYear));
        let url: string = "http://www.omdbapi.com/?t="+movie+year+"&plot=full"+"&apikey=c22bc403";

        return this._Http.get(url)
                .map(response => response.json());
            //.map(res => res as SharedServiceDataModel);
    }

}
