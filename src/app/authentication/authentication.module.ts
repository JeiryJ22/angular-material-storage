import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule//Modulos exportados de material
  ]
})
export class AuthenticationModule { }
