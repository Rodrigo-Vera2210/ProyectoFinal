import { Component } from '@angular/core';
import { ITask, Levels } from '../../models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  task1: ITask = {
    title: 'Task 1',
    description: 'Desciption 1',
    completed: false,
    level: Levels.Info
  }
  
  task2: ITask = {
    title: 'Task 2',
    description: 'Desciption 2',
    completed: true,
    level: Levels.Urgent
  }


  deleteTask(task: ITask){
    alert(`Se procede a eliminar la tarea: ${task.title}`)
  }
}
