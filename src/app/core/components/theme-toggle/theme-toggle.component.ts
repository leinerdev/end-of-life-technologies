import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styles: [],
})
export class ThemeToggleComponent implements OnInit {
  darkMode: boolean = false;

  ngOnInit(): void {
    // Check if dark mode is enabled from local storage or prefers-color-scheme
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.darkMode = true;
    }
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }
}
