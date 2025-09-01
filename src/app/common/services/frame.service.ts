import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrameService {
  private linkSubject = new BehaviorSubject<string | null>(null);
  currentLink$ = this.linkSubject.asObservable();

  openLink(link: string) {
    this.linkSubject.next(link);
  }

  clearLink() {
    this.linkSubject.next(null);
  }
}
