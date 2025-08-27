import { Component } from '@angular/core';
import { PROJECTS } from '../../projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  // Simple model for rendering project cards
  projects = PROJECTS;
}
