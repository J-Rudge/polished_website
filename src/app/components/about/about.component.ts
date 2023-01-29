import { Component } from '@angular/core';
import { Content } from 'src/app/models/content';
import { Contents } from 'src/app/data/contents';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  content?: Content = Contents.find(c => c.title == 'About');

}
