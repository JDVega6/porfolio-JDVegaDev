import { Component } from '@angular/core';

@Component({
  selector: 'themeToggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {
 isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
