import { Component, Injector, Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/map';

import { SharedServiceDataModel } from "./shared.model";


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

    getAllInformationForFirstTime() {
        let url: string;
        let formData: {};
        url = "app/json/allInfo.json";
        formData = {
            name: "logan",
            year: "2017"
        }

        return this._Http.get(url,formData)
                .map(response => response.json());
            //.map(res => res as SharedServiceDataModel);
    }

}
