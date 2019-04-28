import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.css']
})
export class CurrencyPipeComponent implements OnInit {


  a:number= 12.638467846;
  b:number = 1.3456;
  constructor() { }

  ngOnInit() {
  }

}
