import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade/edit-acercade.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperiencieComponent } from './components/experience/edit-experiencie/edit-experiencie.component';
import { NewExperiencieComponent } from './components/experience/new-experiencie.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditSkillComponent } from './components/skills/edit-skills/edit-skills.component';
import { NewSkillComponent } from './components/skills/new-skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperiencieComponent},
  {path: 'editexp/:id', component: EditExperiencieComponent},
  {path: 'nuevaedu', component: NewEducationComponent},
  {path: 'editedu/:id', component: EditEducationComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'editaracercade/:id', component: EditAcercadeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
