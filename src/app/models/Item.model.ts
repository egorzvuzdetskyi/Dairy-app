import { Comments } from './Commets.model';
import { idGenerator } from '../helpers/idGenerator';

export class ItemModel {
	
	public name: string;
	
	public id: string;
	
	public comments: Comments[];
	constructor(name: string, id?: string, comments?: Comments[]) {
		
		if(!name) throw new Error('Item should have name');
		
		this.name = name;
		
		this.id = id ? id : idGenerator.generateId();
		
		this.comments = comments ? comments : [];
		
	}
	
	public addComment = (comment : Comments) : Comments[] => {
		
		if(!comment) throw new Error('You can not push nothing');
		
		this.comments.push( comment );
		
		return this.comments;
		
	};
	
	public getComments = () : Comments[] => {
		return this.comments
	};
	
	public deleteComment = (commentForDeleting : Comments) : Comments[] => {
		
		this.comments = this.comments.filter(comment =>  comment.id !== commentForDeleting.id);
		
		return this.comments;
		
	}
}
