import { Component } from '@angular/core';
import { GithubComponent } from '../../shared/Icons/git-hub/git-hub.component';
import { LinkedInComponent } from '../../shared/Icons/linked-in/linked-in.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { GmailComponent } from '../../shared/Icons/gmail/gmail.component';

@Component({
  selector: 'app-social-net',
  standalone: true,
  imports: [IconButtonComponent,GithubComponent,LinkedInComponent, GmailComponent],
  templateUrl: './social-net.component.html',
  
})
export class SocialNetComponent {

}
