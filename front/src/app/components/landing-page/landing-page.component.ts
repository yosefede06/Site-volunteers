import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export interface Project {
  Name: string;
  Description: string;
  Link: string;
  img?: string;
}

const projectsUrl = 'assets/data/projects.json';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  projects$: Observable<Project[]> | undefined;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.projects$ = this.http.get<Project[]>(projectsUrl);
  }

}
