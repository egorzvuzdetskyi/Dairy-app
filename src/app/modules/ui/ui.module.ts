import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '../../components/ui-button/ui-button.component';
import { UiInputComponent } from '../../components/ui-input/ui-input.component';
import { FormsModule } from '@angular/forms';

@NgModule ({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		UiButtonComponent,
		UiInputComponent
	],
	exports: [
		UiButtonComponent,
		UiInputComponent
	]
})
export class UiModule {
}
