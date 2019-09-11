import { Injectable } from '@angular/core';
import {Data} from './data'
import{HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchingService {

  constructor(private http:HttpClient) { }
  getData(){
    return Data

  }
}
