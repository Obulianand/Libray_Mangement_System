import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { ReturnBooksComponent } from './return-books/return-books.component';
import { AllBooksComponent } from './all-books/all-books.component';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  { path: "dashboard", component: UserComponent },
  { path: "available_books", component: AvailableBooksComponent },
  { path: "return_books", component: ReturnBooksComponent },
  { path: "all_books", component: AllBooksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
