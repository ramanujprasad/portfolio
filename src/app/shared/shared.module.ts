import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatTooltipModule,
  MatListModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { ParticlesModule } from 'angular-particle';
import { TagCanvasModule } from 'ng-tagcanvas';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParticleComponent } from './particle/particle.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { AwardsComponent } from './awards/awards.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
     HeaderComponent,
     PageNotFoundComponent,
     ParticleComponent,
     ContactComponent,
     SkillsComponent,
     AwardsComponent,
     ExperienceComponent
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
    MatTooltipModule,
    MatListModule,
    ParticlesModule,
    TagCanvasModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    ParticleComponent,
    SkillsComponent
  ]
})
export class SharedModule { }
