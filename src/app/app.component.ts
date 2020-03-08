import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, takeLast } from 'rxjs/operators';

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
   url = 'https://jsonplaceholder.typicode.com/todos/';
  add(todo){

    let id = this.todos.length;
    // this.todos.push({id:++id, name: this.todo, isDone: false})
     this.http.post('https://jsonplaceholder.typicode.com/todos/', {id:++id, name: this.todo, isDone: false}).subscribe(data => this.todos.push(data))
    this.todo = '';
  }
  remove(id, i){
    // this.todos = this.todos.filter(function(el){
    //   return el.id !== id;
    // })
    // console.log(this.todo.id);
    console.log(id);
    console.log(`https://jsonplaceholder.typicode.com/todos/${id}`);
    
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe(()=> {
      this.todos.splice(i, 1)
    })

}


  check(id, i){
    // console.log('hi');
    // console.log(id);
   

    for(const todo of this.todos){
      console.log(todo.id);

      if(todo.id == id){
       let changed = todo.isDone = !todo.isDone
       this.http.put(`${this.url}/${id}`,{id:id, name: this.todo, isDone: changed})
      }
    }
  }

}
