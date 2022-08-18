import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing/pricing.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule, } from '@angular/forms';
import { NewsletterComponent } from './newsletter/newsletter.component';


@NgModule({
  declarations: [
    PricingComponent,
    PaymentComponent,
    SignupComponent,
    LoginComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
 
  
  ],
  exports:[
    PricingComponent,
    PaymentComponent,
    NewsletterComponent
  ]
})
export class HomeModule { }
