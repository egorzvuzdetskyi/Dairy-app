import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component ({
	selector: 'app-ui-button',
	templateUrl: './ui-button.component.html',
	styleUrls: [ './ui-button.component.scss' ]
})
export class UiButtonComponent implements OnInit {

	@Input ('value') value: string = '';

	@Input('disabled') disabled : boolean = false;

	constructor() {
	}

	ngOnInit() {

	}

}
