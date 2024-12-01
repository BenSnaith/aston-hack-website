import { Component } from '@angular/core';
import {FaqItemComponent} from "../faq-item/faq-item.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-faq',
  standalone: true,
    imports: [
        FaqItemComponent,
        HeaderComponent
    ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

}
