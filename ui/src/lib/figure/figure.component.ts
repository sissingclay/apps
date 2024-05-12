import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-ui-figure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './figure.component.html',
  styleUrl: './figure.component.scss',
})
export class UiLibFigureComponent {
  subtitle = input(false);
  background = input<'secondary' | 'tertiary'>();
  image = input<string>('');

  sanitizeImageUrl = computed(() => {
    return this.sanitizer.bypassSecurityTrustUrl(this.image());
  });

  private sanitizer = inject(DomSanitizer);
}
