import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Icurrency } from 'src/model/cu';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {
// posturl!:`https://v6.exchangerate-api.com/v6/8c9c3d41dd30468d2360ad07/latest/USD`
currentid=`https://v6.exchangerate-api.com/v6`;
postid='8c9c3d41dd30468d2360ad07';

currenturl=`${this.currentid}/${this.postid}/latest/USD`;

  constructor(
    private _http: HttpClient
  ) { }


  fetchurl():Observable<any>{
    return this._http.get<any>(this.currenturl)
    .pipe(
      map((res:Icurrency)=>{
        let currentArray:Array<any>=[]
        for (const key in res.conversion_rates) {
          currentArray.push(key)
        }
        return currentArray
      })
    )
  }
  getcurrent(current:string){
    let a=`${this.currentid}/${this.postid}/latest/${current}`
    return this._http.get<any>(a)
  }
}
