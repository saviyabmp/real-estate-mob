import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageModel } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor(private http: HttpClient) { }

  getJSONResponse(name: String) {
      if (name=="") {
        var response = this.http.get<MessageModel>('https://saviya.herokuapp.com/greeting');
      } else {
        var response = this.http.get<MessageModel>('https://saviya.herokuapp.com/greeting?name='+name);
      }
    //console.log(response);
    return response;
  }
}