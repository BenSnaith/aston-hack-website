import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {
  @Input({ required: true, transform: trimString }) imageSrc = '';
}

function trimString(str: string | undefined): string {
  return str?.trim() ?? '';
}
