import { Component } from '@angular/core';
import { HeaderLink } from 'src/app/models/header-link';
import { HeaderLinks } from 'src/app/data/header-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  links: HeaderLink[] = HeaderLinks;
}
