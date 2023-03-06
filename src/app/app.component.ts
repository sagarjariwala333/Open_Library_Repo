import { Component,ViewChild,ComponentRef,OnInit } from '@angular/core';
import { ApiService } from './Services/api.service';
import { RouterModule, Routes,Router } from '@angular/router';
import { SearchComponent } from './MyComponents/search/search.component';
import { FormControl,FormGroup,NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  str!:string;

  title = 'mylibrary-app';
  search_str:string="";
  subject_str:string="";
  subject1!:string;
  componentRef!:any;
  byAuthor:boolean=false;
	
	constructor(private api:ApiService,
				private routes:Router) {

	}

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
   }

  onActivate(componentRef:any){
    this.componentRef=componentRef      	
  }
  
  async getSubject(sub:string)
  {
    sub=sub.trim();
    if(sub.length>0)
    {
    	this.str=sub;
      await this.delay(500);
      this.componentRef.test(this.str);
    }
  }

  async getSearch(ser:string)
  {
    ser=ser.trim();

    if(ser.length>0)
    {
      	this.str=ser;
        await this.delay(500);
        let url=(this.byAuthor)?"author="+this.str:"title="+this.str;
        this.componentRef.test(url);
    }
  }

  onChange()
  {
    this.byAuthor=(this.byAuthor) ? false : true;
    console.log(this.byAuthor);
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
    console.log("Python");
  	this.getSubject("python");
  }
}
