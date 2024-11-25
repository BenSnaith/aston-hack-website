import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CountdownComponent } from './components/countdown/countdown.component';
import { WindowRefService } from './services/window-ref.service';
import { GalleryComponent } from './components/gallery/gallery.component';
import {FooterComponent} from './components/footer/footer.component';
import {FaqItemComponent} from './components/faq-item/faq-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [WindowRefService],
  imports: [RouterOutlet, NavbarComponent, CountdownComponent, GalleryComponent, FooterComponent, FaqItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
