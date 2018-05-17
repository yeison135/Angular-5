import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroSolgruaComponent } from './registro-solgrua/registro-solgrua.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { ParametricasService } from './services/parametricas.service'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistroSolgruaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ParametricasService],
  bootstrap: [AppComponent, MenuComponent]
})
export class AppModule { }
