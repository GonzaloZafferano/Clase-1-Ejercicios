import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CalculosComponent } from './components/calculos/calculos.component';

const appMisRutas:Routes= [
  {path:'',component: CalculosComponent},//http://localhost:4200/bienvenido
  {path:'bienvenido',component: BienvenidoComponent},//http://localhost:4200/bienvenido
  {path:'login',component: LoginComponent}, //http://localhost:4200/login
  {path:'**',component: ErrorComponent} //http://localhost:4200/ Cualquier ruta que no haya matcheado con las anteriores.
];

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    CalculosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appMisRutas),
  ],
  providers: [ 
    //{ provide: LocationStrategy, useClass: HashLocationStrategy } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
