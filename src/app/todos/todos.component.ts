import { Component, OnInit } from '@angular/core';
import { getLocaleId, NgForOf } from '@angular/common';
import {todos} from 'src/app/models/todos'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor() {}
 ngOnInit(): void {
    return todos
  }
}
