import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "../../shared/shared.service";
import { SharedServiceDataModel } from "../../shared/shared.model";

@Component({
  selector: 'people',
  templateUrl: 'app/people/component/people.component.html',
  styleUrls: ['app/people/component/people.component.css'],
})
export class PeopleComponent implements OnInit {
  allInfo: SharedServiceDataModel = <SharedServiceDataModel>{};
  returnArrayWriter:any = [];
  returnArrayActor:any = [];
  isLoaded: boolean = false;
  constructor(private _SharedService: SharedService) { }


  ngOnInit() {
    this._SharedService
      .getAllInformation()
      .subscribe(result => {
        for (let key in result) {
          this.allInfo[key] = result[key];
        }
        this.loopPeople(this.allInfo);    
        this.isLoaded = true;
      }, error => {
      });
  }

loopPeople(allInfo: SharedServiceDataModel) {
    var writer = this.allInfo.Writer;
    var actor = this.allInfo.Actors;
    var writer_array = writer.split(',');
    var actor_array = actor.split(',');

    for (var i = 0; i < writer_array.length; i++) {
      // Trim the excess whitespace.
      writer_array[i] = writer_array[i].replace(/^\s*/, "").replace(/\s*$/, "");  
      this.returnArrayWriter.push(writer_array[i]);
    }

    for (var i = 0; i < actor_array.length; i++) {
      // Trim the excess whitespace.
      actor_array[i] = actor_array[i].replace(/^\s*/, "").replace(/\s*$/, "");  
      this.returnArrayActor.push(actor_array[i]);
    }
  }
   
}
