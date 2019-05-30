import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { TagCanvasModule } from 'ng-tagcanvas';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './../shared/shared.module';
import { TechComponent } from './tech/tech.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    TechComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    TranslateModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    SharedModule,
    TagCanvasModule
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ]
})
export class ProfileModule { }
