import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>

    <!-- Modal de Login -->
    <app-modal [isOpen]="isLoginModalOpen" [title]="'Entrar na sua conta'" (close)="closeLoginModal()">
      <app-login></app-login>
    </app-modal>

    <!-- Modal de Cadastro -->
    <app-modal [isOpen]="isSignupModalOpen" [title]="'Criar uma nova conta'" (close)="closeSignupModal()">
      <app-signup></app-signup>
    </app-modal>
  `,
  styles: [],
  standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Rematec ERP';
  isLoginModalOpen = false;
  isSignupModalOpen = false;

  private loginSubscription!: Subscription;
  private signupSubscription!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Assina observables para controlar a visibilidade dos modais
    this.loginSubscription = this.authService.loginModalVisible$.subscribe(
      isVisible => this.isLoginModalOpen = isVisible
    );

    this.signupSubscription = this.authService.signupModalVisible$.subscribe(
      isVisible => this.isSignupModalOpen = isVisible
    );
  }

  ngOnDestroy(): void {
    // Cancela as assinaturas para evitar vazamentos de memória
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }

    if (this.signupSubscription) {
      this.signupSubscription.unsubscribe();
    }
  }

  closeLoginModal(): void {
    this.authService.closeLoginModal();
  }

  closeSignupModal(): void {
    this.authService.closeSignupModal();
  }
}
