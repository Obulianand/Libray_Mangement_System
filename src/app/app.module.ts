import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { ReturnBooksComponent } from './return-books/return-books.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AllBooksComponent } from './all-books/all-books.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    AvailableBooksComponent,
    ReturnBooksComponent,
    NavBarComponent,
    AllBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
