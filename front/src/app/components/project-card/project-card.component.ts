import {Component, Input} from '@angular/core';
import {Project} from '../landing-page/landing-page.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;
  protected readonly location = location;
}
