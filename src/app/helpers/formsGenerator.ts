import { FormBuilder, FormGroup, Validators } from '@angular/forms';

class FormsGenerator {
	
	private addNewItemForm: FormGroup;
	
	private addNewCommentForm: FormGroup;
	
	private formBuilder: FormBuilder;
	
	constructor() {
		this.formBuilder = new FormBuilder ();
		this.addNewItemForm = this.generateNewItemForm ();
	}
	
	private generateNewItemForm = (): FormGroup => {
		
		return this.formBuilder.group ({
			itemName: [ null,
				Validators.compose ([
					Validators.required,
					Validators.minLength (3),
					Validators.maxLength (25) ])
			]
		});
		
	};
	
	public getNewItemForm = (): FormGroup => {
		if (this.addNewItemForm) return this.addNewItemForm;
		else {
			this.addNewItemForm = this.generateNewItemForm();
			return this.addNewItemForm;
		};
	};
	
	private generateNewCommentForm = (): FormGroup => {
		
		return this.formBuilder.group ({
			commentText: [ null,
				Validators.compose ([
					Validators.required,
					Validators.minLength (5),
					Validators.maxLength (100) ])
			]
		});
		
	};
	
	public getNewCommentForm = (): FormGroup => {
		if (this.addNewCommentForm) return this.addNewCommentForm;
		else {
			this.addNewCommentForm = this.generateNewCommentForm();
			return this.addNewCommentForm;
		};
	};
	
}

export const formGenerator = new FormsGenerator();
