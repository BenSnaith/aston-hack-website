import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CountdownComponent } from './components/countdown/countdown.component';
import { WindowRefService } from './services/window-ref.service';
import { GalleryComponent } from './components/gallery/gallery.component';
import {FooterComponent} from './components/footer/footer.component';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {ScrollTopComponent} from './components/scroll-top/scroll-top.component';
import {SponsorsComponent} from './components/sponsors/sponsors.component';
import {FaqComponent} from './components/faq/faq.component';
import {ContactComponent} from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [WindowRefService],
  imports: [
    RouterOutlet,
    NavbarComponent,
    CountdownComponent,
    GalleryComponent,
    FooterComponent,
    ScheduleComponent,
    ScrollTopComponent,
    SponsorsComponent,
    FaqComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
