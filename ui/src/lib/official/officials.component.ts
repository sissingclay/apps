import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-officials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './officials.component.html',
  styleUrl: './officials.component.css',
})
export class OfficialsComponent {
  official = input.required<{
    fields: {
      name?: string;
      emailAddress?: string;
      phoneNumbner?: string;
      type?: string[];
      image?: string;
    };
  }>();
}
