import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, ThemeToggleComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  navItems = [
    // {
    //   title: 'Home',
    //   label: 'introduction',
    //   url: 'introduction',
    // },
    {
      title: 'Experiencia',
      label: 'experiencia',
      url: 'experiencia',
    },
    {
      title: 'Proyectos',
      label: 'proyectos',
      url: 'proyectos',
    },
    {
      title: 'Educacion',
      label: 'educacion',
      url: 'educacion',
    },
    {
      title: 'Sobre mí',
      label: 'sobre-mi',
      url: 'sobre-mi',
    },
    // {
    //   title: 'Contacto',
    //   label: 'contacto',
    //   url: 'Juanguativa07@gmail.com',
    // },
  ];

  isMenuOpen = true;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navItems.forEach((item) => {
              if (item.getAttribute('aria-label') === entry.target.id) {
                item.classList.add('text-blue-600');
              } else {
                item.classList.remove('text-blue-600');
              }
            });
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.40,
      }
    );

    sections.forEach((section) => observer.observe(section));

    document.onvisibilitychange = () => {
      if (document.visibilityState === 'hidden') {
        observer.disconnect();
      } else {
        sections.forEach((section) => observer.observe(section));
      }
    };
  }
}


