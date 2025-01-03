import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences = [
    {
      "title": "Desarrollador De software",
      "company": "Pevaar Software Factory",
      "description": `Contribuí en el desarrollo de plataformas web basadas en microservicios REST, utilizando tecnologías como C# y .NET 7/8. Hábil en integración con SQL Server, monitoreo con OpenSearch y migración de aplicaciones a contenedores en AWS con Docker y CI/CD en GitHub Actions. Destacado por la modernización de microservicios a .NET 7/8, optimización de rendimiento y adopción de metodologías ágiles como Scrum para mejorar procesos y colaboración.`,
      "date": "Nov/2022 - actualmente"
    },
  ]
}
