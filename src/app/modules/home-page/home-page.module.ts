import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { SideMenuComponent } from '@pages/home-page/components/side-menu/side-menu.component';
import { ItemsListComponent } from '@pages/home-page/components/items-list/items-list.component';
import { CommentsListComponent } from '@pages/home-page/components/comments-list/comments-list.component';
import { UiModule } from '@modules/ui/ui.module';

@NgModule ({
	imports: [
		CommonModule,
		UiModule
	],
	declarations: [
		HomePageComponent,
		SideMenuComponent,
		ItemsListComponent,
		CommentsListComponent
	],
	exports: [
		HomePageComponent,
		SideMenuComponent
	]
})
export class HomePageModule {
}
