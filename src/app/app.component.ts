import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjectService} from './project/project.service';
import {Project} from './model';
import {Observable} from 'rxjs';

@Component({
  selector: 'mac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  projects: Observable<Project[]>;
  selectedProject: Observable<Project>;

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
    this.selectedProject = this.projectService.getSelectedProject();
  }

  selectProject(id: number) {
    this.projectService.selectProject(id);
  }

  ngOnInit() {

  }
}
