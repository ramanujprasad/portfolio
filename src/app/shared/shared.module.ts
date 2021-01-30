import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { ParticlesModule } from 'angular-particle';
import { CloudyModule } from 'cloudee';
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
    CloudyModule,
    MatCardModule
  ],
  exports: [HeaderComponent, ParticleComponent, SkillsComponent]
})
export class SharedModule {}
