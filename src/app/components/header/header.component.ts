import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
