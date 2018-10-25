import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    // { path: 'home', component: HomeComponent },
    // { path: 'hero', component: HeroComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules });