import { Component, OnInit } from '@angular/core';
 
import { Observable } from 'rxjs';

import { BookService } from '../book.service';
import { Book } from '../book';
@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  observableBooks: Observable<Book[]>
  promiseBooks: Promise<Book[]>
  promiseBook: Promise<Book>
  observableTime: Observable<string>
   constructor(private bookService: BookService) { }
   ngOnInit(): void {
        this.observableBooks = this.bookService.getBooksWithObservable();
        this.promiseBooks = this.bookService.getBooksWithPromise();
        this.promiseBook = this.bookService.getBookSlowly();
        this.observableTime = this.bookService.getCurrentTime();
   }
}
