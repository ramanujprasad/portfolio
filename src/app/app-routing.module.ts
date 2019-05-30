import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './profile/home/home.component';
import { AboutComponent } from './profile/about/about.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ContactComponent } from './shared/contact/contact.component';
import { SkillsComponent } from './shared/skills/skills.component';
import { AwardsComponent } from './shared/awards/awards.component';
import { ExperienceComponent } from './shared/experience/experience.component';

// Routing in the application
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
