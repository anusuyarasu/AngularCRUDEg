import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AdUnit} from './components/AdUnit';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {
  
  url = "http://localhost:4000/adunits";

  constructor(private http: HttpClient) { }

  addAdUnit(unit_name,unit_price){
    console.log("unitname",unit_name,"unitprice", unit_price)
    const obj ={
      unit_name : unit_name,
      unit_price : unit_price
    }
    console.log("object",obj)
    this.http.post(this.url +'/add',obj).subscribe(res => console.log('Done'))
  }

  getAdUnits(){
    return this.http.get(this.url);
  }

  editAdUnit(id){
    return this.http.get(this.url+'/edit/'+id);
  }

  updateAdUnit(unit_name,unit_price,id){
     const obj ={
       unit_name: unit_name,
       unit_price: unit_price
     };
     this.http.post(this.url+'/update/'+id,obj).subscribe(res => console.log('Done'));
  }

  deleteAdUnit(id){
    return this.http.get(this.url+'/delete/'+id);
  }

}
