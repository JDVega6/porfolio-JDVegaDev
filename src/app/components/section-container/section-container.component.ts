import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-container.component.html',
  host: { class: 'block' }

})
export class SectionContainerComponent {
 @Input() id: string = '#'; 
 @Input() class: string = 'py-12';
}
