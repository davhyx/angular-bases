import { Routes } from '@angular/router';
import BasicPageComponent from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';

export const routes: Routes = [
    {
        path: 'basic',
        title: 'Pipes basicos',
        component: BasicPageComponent
    },
    {
        path: 'numbers',
        title: 'Pipes numéricos',
        component: NumbersPageComponent
    },
    {
        path: 'uncommon',
        title: 'Pipes menos comunes',
        component: UncommonPageComponent
    },
    {
        path: 'custom',
        title: 'Pipes personalizados',
        component: CustomPageComponent
    },
    {
        path: '**',
        redirectTo: 'basic'
    }
];
