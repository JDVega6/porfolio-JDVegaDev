import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GithubComponent } from '../../shared/Icons/git-hub/git-hub.component';
import { LinkedInComponent } from '../../shared/Icons/linked-in/linked-in.component';
import { AngularComponent } from '../../shared/Icons/angular/angular.component';
import { TypeScriptComponent } from '../../shared/Icons/type-script/type-script.component';
import { CSSComponent } from '../../shared/Icons/css/css.component';
import { RabbitIconComponent } from '../../shared/Icons/rabbit-icon/rabbit-icon.component';
import { CSharpIconComponent } from '../../shared/Icons/csharp-icon/csharp-icon.component';
import { DockerIconComponent } from '../../shared/Icons/docker-icon/docker-icon.component';
import { RedisIconComponent } from '../../shared/Icons/redis-icon/redis-icon.component';
import { HTMLIconComponent } from '../../shared/Icons/htmlicon/htmlicon.component';
import { ElasticsearchIconComponent } from '../../shared/Icons/elasticsearch-icon/elasticsearch-icon.component';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [
              CommonModule,
              AngularComponent,
              GithubComponent,
              LinkedInComponent,
              CSSComponent,
              RabbitIconComponent,
              CSharpIconComponent,
              DockerIconComponent,
              RedisIconComponent,
              HTMLIconComponent,
              ElasticsearchIconComponent
            ],
  templateUrl: './projects.component.html',
  host: { class: 'block' }
})

export class ProjectsComponent {


  TAGS: { [key: string]: any } = {
    TypeScript: {
      name: 'TypeScript',
      class: 'bg-gradient-to-l from-[#227DF5] to-[#CFE6F6] text-white',
      icon: TypeScriptComponent, 
    },
    Angular: {
      name: 'Angular',
      class: 'bg-gradient-to-l from-[#C3002F] to-[#ffdde1]  w-full text-white',
      icon: AngularComponent, 
    },
    CSS: {
      name: 'CSS',
      class: 'bg-gradient-to-l from-[#0636F5] to-[#CFE6F6]  w-full text-white',
      icon: CSSComponent, 
    },
    RabbitMQ: {
      name: 'RabbitMQ',
      class: 'bg-gradient-to-l from-[#F5772A] to-[#F5E1D5]  w-full text-white',
      icon: RabbitIconComponent, 
    },
    CSharp: {
      name: 'CSharp',
      class: 'bg-gradient-to-l from-[#7D0DF5] to-[#E1CAF5]  w-full text-white',
      icon: CSharpIconComponent, 
    },
    Docker: {
      name: 'Docker',
      class: 'bg-gradient-to-l from-[#227DF5] to-[#CFE6F6] text-white',
      icon: DockerIconComponent, 
    },
    Redis: {
      name: 'Redis',
      class: 'bg-gradient-to-l from-[#EF160F] to-[#ffdde1]  w-full text-white',
      icon: RedisIconComponent, 
    },
    HTML: {
      name: 'HTML',
      class: 'bg-gradient-to-l from-[#F5772A] to-[#F5E1D5]  w-full text-white',
      icon: HTMLIconComponent, 
    },
    Elastic: {
      name: 'ElasticSearch',
      class: 'bg-gradient-to-l from-[#269357] to-[#A2EAB4]  w-full text-white',
      icon: ElasticsearchIconComponent, 
    },
  };

  PROJECTS = [
    {
      title: "Marvel Explorer: Tu Portal al Universo de Superhéroes",
      description:
        `Una aplicación desarrollada en Angular que se integra con la API de Marvel.
         Permite listar superhéroes junto con 
         sus descripciones, cómics y algunas de sus historias más destacadas. Diseñada 
         para explorar el universo Marvel de forma rápida, interactiva.`,
      link: "https://marvelapp-jdvegadev.netlify.app/home",
      github: "https://github.com/JDVega6/MarvelApp",
      image: "img/API_MARVEL.webp",
      tags: [this.TAGS['Angular'], this.TAGS['TypeScript'], this.TAGS['HTML'], this.TAGS['CSS']], 

    },
    {
      title: "Implementación del Patrón CQRS con Microservicios",
      description:
              `Prueba de concepto que implementa el patrón CQRS con microservicios en .NET 8. Incluye comunicación asíncrona 
              con RabbitMQ, cacheo con Redis, búsqueda avanzada y logging con Elasticsearch, y una infraestructura orquestada con Docker Compose.`,
      link: "https://github.com/JDVega6/CQRS-Pattern",
      image: "img/Diagrama_CQRS.webp",
      tags: [this.TAGS['CSharp'], this.TAGS['RabbitMQ'], this.TAGS['Docker'], this.TAGS['Redis'], this.TAGS['Elastic']],
    },
  ]
}
