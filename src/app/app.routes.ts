import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtectedComponent } from './components/protected/protected.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prices', component: PreciosComponent },
    { path: 'protected', component: ProtectedComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
