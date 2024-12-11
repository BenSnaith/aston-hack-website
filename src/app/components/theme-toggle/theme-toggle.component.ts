import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {DocumentRefService} from '../../services/document-ref.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent implements OnInit {
  document: Document;
  darkMode: boolean = false;
  theme: string = " ";

  constructor(documentRef: DocumentRefService) {
    this.document = document;
  }

  toggleTheme(): void {
    if (this.darkMode) {
      this.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      this.darkMode = !this.darkMode;
    } else {
      this.document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      this.darkMode = !this.darkMode;
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem("theme") === "dark") {
      this.document.documentElement.classList.add("dark");
      this.darkMode = true;
    }
  }
}
