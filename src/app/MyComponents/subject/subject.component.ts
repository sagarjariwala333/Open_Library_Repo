import { Component } from '@angular/core';
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
	total:number=100;
	arr:any;
	res:any;
	result:any;

	constructor(private api:ApiService,private location:Location) {
		
	}

	pageChanged(page:any)
	{
			console.log("Page changes to "+ page);
			this.populatePageTable(page);
	}

	test(str:String)
	{
		console.log(str);
		this.getData(str);
	}

	populatePageTable(page:number)
	{
		//console.log(this.res);
			let i,j;
			this.arr=[];
			for(i=0,j=page*10;i<10 && i<this.res.length;i++,j++)
			{
				this.arr.push(this.res[i]);
			}
			console.log(this.arr);
	}

	getData(str:String)
	{
		console.log(str);
		this.api.getSubject(str).subscribe((data)=>{
			//console.log(data);
			let res=JSON.parse(JSON.stringify(data));
			this.res = res.works;
			this.populatePageTable(0);
		});
	}

	public ngOnInit(): void 
	{
		this.result = JSON.parse(JSON.stringify(this.location.getState()));
		
  	}

}