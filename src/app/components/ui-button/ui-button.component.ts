import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AutoUnsubscribe } from '../../decorators/unsubscribe.decorator';

@Component ({
	selector: 'app-ui-button',
	templateUrl: './ui-button.component.html',
	styleUrls: [ './ui-button.component.scss' ]
})
@AutoUnsubscribe()
export class UiButtonComponent implements OnInit, OnDestroy {

	@Input ('value') value: string = '';

	@Input('disabled') disabled : boolean = false;
	
	@Input('isDelete') isDelete : boolean = false;
	
	@Output('onClick') onClick: EventEmitter<void> = new EventEmitter<void>();

	constructor() {
	}
	
	public emitClick = () : void => this.onClick.emit();

	ngOnInit() {

	}
	
	ngOnDestroy(){}

}
