import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
  standalone: false
})
export class FeatureCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() iconPath: string = '';
}
