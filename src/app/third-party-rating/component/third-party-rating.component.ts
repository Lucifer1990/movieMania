import { Component, OnInit } from '@angular/core';
import { SharedServiceDataModel } from "../../shared/shared.model";
import { SharedService } from "../../shared/shared.service";

@Component({
    selector: 'rating',
    templateUrl: 'app/third-party-rating/component/third-party-rating.component.html',
    styleUrls: ['app/third-party-rating/component/third-party-rating.component.css'],
})
export class RatingComponent implements OnInit {
    options: any;
    categories: any = [];
    data: any = [];
    isLoaded: boolean = false;
    allInfo: object = {};

    constructor(private _SharedService: SharedService) {

    }

    ngOnInit() {
        this.getRatingData();
    }

    getRatingData() {
        this._SharedService
            .getAllInformation()
            .subscribe(result => {
                for (let key in result.Ratings) {
                    var source = result.Ratings[key].Source;
                    this.categories.push(source);

                    var value = result.Ratings[key].Value;
                    if (value.charAt(value.length - 1) == '%') {
                        value = parseInt(value.substring(0, value.length - 1));
                    }
                    else if (value.indexOf("/") != -1) {
                        var object = value.split("/");
                        var firstValue = parseInt(object[0]);
                        var lastValue = parseInt(object[1]);
                        value = ((firstValue / lastValue) * 100);
                    }
                    this.data.push(value);
                }
                console.log(this.categories);
                console.log(this.data);
                this.isLoaded = true;
                this.loadChart();
            }, error => {
            });
    }

    loadChart() {
        this.options = {
            chart: {
                type: 'bar',
                height: 250,
                width: 412
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.categories
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rating ( % )',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                data: this.data,
                name: 'Rating',
            }]
        };
    }

}
