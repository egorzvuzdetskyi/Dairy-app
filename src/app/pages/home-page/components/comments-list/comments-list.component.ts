import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemCommentCommunicateService } from '@services/item-comment-communicate/item-comment-communicate.service';
import { ItemModel } from '@models/Item.model';
import { Comments } from '@models/Commets.model';
import { FormGroup } from '@angular/forms';
import { formGenerator } from '../../../../helpers/formsGenerator';
import { ItemService } from '@services/item/item.service';
import { AutoUnsubscribe } from '../../../../decorators/unsubscribe.decorator';

@Component ({
	selector: 'app-comments-list',
	templateUrl: './comments-list.component.html',
	styleUrls: [ './comments-list.component.scss' ]
})
@AutoUnsubscribe()
export class CommentsListComponent implements OnInit, OnDestroy {
	
	public selectedItem: ItemModel;
	public comments: Comments[];
	
	public form: FormGroup;
	
	constructor(
		private itemCommentCommunicateService : ItemCommentCommunicateService,
		private itemService: ItemService
	) {
	}
	
	public createComment = () => {
		if(!this.form.valid) return;
		
		const {
			commentText
		} = this.form.value;
		
		const comment = new Comments(commentText);
		
		this.selectedItem.addComment(comment);
		
		this.itemService.updateItem(this.selectedItem);
		
		this.form.reset();
	};
	
	ngOnInit() {
		
		this.form = formGenerator.getNewCommentForm();
		
		this.itemCommentCommunicateService.emitSelectedItem.subscribe(item => {
			this.selectedItem = item;
			this.comments = this.selectedItem.getComments();
		});
	}
	
	ngOnDestroy(){}
	
}
