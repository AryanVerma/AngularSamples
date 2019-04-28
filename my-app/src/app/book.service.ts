import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , Subscriber, from, throwError } from 'rxjs';
import { map, filter, catchError, mergeMap, retry } from 'rxjs/operators';
  
import { Book } from './book';
//import {Book} from './data/book.json';

// Find the description of the method and classes used in our service. 
// @Injectable(): This decorator is used to make a service available for injection by injector. 
// Http: Angular service to handle server communication. 
// http.get() : This method is used to access HTTP URL using HTTP GET method. 
// Observable: This is a stream of events that can be processed with array-like operators. Every HTTP service method returns an Observable. 
// Promise: It is a proxy for a value not necessarily known when the promise is created. It does not return immediately a final value. It returns a promise to supply the value at some point in the future. 
// map(): This is a RxJS operator that extracts response object from response data. 
// toPromise(): This is a RxJS operator that converts Observable into Promise. 
// Response : It represents a response to a request. 
// Response. json(): It returns a Promise that resolves with a JSON object. 
// setInterval() : Sets a time interval after which it re-executes. 
// setTimeout(): Sets a timeout after which method executes. 

@Injectable({
  providedIn: 'root'
})
export class BookService {
private url:string;
 
  constructor(private http:HttpClient,@Inject('BASE_URL') baseUrl: string) {
    this.url  = baseUrl  ;
  }

   
   getBooksWithObservable(): Observable<any> {
    return this.http.get(this.url)
    .pipe(
      map(res=>res),
      catchError((res:Response)=> throwError(res))
    );
   }


   //Returns Promise<Book[]>
   getBooksWithPromise(): Promise<Book[]> { return this.http.get(this.url).toPromise() .then(this.extractData)
    .catch(err => {
        return Promise.reject(err.error || 'Server error');
    }); }
    extractData(res) {     
      return res ;      
    }
   //Returns Observable<string>
   getCurrentTime(): Observable<string> { return new Observable<string>((observer: Subscriber<string>) => { 
     setInterval(() => observer.next(new Date().toString()), 1000);
   });
  }
 //Returns Promise<Book> 
 getBookSlowly(): Promise<Book> { return 
  new Promise(resolve => { 
      let book = new Book(); 
       book.id= 100;
       book.name= 'jQuery Tutorials';
       // Delay by 3 second
       setTimeout(() => resolve(book), 3000);      
    });
}	


}
