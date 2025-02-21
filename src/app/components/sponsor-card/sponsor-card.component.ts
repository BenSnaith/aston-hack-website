import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-sponsor-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './sponsor-card.component.html',
  styleUrl: './sponsor-card.component.css'
})
export class SponsorCardComponent {
  @Input({ required: true }) image: string = '';
  @Input({ required: false }) class: string = '';
  @Input({ required: true }) imageAlt: string = '';
  @Input({ required: true }) imageWidth: number;
  @Input({ required: true }) imageHeight: number;
  @Input({ required: true }) websiteHref: string = '';
}
