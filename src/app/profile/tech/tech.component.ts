import { Component, OnInit } from '@angular/core';
import { Tag } from 'ng-tagcanvas';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
  tags: Tag[] = [
    { weight: 24, text: 'SCSS' },
    { weight: 18, text: 'AngularJS' },
    { weight: 20, text: 'JavaScript' },
    { weight: 20, text: 'TypeScript' },
    { weight: 18, text: 'Node' },
    { weight: 24, text: 'Angular 2x' },
    { weight: 24, text: 'HTML5' },
    { weight: 24, text: 'CSS3' },
    { weight: 24, text: 'Bootstrap' },
    { weight: 16, text: 'GraphQL' },
    { weight: 18, text: 'Express' },
    { weight: 24, text: 'Git' },
    { weight: 18, text: 'Protractor' },
    { weight: 16, text: 'Jasmine' },
    { weight: 20, text: 'REST' },
    { weight: 22, text: 'Bitbucket' },
    { weight: 18, text: 'Karma' },
    { weight: 24, text: 'Jira' },
    { weight: 20, text: 'Confluence' },
    { weight: 18, text: 'JSP' },
    { weight: 22, text: 'SVN' },
    { weight: 20, text: 'jQuery' },
    { weight: 18, text: 'Jenkins' },
    { weight: 20, text: 'oAuth 2.0' }
  ];

  options: TagCanvasOptions = {
    dragControl: true,
    clickToFront: 500,
    initial: [ .1, 0 ],
    weight: true,
    textFont: 'Niconne, sans-serif',
    maxSpeed: 0.02,
    fadeIn: 800,
    textColour: '#900',
    textHeight: 25,
    outlineMethod: 'colour',
    outlineColour: '#039'
  };

  constructor() { }

  ngOnInit() {
    const canvas = document.getElementsByTagName('canvas')[0];
    canvas.width  = 500;
    canvas.height = 500;
  }

  tagClicked(tag) {
    console.log(tag);
  }

}
