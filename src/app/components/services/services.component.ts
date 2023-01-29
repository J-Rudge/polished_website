import { Component } from '@angular/core';
import { Content } from 'src/app/models/content';
import { Contents } from 'src/app/data/contents';
import { Service } from 'src/app/models/service';
import { Services } from 'src/app/data/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  content? : Content = Contents.find(c => c.title == 'Services');
  services?: Service[] = Services;
}
