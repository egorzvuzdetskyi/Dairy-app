import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from '@modules/home-page/home-page.module';
import { UiModule } from '@modules/ui/ui.module';

@NgModule ({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HomePageModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {
}
