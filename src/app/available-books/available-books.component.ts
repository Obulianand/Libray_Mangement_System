import { Component } from '@angular/core';
import { userBookData } from '../books';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent {
  availableBookData: userBookData[];

  constructor(
    private bookSerice: BooksService,
  ) { }

  ngOnInit() {
    this.updateBookData();
  }
  updateBookData() {
    this.bookSerice.updateBookData();
    this.availableBookData = this.bookSerice.availableBookData;
  }

  updateStatus(id: number) {
    this.bookSerice.updateStatus(id);
    this.updateBookData();
  }
}
