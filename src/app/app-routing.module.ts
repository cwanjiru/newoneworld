import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { PaymentComponent } from './home/payment/payment.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { SignupComponent } from './home/signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pricing',component:PricingComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
