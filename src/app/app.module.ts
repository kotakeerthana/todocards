import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneComponent } from './one/one.component';
import {MatButtonModule} from '@angular/material/button';
import { TodosComponent } from './todos/todos.component';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TodosComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
