import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { SelectMarketsComponent } from './select-markets/select-markets.component';
import { SelectProductsComponent } from './select-products/select-products.component';

const routes: Routes = [
  {path:'vise-o-proizvodu', component:DetailsComponent},
  {path:'uporedjivanje-proizvoda', component:CompareProductsComponent},
  {path:'uporedjivanje-proizvoda/selekcija-proizvoda',component:SelectProductsComponent,pathMatch:"full"},
  {path:'uporedjivanje-proizvoda/selekcija-prodavnica',component:SelectMarketsComponent, pathMatch:"full"},
  {path:'uporedjivanje-proizvoda/detaljnije-o-proizvodu',component:ProductDetailsComponent, pathMatch:"full"},
  {path:'login',component:LoginComponent, pathMatch:"full"},
  {path:'register',component:RegisterComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
 }
 export const routingComponents = [DetailsComponent,CompareProductsComponent]
