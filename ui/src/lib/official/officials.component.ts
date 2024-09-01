import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-officials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './officials.component.html',
  styleUrl: './officials.component.css',
})
export class OfficialsComponent implements OnInit {
  official = input.required<{
    fields: {
      name?: string;
      emailAddress?: string;
      phoneNumber?: string;
      type?: string[];
      image?: { sys: { id: string } };
    };
  }>();

  assets = input<any[]>();
  image = 'https://bulma.io/assets/images/placeholders/128x128.png';

  ngOnInit() {
    console.log('this.official().fields', this.official().fields);
    if (this.official().fields.image) {
      console.log('test');
      this.assets()?.forEach((asset) => {
        console.log('asset', asset);
        if (asset.sys.id === this.official().fields.image?.sys.id) {
          this.image = asset.fields.file.url;
        }
      });
    }
  }
}
