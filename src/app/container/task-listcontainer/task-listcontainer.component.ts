import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {TaskService} from '../../tasks/task.service';
import {Task, TaskListFilterType} from '../../model';

@Component({
  selector: 'mac-task-listcontainer',
  templateUrl: './task-listcontainer.component.html',
  styleUrls: ['./task-listcontainer.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListcontainerComponent {

  tasks: Observable<Task[]>;
  filteredTasks: Observable<Task[]>;
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activeTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = combineLatest(this.tasks,
      this.activeTaskFilterType)
      .pipe(
        map(([tasks, activeTaskFilterType]) => {
          return tasks.filter((task: Task) => {
            if (activeTaskFilterType === 'all') {
              return true;
            } else if (activeTaskFilterType === 'open') {
              return !task.done;
            } else {
              return task.done;
            }
          });
        })
      );
  }

  activateFilterType(type: TaskListFilterType) {
    this.activeTaskFilterType.next(type);
  }

  addTask(title: string) {
    const task: Task = {
      title, done: false
    };
    this.taskService.addTask(task);
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
  }
}


