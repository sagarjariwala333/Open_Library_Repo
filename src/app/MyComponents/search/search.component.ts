import { Component } from '@angular/core';
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

	constructor(private api:ApiService,private location:Location) {
	}

	test(str:String)
	{
		console.log("Hello world"+str);
		this.getData(str);
	}

	pageChanged(page:any)
	{
			console.log("Page changes to "+ page);
			this.populatePageTable(page);
	}

	populatePageTable(page:number)
	{
			let i,j;
			this.arr=[];
			for(i=0,j=page*10;i<10;i++,j++)
			{
				this.arr.push(this.data.docs[j]);
			}
	}

	getData(str:String)
	{
		this.api.getSearch(str).subscribe((data:any)=>{
			this.data=data;
			this.populatePageTable(0);
		})
	}

	public ngOnInit(): void 
	{
		this.result = JSON.parse(JSON.stringify(this.location.getState()));
  	}

}


