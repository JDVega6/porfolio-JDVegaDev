import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { BriefCaseComponent } from '../../shared/Icons/brief-case/brief-case.component';
import { SectionContainerComponent } from '../../components/section-container/section-container.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { AngularComponent } from '../../shared/Icons/angular/angular.component';
import { HammerComponent } from '../../shared/Icons/hammer-icon/hammer-icon.component';
import { EducationComponent } from '../../components/education/education.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
              HeaderComponent,
              SectionContainerComponent,
              SectionTitleComponent,
              IntroductionComponent,
              AngularComponent,
              ProjectsComponent,
              AboutMeComponent,
              ExperienceComponent, 
              BriefCaseComponent,
              HammerComponent,
              EducationComponent,
              FooterComponent           
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
