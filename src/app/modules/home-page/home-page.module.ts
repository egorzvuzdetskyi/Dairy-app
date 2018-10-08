import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { SideMenuComponent } from '@pages/home-page/components/side-menu/side-menu.component';
import { ItemsListComponent } from '@pages/home-page/components/items-list/items-list.component';
import { CommentsListComponent } from '@pages/home-page/components/comments-list/comments-list.component';
import { UiModule } from '@modules/ui/ui.module';
import { ItemComponent } from '@pages/home-page/components/items-list/components/item/item.component';
import { CommentComponent } from '../../pages/home-page/components/comments-list/components/comment/comment.component';

@NgModule ({
	imports: [
		CommonModule,
		UiModule
	],
	declarations: [
		HomePageComponent,
		SideMenuComponent,
		ItemsListComponent,
		CommentsListComponent,
		ItemComponent,
		CommentComponent
	],
	exports: [
		HomePageComponent,
		SideMenuComponent
	]
})
export class HomePageModule {
}
