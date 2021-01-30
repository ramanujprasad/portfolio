import { Component, OnInit } from '@angular/core';
import { Tag } from 'cloudee';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  tags: Tag[] = [
    { weight: 35, text: 'SCSS', image: '../favicon.ico'},
    { weight: 35, text: 'AngularJS', image: '../favicon.ico' },
    { weight: 35, text: 'JavaScript', image: '../favicon.ico' },
    { weight: 35, text: 'TypeScript', image: '../favicon.ico' },
    { weight: 35, text: 'Node', image: '../favicon.ico' },
    { weight: 35, text: 'Karma', image: '../favicon.ico' },
    { weight: 35, text: 'jQuery', image: '../favicon.ico' },
    { weight: 35, text: 'CSS3', image: '../favicon.ico' },
    { weight: 35, text: 'GraphQL', image: '../favicon.ico' },
    { weight: 35, text: 'Express', image: '../favicon.ico' },
    { weight: 35, text: 'Git', image: '../favicon.ico' },
    { weight: 35, text: 'Protractor', image: '../favicon.ico' },
    { weight: 35, text: 'Jasmine', image: '../favicon.ico' },
    { weight: 35, text: 'REST', image: '../favicon.ico' },
    { weight: 35, text: 'Bitbucket', image: '../favicon.ico' },
    { weight: 35, text: 'Angular', image: '../favicon.ico' },
    { weight: 35, text: 'Jira', image: '../favicon.ico' },
    { weight: 35, text: 'Confluence', image: '../favicon.ico' },
    { weight: 35, text: 'JSP', image: '../favicon.ico' },
    { weight: 35, text: 'SVN', image: '../favicon.ico' },
    { weight: 35, text: 'jQuery', image: '../favicon.ico' },
    { weight: 35, text: 'Jenkins', image: '../favicon.ico' },
    { weight: 35, text: 'oAuth 2.0', image: '../favicon.ico' },
    { weight: 35, text: 'HTML5', image: '../favicon.ico' },
    { weight: 35, text: 'Optimizely', image: '../favicon.ico' },
    { weight: 35, text: 'NgRX', image: '../favicon.ico' },
    { weight: 35, text: 'Bootstrap', image: '../favicon.ico' },
    { weight: 35, text: 'Angular Material', image: '../favicon.ico' },
    { weight: 35, text: 'Flex', image: '../favicon.ico' }
  ];

  options: TagCanvasOptions = {
    dragControl: true,
    clickToFront: 500,
    initial: [ .1, 0 ],
    weight: true,
    textFont: 'Impact,"Arial Black",sans-serif',
    maxSpeed: 0.02,
    fadeIn: 800,
    textHeight: 25,
    imageMode: 'text'
  };

  constructor() { }

  ngOnInit() {
    const canvas = document.getElementsByTagName('canvas')[0];
    canvas.width  = 500;
    canvas.height = 500;
  }

  tagClicked(tag: any) {
    console.log(tag);
  }
}
