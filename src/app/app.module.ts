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

import {ProjectComponent} from './project/project/project.component';

import {ProjectService} from './project/project.service';
import {TabsComponent} from './ui/tabs/tabs/tabs.component';


import {NavigationComponent} from './ui/navigation/navigation/navigation.component';
import {TaskListContainerComponent} from './container/task-list-container/task-list-container.component';
import {ProjectContainerComponent} from './container/project-container/project-container.component';
import {NavigationSectionComponent} from './ui/navigation-section/navigation-section/navigation-section.component';
import {NavigationItemComponent} from './ui/navigation-item/navigation-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    EnterTaskComponent,
    CheckboxComponent,
    ToggleComponent,
    TaskListContainerComponent,
    ProjectComponent,
    ProjectContainerComponent,
    TabsComponent,
    NavigationItemComponent,
    NavigationSectionComponent,
    NavigationComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Database, {
      delay: 100
    })
  ],
  providers: [
    TaskService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
