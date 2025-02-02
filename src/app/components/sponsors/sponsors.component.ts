import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {SponsorCardComponent} from '../sponsor-card/sponsor-card.component';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [HeaderComponent, SponsorCardComponent],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css'
})
export class SponsorsComponent {

}
