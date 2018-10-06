import { Comments } from './Commets.model';

export class ItemModel {
	
	constructor(name: string) {
		
		if(!name) throw new Error('Item should have name');
		
		this.name = name;
	}
	
	public name: string;
	
	private comments: Comments[];
	
	public addComment = (comment : Comments) : Comments[] => {
		
		if(!comment) throw new Error('You can not push nothing');
		
		this.comments.push( comment );
		
		return this.comments;
		
	};
	
	public deleteComment = (commentForDeleting : Comments) : Comments[] => {
		
		this.comments = this.comments.filter(comment =>  comment.id !== commentForDeleting.id);
		
		return this.comments;
		
	}
}
