import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Item } from './items/item';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http,
            
  ) {
    
  }

  public getAllelectronics(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  headers.append('Access-Control-Allow-Credentials', 'true');
  let options = new RequestOptions({ headers: headers });
    return this.http
      .get(API_URL + '/electronics', options)
      .map(response => {
        console.log('response from server: ' + response.json());
        return response.json();
      })
      .catch(this.handleError);
  }

 public getAllclothings(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  headers.append('Access-Control-Allow-Credentials', 'true');
  let options = new RequestOptions({ headers: headers });
    return this.http
      .get(API_URL + '/clothings', options)
      .map(response => {
       return response.json();
      })
      .catch(this.handleError);
  }

  public addinelectronics(item: Item) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('Accept', 'application/x-www-form-urlencoded');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  headers.append('Access-Control-Allow-Credentials', 'true');
  let options = new RequestOptions({ headers: headers });
    return this.http
      .post(API_URL + '/electronicsadd', item )
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }


 public addinclothings(item: Item) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('Accept', 'application/x-www-form-urlencoded');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  headers.append('Access-Control-Allow-Credentials', 'true');
  let options = new RequestOptions({ headers: headers });
    return this.http
      .post(API_URL + '/clothingsadd', item )
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }
 


 public addincart(item: Item, x: string) {
    return this.http
      .post(API_URL + '/cart/', x +'/'+ item)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public deleteincart(itemname: string, x: string) {
    return this.http
      .delete(API_URL + '/cart/'+ x + '/' + itemname)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}