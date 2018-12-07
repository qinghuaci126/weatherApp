import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderinfoService {
  constructor(public http:HttpClient) { 
    console.log('hello OrderinfoService');
  }

  getAllOrderList(uid){
    var url="";
    
    return this.http.get(url,{headers:new HttpHeaders().set('Authorization','appcode'),params:{'uid':uid}});

  }


}
