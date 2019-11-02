import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import {StoreModule} from '@ngrx/store';
import {ShoppingItemReducer} from './store/reducers/shoppingItem.reducer';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(
      {
        shopping: ShoppingItemReducer
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
