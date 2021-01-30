import { Component, OnInit } from '@angular/core';
import { Tag } from 'cloudee';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
  tags: Tag[] = [
    { weight: 24, text: 'SCSS', image: '../favicon.ico' },
    { weight: 18, text: 'AngularJS', image: '../favicon.ico' },
    { weight: 20, text: 'JavaScript', image: '../favicon.ico' },
    { weight: 20, text: 'TypeScript', image: '../favicon.ico' },
    { weight: 18, text: 'Node', image: '../favicon.ico' },
    { weight: 24, text: 'Angular', image: '../favicon.ico' },
    { weight: 24, text: 'HTML5', image: '../favicon.ico' },
    { weight: 24, text: 'CSS3', image: '../favicon.ico' },
    { weight: 24, text: 'Bootstrap', image: '../favicon.ico' },
    { weight: 16, text: 'GraphQL', image: '../favicon.ico' },
    { weight: 18, text: 'Express', image: '../favicon.ico' },
    { weight: 24, text: 'Git', image: '../favicon.ico' },
    { weight: 18, text: 'Protractor', image: '../favicon.ico' },
    { weight: 16, text: 'Jasmine', image: '../favicon.ico' },
    { weight: 20, text: 'REST', image: '../favicon.ico' },
    { weight: 22, text: 'Bitbucket', image: '../favicon.ico' },
    { weight: 18, text: 'Karma', image: '../favicon.ico' },
    { weight: 24, text: 'Jira', image: '../favicon.ico' },
    { weight: 20, text: 'Confluence', image: '../favicon.ico' },
    { weight: 18, text: 'JSP', image: '../favicon.ico' },
    { weight: 22, text: 'SVN', image: '../favicon.ico' },
    { weight: 20, text: 'jQuery', image: '../favicon.ico' },
    { weight: 18, text: 'Jenkins', image: '../favicon.ico' },
    { weight: 20, text: 'oAuth 2.0', image: '../favicon.ico' }
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
    outlineColour: '#039',
    imageMode: 'text'
  };

  constructor() { }

  ngOnInit() {
    const canvas = document.getElementsByTagName('canvas')[0];
    canvas.width  = 400;
    canvas.height = 400;
  }

  tagClicked(tag: any) {
    console.log(tag);
  }

}
