import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest,HttpResponse,HttpInterceptor,HttpHandler,HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCachingService {

  constructor() { }

  private cache:any = {};

  put(req:HttpRequest<any>, resp:HttpResponse<any>):void
  {
  	this.cache[req.urlWithParams]=resp;
  }

  get(req: HttpRequest<any>): HttpResponse<any>|null
  {
  	return this.cache[req.urlWithParams];
  }

}
