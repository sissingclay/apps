import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Official } from './officials.interface';

@Component({
  selector: 'lib-officials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './officials.component.html',
  styleUrl: './officials.component.scss',
})
export class OfficialsComponent {
  official = input.required<Official>();
  @Input() showEmail = true;
  @Input() showPhoneNumber = false;
  @Input() isCommittee = false;

  image = 'https://bulma.io/assets/images/placeholders/128x128.png';
}
