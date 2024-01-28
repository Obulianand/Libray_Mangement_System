import { Component } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  totalBookCount: number = 0;
  takenBookCount: number = 0;
  availableBookCount: number = 0;

  constructor(
    private bookSerice: BooksService,
  ) { }

  ngOnInit() {
    this.updateBookData();
  }

  updateBookData() {
    this.bookSerice.updateBookData();
    this.totalBookCount = this.bookSerice.totalBookCount;
    this.takenBookCount = this.bookSerice.takenBookCount;
    this.availableBookCount = this.bookSerice.availableBookCount;
  }
}
