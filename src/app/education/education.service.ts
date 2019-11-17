import { Injectable, OnInit } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

import { Education } from './education';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class EducationService{
// public list = [];

  constructor(private http:HttpClient) { }
  createAuthorizationHeader(headers:  HttpHeaders) {
    headers.append('Content-Type','application/json'); 
  } 

  getEducation(): Observable<Education[]>{
    let headers = new  HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get<Education[]>('http://localhost:8081/adm/school', {
      headers: headers
    }) 
  }
}
