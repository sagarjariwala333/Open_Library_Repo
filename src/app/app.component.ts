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

@ViewChild('childComp')child!:SearchComponent;
	
	constructor(private api:ApiService,
				private routes:Router) {

	}

  title = 'mylibrary-app';
  search_str:String="";
  subject_str:String="";
  subject1!:String;

  onActivate(componentRef:any){
  	console.log(componentRef);
  	componentRef.test(this.str);
  }
  


  getSubject(sub:String)
  {
  	this.str=sub;
  	let subject={
  		name:sub.toString().trim().toLowerCase()
  	}
  	let param = subject;
  	if(this.routes.navigated==false)
  	{
  		this.routes.navigateByUrl("/subject",{state : subject});
  	}
  	else
  	{
  		this.routes.navigateByUrl("/subject",{state : subject});
  	}
  	
  }

  onClick(data:any)
  {
  	console.log(data);
  }

  getSearch(ser:String)
  {
  	//console.log(this.child);
  	//this.child.test();
  	this.str=ser;
  	let search={
  		name:ser.toString().trim().toLowerCase()
  	}
  	let param=search;

  	if(this.routes.navigated==false)
  	{
  		this.routes.navigateByUrl("/search",{state : param});
  	}
  	else
  	{
  		this.routes.navigateByUrl("/search",{state : param});
  	}
  }

  onJava()
  {
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

  cancelSubject()
  {
  	//this.inputName.nativeElement.value = ' ';
  	//this.routes.navigateByUrl("/");
  	//console.log(document.getElementById("can"));
  }

}
