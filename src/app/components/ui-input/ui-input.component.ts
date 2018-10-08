import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutoUnsubscribe } from '../../decorators/unsubscribe.decorator';

@Component ({
	selector: 'app-ui-input',
	templateUrl: './ui-input.component.html',
	styleUrls: [ './ui-input.component.scss' ]
})
@AutoUnsubscribe()
export class UiInputComponent implements OnInit, AfterContentInit, OnDestroy {
	
	@Input ('placeholder') placeholder: string = null;
	
	@Input ('type') type: 'placeholder' | 'label' = 'placeholder';
	
	@Input ('inputType') inputType: 'text' | 'password' | 'number' = 'text';
	
	@Input ('formCtrl') formCtrl: FormControl;
	
	@Input('isTextarea') isTextarea: boolean = false;
	
	@Output('submitEvent') submitEvent: EventEmitter<void> = new EventEmitter<void>();
	
	public placeholderInput: string = '';
	
	public _ngModel;
	
	public labelInput: string = '';
	
	public error: string = '';
	
	public showErrorFlag: boolean = false;
	
	constructor() {
	}
	
	public handleChanges = (val): void => {
		this.formCtrl.patchValue (val);
	};
	
	public checkError = (isBluer: boolean): void => {
		if (this.formCtrl.errors) {
			
			let bluer: boolean = isBluer;
			
			Object.values (this.formCtrl.errors).forEach (err => {
				this.error = '';
				if (typeof err != 'object') {
					this.error += err + ' ';
					return;
				}
				
				Object.keys (err).forEach (key => {
					this.error += key + ' ' + err[ key ] + ' ';
				});
				
			});
			
			if (bluer) {
				
				this.showErrorFlag = true;
				
			}
		} else {
			this.showErrorFlag = false;
		}
	};
	
	public emitSubmitEvent = () : void => {
		this.submitEvent.emit();
	};
	
	private setPlaceHolder = (): void => {
		
		if (this.type == 'placeholder') {
			this.placeholderInput = this.placeholder;
			this.labelInput = '';
		} else if (this.type == 'label') {
			this.labelInput = this.placeholder;
			this.placeholderInput = '';
		}
		
	};
	
	ngOnInit() {
		
		if (this.type && this.placeholder) this.setPlaceHolder ();
		
		this.formCtrl.valueChanges.subscribe(value => {
			if(!value) this._ngModel = value;
		})
		
	}
	
	ngAfterContentInit() {
		this.formCtrl.statusChanges.subscribe (newStatus => {
			if (newStatus == 'INVALID') {
				this.checkError (false);
			}
		});
	}
	
	ngOnDestroy(){}
	
}
