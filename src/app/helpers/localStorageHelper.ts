import { ItemModel } from '@models/Item.model';

class LocalStorageHelper {
	
	public setItem = (value : | Array<ItemModel> | string | number | object | boolean , name : string) : void => {
		
		let valueToStorage: string = '';
		
		if(typeof value !== 'string') {
			valueToStorage = JSON.stringify(value);
		}
		
		localStorage.setItem(name, valueToStorage);
	};
	
	public getItem = (name: string) : string => {
		return localStorage.getItem(name) ? localStorage.getItem(name) : null;
	};
	
	public dropItem = (name: string) : void => {
		localStorage.removeItem(name);
	};
	
}

export const localStorageHelper = new LocalStorageHelper();
