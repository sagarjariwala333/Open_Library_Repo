import { Component,ViewChild,ComponentRef } from '@angular/core';
import { ApiService } from './Services/api.service';
import { RouterModule, Routes,Router } from '@angular/router';
import { SearchComponent } from './MyComponents/search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  str!:String;

  title = 'mylibrary-app';
  search_str:String="";
  subject_str:String="";
  subject1!:String;
  componentRef!:any;
	
	constructor(private api:ApiService,
				private routes:Router) {

	}

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
   }

  onActivate(componentRef:any){
    this.componentRef=componentRef      	
  }
  
  async getSubject(sub:String)
  {
  	this.str=sub;
    await this.delay(1000);
    this.componentRef.test(this.str);
  }

  async getSearch(ser:String)
  {
  	this.str=ser;
    await this.delay(1000);
    this.componentRef.test(this.str);
  }

  onJava()
  {
    console.log("Button clciked..");
  	this.getSubject("java");
  }

  onPHP()
  {
  	this.getSubject("php");
  }

  onJS()
  {
  	this.getSubject("javascript");
  }

  onPython()
  {
  	this.getSubject("python");
  }
}
