import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Data } from './data';
import 'rxjs/add/operator/map';

@Injectable()
export class FetchJsonService {
  private baseUrl = "./assets/data.json";
  private jsonData: Data;

  constructor(private http: Http) { }
  ngOnInit(){}
  getData() {
    return this.http.get(this.baseUrl).map((res: Response) => {
      return res.json();
    });
  }
}
