import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { WindowRefService } from '../../services/window-ref.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(windowRef: WindowRefService) {
    this.window = windowRef.nativeWindow;
  }

  @ViewChild('navbarDiv') navbarDiv: ElementRef;

  window: Window;

  ngOnInit(): void {
    this.window.addEventListener("scroll", this.transNav, true);
  }

  transNav = (): void => {
    if(this.window.scrollY > 75) {
      // this.navbarDiv.nativeElement.style.setProperty("background-color", "#18181b");
      this.navbarDiv.nativeElement.classList.remove("static-nav");
      this.navbarDiv.nativeElement.classList.add("scrolled-nav");
    }
    if(this.window.scrollY < 75) {
      // this.navbarDiv.nativeElement.style.setProperty("background-color", "transparent")
      this.navbarDiv.nativeElement.classList.remove("scrolled-nav");
      this.navbarDiv.nativeElement.classList.add("static-nav");
    }
  }
}
