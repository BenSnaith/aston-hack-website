import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.css'
})
export class FaqItemComponent {
  @Input({ required: true }) heading: string;

  @ViewChild('content') content: ElementRef;

  toggle: boolean = false;

  expandContent = () => {
    if(!this.toggle) {
      this.content.nativeElement.classList.remove("content-hidden");
      this.content.nativeElement.classList.add("content-show");
      this.toggle = !this.toggle;
    }
    else {
      this.content.nativeElement.classList.remove("content-show");
      this.content.nativeElement.classList.add("content-hidden");
      this.toggle = !this.toggle;
    }
  }
}
