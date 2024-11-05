import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CountdownComponent } from './countdown/countdown.component';
import {WindowRefService} from './window-ref.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [WindowRefService],
  imports: [RouterOutlet, NavbarComponent, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
