import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//aca hacemos la conexion con el Backend
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperiencieComponent } from './components/experience/new-experiencie.component';
import { EditExperiencieComponent } from './components/experience/edit-experiencie/edit-experiencie.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { EditSkillComponent } from './components/skills/edit-skills/edit-skills.component';
import { NewSkillComponent } from './components/skills/new-skills.component';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade/edit-acercade.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { EditProyectComponent } from './components/proyectos/edit-proyect/edit-proyect.component';
import { NewProyectComponent } from './components/proyectos/new-proyect.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './components/spinner/loading.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperiencieComponent,
    EditExperiencieComponent,
    NewEducationComponent,
    EditEducationComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercadeComponent,
    EditProyectComponent,
    NewProyectComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    ContactComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider,
    {provide: HTTP_INTERCEPTORS, 
    useClass: LoadingInterceptor, 
    multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
