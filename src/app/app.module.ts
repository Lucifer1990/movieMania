import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdCardModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import {MdProgressBarModule} from '@angular/material';
import { MdInputModule } from '@angular/material';
import { ChartModule } from 'angular2-highcharts';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import 'hammerjs';

import { HeaderComponent } from "./header/component/header.component";
import { SearchComponent } from "./search/component/search.component";
import { DashboardComponent } from "./dashboard/component/dashboard.component";
import { PosterComponent } from "./poster/component/poster.component";
import { SharedService } from "./shared/shared.service";
import { BasicInformationComponent } from "./basic-information/component/basic-information.component";
import { PlotComponent } from "./plot/component/plot.component";
import { OtherInformationComponent } from "./other-information/component/other-information.component";
import { PeopleComponent } from "./people/component/people.component";
import { SearchModalComponent } from "./search-modal/component/search-modal.component";
import { RatingComponent } from "./third-party-rating/component/third-party-rating.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: SearchComponent, data: { title: 'home' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'dashboard' } },
]
@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdInputModule,
    MdCardModule,
    ChartModule.forRoot(require('highcharts')),
    FormsModule,
    Angular2FontawesomeModule,
    HttpModule],
  declarations: [AppComponent,
    HeaderComponent,
    SearchComponent,
    DashboardComponent,
    PosterComponent,
    BasicInformationComponent,
    PlotComponent,
    OtherInformationComponent,
    PeopleComponent,
    RatingComponent,
    SearchModalComponent
    ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
