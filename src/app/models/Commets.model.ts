import { idGenerator } from '../helpers/idGenerator';

export class Comments {
	public id: string;
	public contentText: string;
	
	constructor(contentText : string) {
		
		if(!contentText) throw new Error('Comment can not be empty');
		
		this.contentText = contentText;
		
		this.id = idGenerator.generateId();
	};
	
}
