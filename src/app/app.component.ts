import { Component } from '@angular/core';
import { FetchJsonService } from './fetch-json.service';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private jsonData: Data;
  constructor(private _fetchJsonService: FetchJsonService) {
    this.jsonData = undefined;
  }
  ngOnInit() {
  }
  fetchData(){
    this._fetchJsonService.getData().subscribe(data => {
      this.jsonData = data;
      console.log("Data Fetched");
      console.log(JSON.stringify(this.jsonData));
    });
  }
}
