import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private collapsedSubject = new BehaviorSubject<boolean>(false);
  public collapsed$ = this.collapsedSubject.asObservable();

  get collapsed(): boolean {
    return this.collapsedSubject.value;
  }

  toggle(): void {
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }
}
