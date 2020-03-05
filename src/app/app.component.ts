import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(private http: HttpClient){
   this.http.get('https://jsonplaceholder.typicode.com/todos/').subscribe(data => console.log(data)
  )
 }

  title = 'todoList';

   todos = []
   todo;

  add(todo){

    let id = this.todos.length;
    // this.todos.push({id:++id, name: this.todo, isDone: false})
     this.http.post('https://jsonplaceholder.typicode.com/todos/', {id:++id, name: this.todo, isDone: false}).subscribe(data => this.todos.push(data))
    this.todo = '';
  }
  remove(id){
    // this.todos = this.todos.filter(function(el){
    //   return el.id !== id;
    // })
    // console.log(this.todo.id);
    console.log(id);
    console.log(`https://jsonplaceholder.typicode.com/todos/${id}`);
    
    
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe()

}
//  remove((id=> {
//     this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
//   })).subscribe()


  // check(id){
  //   // console.log('hi');
  //   // console.log(id);

  //   // for(const todo of this.todos){
  //   //   console.log(todo.id);

  //   //   if(todo.id == id){
  //   //     todo.isDone = !todo.isDone
  //   //   }
  //   // }
  // }

}
