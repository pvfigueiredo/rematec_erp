import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})

export class HeaderComponent {
  constructor(private authService: AuthService) { }
  openLoginModal(): void {
    this.authService.openLoginModal();
  }

  openSignupModal(): void {
    this.authService.openSignupModal();
  }

}
