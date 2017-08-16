import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestProvider {
  private coffeeUrl = "../data/coffee.json";
  private succulentUrl = "../data/succulent.json"
  private teaUrl = "../data/tea.json"
  private yogurtUrl = "../data/yogurt.json"

  constructor(public http: Http) {
  }

  getSucclents() {
    return this.getData(this.succulentUrl);
  }

  getTea() {
    return this.getData(this.teaUrl);
  }

  getCoffees() {
    return this.getData(this.coffeeUrl);
  }

  getYogurt() {
    return this.getData(this.yogurtUrl);
  }

  private getData(url: string){
    return this.http.get(url)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
