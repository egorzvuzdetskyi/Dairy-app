export class Comments {
	public id: string;
	public contentText: string;
	
	constructor(contentText : string) {
		
		if(!contentText) throw new Error('Comment can not be empty');
		
		this.contentText = contentText;
		
		this.id = Comments.idGenerator();
	};
	
	public static idGenerator = () : string => {
		return '_' + Math.random().toString(36).substr(2, 9);
	}
	
}
