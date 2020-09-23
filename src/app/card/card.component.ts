import { Component, OnInit, Input } from '@angular/core';
import {todos} from 'src/app/models/todos'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //vv=
  @Input() 
  todo:any=todos
  constructor() { 
  
  }

  ngOnInit(): void {
   
  }

}
