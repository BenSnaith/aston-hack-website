import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  state,
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';
import {NgForOf, CommonModule} from '@angular/common';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [NgForOf, CommonModule, HeaderComponent],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
  animations: [
    trigger('slideState', [
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1,
        zIndex: 1
      })),
      state('hidden', style({
        transform: 'translateX({{translateX}})',
        opacity: 1,
        zIndex: 0
      }), { params: { translateX: '100%'} }),
      transition('* <=> *', [
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class ImageSliderComponent {
  images: string[] = [];
  index: number;
  currentIndex: number = 0;

  private slideInterval: any;

  constructor() {
    this.index = 8;
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
  };

  // ngOnInit(): void {
  //   this.startAutoSlide();
  // };
  //
  // ngOnDestroy(): void {
  //   this.stopAutoSlide();
  // };
  //
  // startAutoSlide(): void {
  //   this.slideInterval = setInterval((): void => {
  //     this.nextSlide();
  //   }, 3000)
  // };
  //
  // stopAutoSlide(): void {
  //   if(this.slideInterval) {
  //     clearInterval(this.slideInterval);
  //   }
  // };

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  };

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
