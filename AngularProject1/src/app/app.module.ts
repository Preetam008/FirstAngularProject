import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component2Component } from './component2/component2.component';
import { Component3NgforComponent } from './component3-ngfor/component3-ngfor.component';
import { PushAndSpliceComponent } from './push-and-splice/push-and-splice.component';
// import { RoutingConceptComponent } from './routing-concept/routing-concept.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DataBindingComponent } from './data-binding/data-binding.component';


const AppRoutes:Routes=[
  {path:'about',component:HomeComponent},
  {path:'home',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3NgforComponent,
    PushAndSpliceComponent,
    //RoutingConceptComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
