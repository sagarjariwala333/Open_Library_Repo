import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	serach_url:string="https://openlibrary.org/search.json";
	subject_url:string="https://openlibrary.org/subjects/";

  constructor(private http:HttpClient) { }

  getData()
  {
  	let url="https://openlibrary.org/search.json?q=*&limi=2&offset=2";
  	return this.http.get(url);
  }

  getSearch(search:string,offset:number)
  {
    search=search.trim().replace(/ /g,"+");
    let call_url = this.serach_url+"?"+search+"&limit=10&offset="+offset;
    console.log(call_url);
    call_url=call_url.toLowerCase();
    return this.http.get(call_url);
  }

  getSubject(subject:string)
  {
  	subject=subject+".json";
  	let call_url = this.subject_url+subject;
    call_url=call_url.toLowerCase();
    console.log(call_url);
  	return this.http.get(call_url);
  }
}