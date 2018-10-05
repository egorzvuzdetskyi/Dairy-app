import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '@pages/home-page/home-page.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'home',
		component: HomePageComponent
	}
];

@NgModule ({
	imports: [ RouterModule.forRoot (routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {
}
