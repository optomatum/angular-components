import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Task, TaskListFilterType} from 'src/app/model';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  @Input() taskFilterTypes: TaskListFilterType[];
  @Input() activeTaskFilterType: TaskListFilterType;
  @Input() tasks: Task[];
  @Output() outAddTask = new EventEmitter<string>();
  @Output() outActivateFilterType = new EventEmitter<TaskListFilterType>();
  @Output() outUpdateTask = new EventEmitter<Task>();

  constructor() {
    /*this.tasks = taskService.getTasks();
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
      );*/
  }

  addTask(title: string) {
    this.outAddTask.emit(title);
  }

  updateTask(task: Task) {
    this.outUpdateTask.emit(task);
  }

  activateFilterType(filterType: TaskListFilterType) {
    this.outActivateFilterType.emit(filterType);
  }

  /*  filterTasks() {
      this.filteredTasks = this.tasks
        .filter((task: Task) => {
          if (this.activeTaskFilterType === 'all') {
            return true;
          } else if (this.activeTaskFilterType === 'open') {
            return !task.done;
          } else {
            return task.done;

          }
        });
    }*/
  ngOnInit() {

  }
}
