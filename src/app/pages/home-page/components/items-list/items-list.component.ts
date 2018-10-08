import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formGenerator } from '../../../../helpers/formsGenerator';
import { ItemModel } from '@models/Item.model';
import { ItemService } from '@services/item/item.service';
import { ItemCommentCommunicateService } from '@services/item-comment-communicate/item-comment-communicate.service';
import { AutoUnsubscribe } from '../../../../decorators/unsubscribe.decorator';

@Component ({
	selector: 'app-items-list',
	templateUrl: './items-list.component.html',
	styleUrls: [ './items-list.component.scss' ]
})
@AutoUnsubscribe()
export class ItemsListComponent implements OnInit, OnDestroy {
	
	public form : FormGroup;
	
	public itemList : ItemModel[] = [];
	
	public selectedItem : ItemModel = null;
	
	constructor(private itemService: ItemService,
				private itemCommentCommunicateService : ItemCommentCommunicateService) {
	}
	
	public addNewItem = (form: FormGroup) => {
		if(!form.valid) {
			return
		}
		
		const item = new ItemModel(form.value.itemName);
		
		this.itemList = this.itemService.saveItem(item);
		
		this.form.reset();
	};
	
	public deleteItem = (itemToDelete: ItemModel) => {
		this.itemList = this.itemService.deleteItem(itemToDelete);
	};
	
	public selectItem = (item: ItemModel) => {
		this.selectedItem = item;
		this.itemCommentCommunicateService.setSelectedItem(this.selectedItem);
	};
	
	ngOnInit() {
		this.form = formGenerator.getNewItemForm();
		
		this.itemList = this.itemService.getItems();
	}
	
	ngOnDestroy() {}
	
}
