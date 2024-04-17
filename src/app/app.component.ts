import { Component, OnInit } from '@angular/core';
import { Icurrency } from 'src/model/cu';
import { CurrentService } from 'src/services/current.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
title = 'task1';
current!:Array<Icurrency>
basecurrency!:string;
tragetcurrency!:string;
amount:number=1
result:number=0
constructor(
  private _service:CurrentService
){
  
}

  ngOnInit(): void {
   this._service.fetchurl()
   .subscribe((res=>{
    console.log(res);
    this.current=res
    console.log(this.current);
    
   }))

  }

  onconvert(){
    this._service.getcurrent(this.basecurrency)
    .subscribe((res=>{
      this.result=res.conversion_rates[this.tragetcurrency]*this.amount
      console.log(res);
      
    }))
  }
}
