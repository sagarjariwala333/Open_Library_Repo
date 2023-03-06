import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { NgxPaginationModule,PaginationInstance } from 'ngx-pagination'
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

	data:any;
	pageSize:number=10;
	p:number=0;
	total:number=100;
	arr:any;
	res:any;
	result:any;
	url!:string;
	hidden:boolean=true;

	constructor(private api:ApiService) {
	}

	test(str:string)
	{
		this.url=str;
		this.p=0;
		console.log("Hello world"+str);
		this.getData(str,0);
	}

	pageChanged(page:any)
	{
		this.p=page;
		this.getData(this.url,this.p-1);
	}

	getData(str:string,page:number)
	{
		let offset;
		if(page==0)
		{
			offset=0;
		}
		else
		{
			offset = page + 10;
		}
		this.api.getSearch(str,offset).subscribe((data:any)=>{
			
			this.arr=[];
			this.arr=data.docs;
			this.total=data.numFound;
			this.hidden = (this.total==0) ? true : false;
			if(this.total==0)
			{
				alert("No data found");
			}
			
		})
	}
}


