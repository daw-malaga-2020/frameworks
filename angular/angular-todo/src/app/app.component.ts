import { Component } from '@angular/core';
import { TaskItem } from 'src/model/TaskItem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTaskTitle: string
  tasks:TaskItem[] = [
    { title: "Tarea 1", done: false},
    { title: "Tarea 2", done: true},
    { title: "Tarea 3", done: false},
  ]

  addTask(){
    let newTask = {title: this.newTaskTitle, done: false}
    this.tasks.push(newTask)
    this.newTaskTitle = ""
  }

  changeTask(index) {
    this.tasks[index].done = !this.tasks[index].done
  }
  removeTask(index){
    this.tasks.splice(index,1)
  }
}
