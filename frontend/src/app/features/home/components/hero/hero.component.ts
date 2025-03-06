import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: false
})

export class HeroComponent {
  constructor(private authService: AuthService) {}

  openSignupModal(): void {
    this.authService.openSignupModal();
  }
}

