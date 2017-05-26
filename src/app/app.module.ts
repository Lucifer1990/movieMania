import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdCardModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

import 'hammerjs';

import { HeaderComponent } from "./header/component/header.component";
import { SearchComponent } from "./search/component/search.component";
import { DashboardComponent } from "./dashboard/component/dashboard.component";
import { PosterComponent } from "./poster/component/poster.component";
import { SharedService } from "./shared/shared.service";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
    MdInputModule,
    MdCardModule,
    HttpModule],
  declarations: [AppComponent,
    HeaderComponent,
    SearchComponent,
    DashboardComponent,
    PosterComponent],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
