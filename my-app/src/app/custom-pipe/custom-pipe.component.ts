import { Component, OnInit } from '@angular/core';
import { MultiplierPipe } from './MultiplierPipe';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  
  a:number =10;
  b:number =20;
  constructor() { }

  ngOnInit() {
  }

}
