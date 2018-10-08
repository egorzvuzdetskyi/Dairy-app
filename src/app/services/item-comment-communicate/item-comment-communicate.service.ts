import { EventEmitter, Injectable } from '@angular/core';
import { ItemModel } from '@models/Item.model';

@Injectable ({
	providedIn: 'root'
})
export class ItemCommentCommunicateService {
	
	public emitSelectedItem: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();
	
	private selectedItem: ItemModel;
	
	constructor() {
	}
	
	public setSelectedItem = (item: ItemModel) : void => {
		this.selectedItem = item;
		this.emitSelectedItem.emit(item);
	}
	
	public getSelectedItem = () : ItemModel => {
		return this.selectedItem;
	}
}
