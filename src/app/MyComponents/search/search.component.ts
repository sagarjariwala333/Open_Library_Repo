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


	@Input() id!: string;
@Input() maxSize!: number;
@Output() pageChange!: EventEmitter<number>;
@Output() pageBoundsCorrection!: EventEmitter<number>;

	data:any;
	pageSize:number=10;
	p:number=0;
	total:number=100;
	arr:any;
	res:any;
	result:any;

	constructor(private api:ApiService) {
	}

	test(str:String)
	{
		console.log("Hello world"+str);
		this.getData(str);
	}

	pageChanged(page:any)
	{
		//this.p+=1;
		this.p=page;
			console.log("Page changes to "+ page);
			this.populatePageTable(this.p-1);

	}

	populatePageTable(page:number)
	{
			let i,j;
			this.arr=[];
			for(i=0,j=page*10;i<10 && j<this.data.docs.length;i++,j++)
			{
				this.arr.push(this.data.docs[j]);
			}
	}

	getData(str:String)
	{
		this.api.getSearch(str).subscribe((data:any)=>{
			this.data=data;
			this.total=this.data.docs.length;
			this.populatePageTable(0);
		})
	}
}


