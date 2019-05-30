import { Component, OnInit } from '@angular/core';
import { Tag } from 'ng-tagcanvas';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  tags: Tag[] = [
    { weight: 35, text: 'SCSS' },
    { weight: 35, text: 'AngularJS' },
    { weight: 35, text: 'JavaScript' },
    { weight: 35, text: 'TypeScript' },
    { weight: 35, text: 'Node' },
    { weight: 35, text: 'Karma' },
    { weight: 35, text: 'jQuery' },
    { weight: 35, text: 'CSS3' },
    { weight: 35, text: 'GraphQL' },
    { weight: 35, text: 'Express' },
    { weight: 35, text: 'Git' },
    { weight: 35, text: 'Protractor' },
    { weight: 35, text: 'Jasmine' },
    { weight: 35, text: 'REST' },
    { weight: 35, text: 'Bitbucket' },
    { weight: 35, text: 'Angular 2x' },
    { weight: 35, text: 'Jira' },
    { weight: 35, text: 'Confluence' },
    { weight: 35, text: 'JSP' },
    { weight: 35, text: 'SVN' },
    { weight: 35, text: 'jQuery' },
    { weight: 35, text: 'Jenkins' },
    { weight: 35, text: 'oAuth 2.0' },
    { weight: 35, text: 'HTML5' },
    { weight: 35, text: 'Optimizely' },
    { weight: 35, text: 'NgRX' },
    { weight: 35, text: 'Bootstrap' },
    { weight: 35, text: 'Angular Material' },
    { weight: 35, text: 'Flex' }
  ];

  options: TagCanvasOptions = {
    dragControl: true,
    clickToFront: 500,
    initial: [ .1, 0 ],
    weight: true,
    textFont: 'Impact,"Arial Black",sans-serif',
    maxSpeed: 0.02,
    fadeIn: 800,
    textColour: null,
    textHeight: 25
  };

  constructor() { }

  ngOnInit() {
    const canvas = document.getElementsByTagName('canvas')[0];
    canvas.width  = 700;
    canvas.height = 700;
  }

  tagClicked(tag) {
    console.log(tag);
  }
}
