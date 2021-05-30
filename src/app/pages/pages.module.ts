import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages.routing.module';


const MODULES = [
    HomeModule,
    PagesRoutingModule
];

@NgModule({
    exports: [...MODULES],
    imports: [MODULES],
    providers: [],
})
export class PagesModule { }
