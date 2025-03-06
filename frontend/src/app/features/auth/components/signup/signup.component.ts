import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: false
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { notMatched: true };
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    this.authService.register(this.signupForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.authService.closeSignupModal();
        // Redirecionar ou mostrar mensagem de sucesso
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Signup error:', error);
        // Mostrar mensagem de erro
      }
    });
  }

  switchToLogin(): void {
    this.authService.closeSignupModal();
    this.authService.openLoginModal();
  }
}
