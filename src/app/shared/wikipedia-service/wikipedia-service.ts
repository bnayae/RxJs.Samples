import { Component, Injectable } from '@angular/core';
import {Http, Response, URLSearchParams, RequestOptions, Headers} from '@angular/http';

//import 'rxjs/Rx' // import all rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

 
@Injectable()
export class WikipediaService {
  constructor(private http: Http) {    
  }
  
  search (term: string) : Observable<string[]> {
    let query = new URLSearchParams();
    query.set('action', 'opensearch');
    query.set('search', term);
    query.set('format', 'json');
    
    let headers = new Headers([
          { 'Content-Type': 'application/json; charset=utf-8' },
           {'Access-Control-Allow-Origin':'*'},
           {'Accept':'application/json'}]);
           
    let options = new RequestOptions(
                        {
                            headers: headers,
                            search: query,                        
                        });

    let result:Observable<string[]> = this.http
                .get('http://en.wikipedia.org/w/api.php?', options)
                .map((response:Response) => <string[]> response.json())
                .do(m => console.log(m)) //, this.handleError )
                .catch(this.handleError);
    return result;                
  }

  async searchToPromise (term: string) : Promise<string[]> {    
    let result:string[] = await this.search(term).toPromise();
    return result;                
  }

   private handleError(error: Response) :Observable<string[]>
    {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw<string[]>(error.json().error || 'Server error');
    }
}
