import { Component,Input } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../../Services/api.service';
import { NgxPaginationModule,PaginationInstance } from 'ngx-pagination'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

	data:any;
	pageSize:number=10;
	p:number=0;
	total:number=0;
	arr:any;
	res:any;
	result:any;
	offset:number=0;
	url!:String;
	hidden:boolean=true;

	constructor(private api:ApiService,private location:Location) {
		
	}

	pageChanged(page:any)
	{
		this.p=page;
		console.log("Page changes to "+ this.p);
		this.populatePageTable(this.p-1);
	}

	test(str:string)
	{
		this.p=0;
		this.url=str;
		console.log(str);
		this.getData(str);
	}

	populatePageTable(page:number)
	{
		let i,j;
		this.arr=[];
		for(i=0,j=page*10;i<10 && j<this.res.length;i++,j++)
		{
			this.arr.push(this.res[j]);
		}
		this.hidden = (this.arr.length == 0) ? true : false;
	}

	getData(str:string)
	{
		this.api.getSubject(str).subscribe((data)=>{
			let res=JSON.parse(JSON.stringify(data));
			this.res = res.works;
			this.arr=[];
			this.total=this.res.length;

			if(this.total==0)
			{
				alert("Data not found");
			}
			else
			{
				this.populatePageTable(0);
			}
			
		});
	}
}
