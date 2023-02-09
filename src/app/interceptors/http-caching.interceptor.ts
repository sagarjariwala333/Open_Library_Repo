import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { HttpCachingService } from '../Services/http-caching.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpCachingInterceptor implements HttpInterceptor {

  constructor(private httpCachingService:HttpCachingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

  	let cachedResponse=this.httpCachingService.get(request) || null;

  	if(cachedResponse)
  	{
  		console.log("Response from cache");
  		return of(cachedResponse);
  	}

    return next.handle(request).pipe(
    	tap(event=>{
    		if(event instanceof HttpResponse)
    		{
    			this.httpCachingService.put(request,event);
    		}
    	}));

  }
}
