import { Injectable } from '@angular/core';
import { userBookData, userData } from '../books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  userData: userData = {
    id: 12,
    name: "Anand",
    email: "anand@gmail.com"
  }

  userBookData: userBookData[] = [
    { id: 1, bookName: "Book 1", author: "Author 1", isTaken: false },
    { id: 2, bookName: "Book 2", author: "Author 2", isTaken: false },
    { id: 3, bookName: "Book 3", author: "Author 3", isTaken: true },
    { id: 4, bookName: "Book 4", author: "Author 4", isTaken: true },
    { id: 5, bookName: "Book 5", author: "Author 5", isTaken: false },
    { id: 6, bookName: "Book 6", author: "Author 6", isTaken: false },
    { id: 7, bookName: "Book 7", author: "Author 7", isTaken: true },
    { id: 8, bookName: "Book 8", author: "Author 8", isTaken: false },
    { id: 9, bookName: "Book 9", author: "Author 9", isTaken: false },
    { id: 10, bookName: "Book 10", author: "Author 10", isTaken: false }
  ]

  totalBookData: userBookData[];
  takenBookData: userBookData[];
  availableBookData: userBookData[];
  totalBookCount: number = 0;
  takenBookCount: number = 0;
  availableBookCount: number = 0;

  constructor() { }

  updateBookData() {
    let data = localStorage.getItem("userBookData");
    if (data) {
      this.totalBookData = JSON.parse(data);
      this.takenBookData = this.totalBookData.filter(x => x.isTaken === true)
      this.availableBookData = this.totalBookData.filter(x => x.isTaken === false);
      this.totalBookCount = this.totalBookData.length;
      this.takenBookCount = this.takenBookData.length;
      this.availableBookCount = this.availableBookData.length;
      localStorage.setItem("takenBookData", JSON.stringify(this.takenBookData));
      localStorage.setItem("availableBookData", JSON.stringify(this.availableBookData));
    }
  }

  updateStatus(id: number) {
    this.totalBookData.forEach(x => {
      if (x.id === id) {
        if (x.isTaken)
          alert("book Retured scucessfully")
        else
          alert("book taken sucessfully")
        x.isTaken = !x.isTaken;
        localStorage.setItem("userBookData", JSON.stringify(this.totalBookData));
      }
    })
  }
}
