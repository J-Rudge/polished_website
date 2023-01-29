import { Component } from '@angular/core';
import { Content } from 'src/app/models/content';
import { Contents } from 'src/app/data/contents';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  content?: Content = Contents.find(c => c.title == 'Gallery');
}
