import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent {

  name = 'Victor Mataba'

  role = 'Software Developer'

  email = 'matabavn@gmail.com'

  path = 'assets/images/victor.jpg'

  skills = [
    'Java',
    'Spring',
    'Java Script',
    'Type Script',
    'Spring Boot',
    'AWS',
    'Angular',
    'MySQL'
  ]

  linkedin = 'https://www.linkedin.com/in/victor-mataba-73b449175'

  twitter = 'https://twitter.com/matabavn'

  github = 'https://github.com/vmataba'
}
