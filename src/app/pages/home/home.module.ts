import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfitComponent } from './components/profit/profit.component';

const COMPONENTS = [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
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
