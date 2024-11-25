import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WindowRefService} from '../../services/window-ref.service';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.css'
})
export class ScrollTopComponent implements OnInit {
  window: Window;

  @ViewChild('scrollTopDiv') scrollTopDiv: ElementRef;

  constructor(windowRef: WindowRefService) {
    this.window = window;
  }

  ngOnInit(): void {
    this.window.addEventListener('scroll', this.showButton, true);
  };

  scrollToTop(): void {
    this.window.scrollTo(0, 0);
  }

  showButton = (): void => {
    if(this.window.scrollY > 75) {
      this.scrollTopDiv.nativeElement.classList.add('scroll-show');
      this.scrollTopDiv.nativeElement.classList.remove('scroll-hidden');
    }
    if(this.window.scrollY < 75) {
      this.scrollTopDiv.nativeElement.classList.remove('scroll-show');
      this.scrollTopDiv.nativeElement.classList.add('scroll-hidden');
    }
  }
}
