import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { BookService } from './book.service';
import { CurrencyPipeComponent } from './currency-pipe/currency-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import {   MultiplierPipe  } from './custom-pipe/MultiplierPipe';
@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent,
    CurrencyPipeComponent,
    CustomPipeComponent,
    MultiplierPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService,{ provide: 'BASE_URL', useFactory: getBaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return 'http://localhost:3000/Book' ;
  //document.getElementsByTagName('base')[0].href;
}
