import { Component, Input, OnInit } from '@angular/core';
import { Comments } from '@models/Commets.model';

@Component ({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: [ './comment.component.scss' ]
})
export class CommentComponent implements OnInit {
	
	@Input('comment') comment : Comments;
	
	constructor() {
	}
	
	ngOnInit() {
	
	}
	
}
