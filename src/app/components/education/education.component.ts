import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'Education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  
})
export class EducationComponent {
  experiences = [
    {
      "title": "Diplomado en Arquitectura de Software y Cloud Computing",
      "company": "Universidad Pontificia Javeriana de Cali",
      "date": "Jul/2024 - Nov/2024"
    },
    {
      "title": "Ingenieria Mecatronica",
      "company": "Universidad Militar Nueva Granada",
      "date": "2016 - 2022"
    },
    {
      "title": "Desarrollo de aplicaciones Web",
      "company": "Universidad Industrial de Santander - MINTIC ",
      "date": "2022"
    },
    {
      "title": "Desarrollador Web Junior",
      "company": "COLNODO - Talento Juventic ",
      "date": "2021"
    },
  ]
}
