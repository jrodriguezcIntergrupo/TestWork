import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const PagesRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    },
];
@NgModule({
    imports: [RouterModule.forChild(PagesRoutes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
