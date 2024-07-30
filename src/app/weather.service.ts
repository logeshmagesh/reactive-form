import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http:HttpClient) { }

  save (users:any[]){
    return this.http.post("https://crud-d60c3-default-rtdb.firebaseio.com/data.json",users)
  }
}
