import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticulosComponentComponent } from './components/articulos-component/articulos-component.component';
import { BannerComponentComponent } from './components/banner-component/banner-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponentComponent,
    BannerComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
