import { Component } from '@angular/core';
import { userBookData } from '../books';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent {
  totalBookData: userBookData[];
  takenBookData: userBookData[];
  availableBookData: userBookData[];

  constructor(
    private bookSerice: BooksService,
  ) { }

  ngOnInit() {
    this.updateBookData();
  }

  updateBookData() {
    this.bookSerice.updateBookData();
    this.totalBookData = this.bookSerice.totalBookData;
  }

  updateStatus(id: number) {
    this.bookSerice.updateStatus(id);
    this.updateBookData();
  }
}
