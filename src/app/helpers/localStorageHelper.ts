export class LocalStorageHelper {
	
	public static setItem = (value : string | number | object | boolean, name : string) : void => {
		
		let valueToStorage: string = '';
		
		if(typeof value !== 'string') {
			valueToStorage = JSON.stringify(value);
		}
		
		localStorage.setItem(name, valueToStorage);
	};
	
	public static getItem = (name: string) : string => {
		return localStorage.getItem(name) ? localStorage.getItem(name) : null;
	};
	
	public static dropItem = (name: string) : void => {
		localStorage.removeItem(name);
	};
	
}
