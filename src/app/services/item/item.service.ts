import { Injectable } from '@angular/core';
import { ItemModel } from '@models/Item.model';
import { localStorageHelper } from '../../helpers/localStorageHelper';

@Injectable ({
	providedIn: 'root'
})
export class ItemService {
	
	private itemList: ItemModel[] = [];
	
	private readonly ITEM_LIST_LOCAL_STORAGE_NAME: string = 'items';
	
	constructor() {
	}
	
	public saveItem = (item: ItemModel): ItemModel[] => {
		if (this.itemList.length === 0) this.itemList = this.getItems ();
		
		this.itemList.push (item);
		
		localStorageHelper.setItem (this.itemList, this.ITEM_LIST_LOCAL_STORAGE_NAME);
		
		return this.itemList;
	};
	
	public getItems = (): ItemModel[] => {
		if ((this.itemList.length === 0) && localStorageHelper.getItem (this.ITEM_LIST_LOCAL_STORAGE_NAME)) {
			this.itemList = JSON.parse (localStorageHelper.getItem (this.ITEM_LIST_LOCAL_STORAGE_NAME));
		}
		
		this.itemList = this.itemList.map(item => new ItemModel(item.name, item.id, item.comments));
		
		return this.itemList;
	};
	
	public updateItem = (itemForUpdate: ItemModel): void => {
		this.itemList = this.itemList.filter (item => (item.id !== itemForUpdate.id));
		this.itemList.push(itemForUpdate);
		localStorageHelper.setItem(this.itemList, this.ITEM_LIST_LOCAL_STORAGE_NAME);
	};
	
	public deleteItem = (itemForDelete: ItemModel): ItemModel[] => {
		if (this.itemList.length === 0) this.itemList = this.getItems ();
		
		this.itemList = this.itemList.filter (item => (item.id !== itemForDelete.id));
		
		localStorageHelper.setItem(this.itemList, this.ITEM_LIST_LOCAL_STORAGE_NAME);
		
		return this.itemList;
	};
}
