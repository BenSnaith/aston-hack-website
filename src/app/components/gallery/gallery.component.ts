import { Component } from '@angular/core';
import {ImageCardComponent} from '../image-card/image-card.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageCardComponent, HeaderComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images: Array<string>;

  constructor() {
    this.images = [
      "gallery_one.jpg",
      "gallery_two.jpg",
      "gallery_three.png",
      "gallery_four.png",
      "gallery_five.jpg",
      "gallery_six.jpg",
      "gallery_seven.png",
      "gallery_eight.jpg",
      "gallery_nine.jpg",
      "gallery_ten.jpeg",
      "gallery_eleven.jpg",
      "gallery_twelve.jpg",
      "gallery_thirteen.jpg",
      "gallery_fourteen.jpeg",
      "gallery_fifteen.jpeg",
      "gallery_sixteen.jpeg"
    ];
  }
}
