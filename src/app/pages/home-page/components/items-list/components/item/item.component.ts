import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ItemModel } from '@models/Item.model';
import { ItemService } from '@services/item/item.service';
import { AutoUnsubscribe } from '../../../../../../decorators/unsubscribe.decorator';

@Component ({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: [ './item.component.scss' ]
})
@AutoUnsubscribe()
export class ItemComponent implements OnInit, OnDestroy {
	
	@Input('item') item: ItemModel;
	
	@Input('isActive') set activeItem(item) {
		this.active = item;
	}
	
	@Output('onDeleteItem') onDeleteItem : EventEmitter<ItemModel> = new EventEmitter<ItemModel>();
	
	@Output('onSelectItem') onSelectItem : EventEmitter<ItemModel> = new EventEmitter<ItemModel>();
	
	public active: boolean = false;
	
	constructor() {
	}
	
	public emitDeleteItemEvent = () : void => this.onDeleteItem.emit (this.item);
	
	public emitSelectedItemEvent = () : void => this.onSelectItem.emit (this.item);
	
	ngOnInit() {
	}
	
	ngOnDestroy(){}
	
}
