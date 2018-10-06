import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component ({
	selector: 'app-ui-input',
	templateUrl: './ui-input.component.html',
	styleUrls: [ './ui-input.component.scss' ]
})
export class UiInputComponent implements OnInit, AfterContentInit {

	@Input ('placeholder') placeholder: string = null;

	@Input ('type') type: 'placeholder' | 'label' = 'placeholder';

	@Input ('inputType') inputType: 'text' | 'password' | 'number' = 'text';

	@Input ('formCtrl') formCtrl: FormControl;

	public placeholderInput: string = '';

	public _ngModel;

	public labelInput: string = '';

	public error: string = '';

	public showErrorFlag: boolean = false;

	constructor() {
	}

	public handleChanges = (val) => {
		this.formCtrl.patchValue (val);
	};

	public checkError = (isBluer: boolean) => {
		let bluer: boolean = isBluer;

		console.log (this.formCtrl.errors);

		Object.values (this.formCtrl.errors).forEach (err => {
			this.error = '';
			if(typeof err != 'object') {
				this.error += err + ' ';
				return
			}

			Object.keys(err).forEach(key => {
				this.error += key + ' ' + err[key] + ' ';
			})

		});

		if (bluer) {

			this.showErrorFlag = true;

		}
	};

	ngOnInit() {

		if (this.type == 'placeholder') {
			this.placeholderInput = this.placeholder;
			this.labelInput = '';
		} else {
			this.labelInput = this.placeholder;
			this.placeholderInput = '';
		}

	}

	ngAfterContentInit() {
		this.formCtrl.statusChanges.subscribe (newStatus => {
			if (newStatus == 'INVALID') {
				this.checkError (false);
			}
		});
	}

}
