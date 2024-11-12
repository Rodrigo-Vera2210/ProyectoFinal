import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
  @Input() task: ITask | undefined
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>()

  constructor(){}

  ngOnInit(): void {
  }


  deleteTask(){
    console.log("Eliminar tarea", this.task?.title);
    this.delete.emit(this.task)
  }
}
