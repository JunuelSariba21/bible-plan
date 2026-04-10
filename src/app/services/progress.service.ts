import { Injectable, signal, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  // Use a signal, initialized with an empty array
  completedChapters = signal<string[]>([]);
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Only load from localStorage if we are in the browser
    if (isPlatformBrowser(this.platformId)) {
      const saved = this.loadProgress();
      this.completedChapters.set(saved);
    }
  }

  private loadProgress(): string[] {
    // Double check for browser environment
    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem('bible_progress');
      return data ? JSON.parse(data) : [];
    }
    return [];
  }

  markAsComplete(book: string, chapter: number) {
    const id = `${book}-${chapter}`;
    const current = this.completedChapters();
    
    if (!current.includes(id)) {
      const updated = [...current, id];
      this.completedChapters.set(updated);

      // Only save to localStorage if we are in the browser
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('bible_progress', JSON.stringify(updated));
      }
    }
  }

  getStats() {
    return {
      totalChapters: this.completedChapters().length,
      streak: 12 // Hardcoded for now
    };
  }
}