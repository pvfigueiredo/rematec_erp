import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    this.authService.login(this.loginForm.value).subscribe({
      next: (user) => {
        this.isSubmitting = false;
        this.authService.closeLoginModal();
        console.log(user);
        this.router.navigate(['/main']);
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Login error:', error);
        alert("Erro ao fazer o login.");
      }
    });
  }

  switchToSignup(): void {
    this.authService.closeLoginModal();
    this.authService.openSignupModal();
  }
}
