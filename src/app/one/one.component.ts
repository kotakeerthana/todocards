import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {todos} from 'src/app/models/todos'



@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
todo:any
constructor(private route: ActivatedRoute) {
}
  ngOnInit() {
  this.route.params
        .subscribe(
          (params: Params) => {
            let id = params['id'];
            this.todo=todos[id-1]
            console.log("hello ",this.todo)
          }
        );
      }
  }
  
  
  
  
  
  

  
