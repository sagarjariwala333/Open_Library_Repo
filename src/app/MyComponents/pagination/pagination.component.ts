import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

	constructor(private api:ApiService) {}

}
