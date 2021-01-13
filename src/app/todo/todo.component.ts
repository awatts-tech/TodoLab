import { Component, OnInit } from '@angular/core';

//enter interface here
interface Todo{
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  Todos: { task: string; completed: boolean; }[];
  todoTitle: string;

  constructor() {

   }

  ngOnInit(): void {
    this.todoTitle ='';
    this.Todos = [

      {
        task: 'Complete Lab', 
        completed: true
      },
      {
        task: 'Make grocery list', 
        completed: true
      },
      {
        task: 'relax', 
        completed: true
      },
      {
        task: 'Polish nails', 
        completed: false
      },
      {
        task: 'pet dog', 
        completed: true
      },
      {
        task: 'be awesome', 
        completed: true
      },
    ];


  }

addTodo(): void{
  this.Todos.push(
    {
  task: this.todoTitle,
  completed: true
  })

  this.todoTitle='';
  
}


// filterTodo(): Todo[]{
//   return this.Todos.filter((Todo)) =>{
//     convert taskLower = Todo.task.toLowerCase();
//     const filterLower = this.filterTodo.toLowerCase();

//     return taskLower.includes(filterLower);

//   };

// }

}
