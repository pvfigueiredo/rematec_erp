import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { environment } from '@environments/environment';
import { User } from '@core/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private loginModalVisibleSubject = new BehaviorSubject<boolean>(false);
  public loginModalVisible$ = this.loginModalVisibleSubject.asObservable();

  private signupModalVisibleSubject = new BehaviorSubject<boolean>(false);
  public signupModalVisible$ = this.signupModalVisibleSubject.asObservable();

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(credentials: { email: string, password: string}): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/Auth/login`, credentials)
      .pipe(
        tap(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.closeLoginModal();
        })
      );
  }

  register(user: any): Observable<User> {
    console.log('Register attempt:', user);
    return this.http.post<User>(`${environment.apiUrl}/Auth/register`, user);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  openLoginModal(): void {
    this.loginModalVisibleSubject.next(true);
  }

  closeLoginModal(): void {
    this.loginModalVisibleSubject.next(false);
  }

  openSignupModal(): void {
    this.signupModalVisibleSubject.next(true);
  }

  closeSignupModal(): void {
    this.signupModalVisibleSubject.next(false);
  }
}
