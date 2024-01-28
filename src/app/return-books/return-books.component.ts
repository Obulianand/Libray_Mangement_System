import { Component } from '@angular/core';
import { userBookData } from '../books';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-return-books',
  templateUrl: './return-books.component.html',
  styleUrls: ['./return-books.component.css']
})
export class ReturnBooksComponent {
  takenBookData: userBookData[];

  constructor(
    private bookSerice: BooksService,
  ) { }

  ngOnInit() {
    this.updateBookData();
  }

  updateBookData() {
    this.bookSerice.updateBookData();
    this.takenBookData = this.bookSerice.takenBookData;
  }

  updateStatus(id: number) {
    this.bookSerice.updateStatus(id);
    this.updateBookData();
  }
}
