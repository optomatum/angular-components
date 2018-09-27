import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppComponent} from './app.component';
import {TaskListComponent} from './tasks/task-list/task-list.component';
import {TaskComponent} from './tasks/task/task.component';
import {EnterTaskComponent} from './tasks/enter-task/enter-task.component';
import {CheckboxComponent} from './ui/checkbox/checkbox.component';
import {ToggleComponent} from './ui/toggle/toggle.component';

import {Database} from './database';
import {TaskService} from './tasks/task.service';
import {TaskListcontainerComponent} from './container/task-listcontainer/task-listcontainer.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    EnterTaskComponent,
    CheckboxComponent,
    ToggleComponent,
    TaskListcontainerComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Database, {
      delay: 100
    })
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
