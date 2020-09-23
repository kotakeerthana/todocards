import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent} from './one/one.component'
import { TodosComponent } from './todos/todos.component';
import { CardComponent} from './card/card.component'
export const routes: Routes = [
  {path:'',redirectTo:'todos', pathMatch: 'full'},
  {path:'todos',component:TodosComponent},
    {path:'todos/:id',component: OneComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
