import { Component } from '@angular/core';
import { PROJECTS } from '../../projects';
import { ProjectCardComponent } from '../../common/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  // Simple model for rendering project cards
  projects = PROJECTS;
}
