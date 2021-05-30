import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ProfitComponent } from './components/profit/profit.component';

const COMPONENTS = [
    HomeComponent,
    ProfitComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    entryComponents: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [HomeRoutingModule],
    providers: [],
})
export class HomeModule { }
