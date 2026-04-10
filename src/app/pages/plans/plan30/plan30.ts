import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BibleService } from '../../../services/bible.service';
import { ProgressService } from '../../../services/progress.service';
import { NavbarComponent } from '../../../components/navbar/navbar';
import { FooterComponent } from '../../../components/footer/footer';
import { ReadingCardComponent } from '../../../components/reading-card/reading-card';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-plan30',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, 
    FooterComponent, 
    ReadingCardComponent
  ],
  templateUrl: './plan30.html',
  styleUrls: ['./plan30.css']
})
export class Plan30Component implements OnInit {
  plans: any[] = [];
  verseData: any = null;
  loading = false;
  currentReadingData: any = null;

  constructor(
    private bibleService: BibleService,
    private progressService: ProgressService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Load the 30-day plan structure from the service
    this.plans = this.bibleService.get30DayPlan();
  }

  /**
   * Handles the click event from the reading cards.
   * Redirects to specific day pages for Days 1-5, 
   * otherwise loads the verse preview in the current page.
   */
  loadVerse(data: { day: number; book: string; start: number; end: number; label: string }) {
    // If the user clicks a day we have created a specific page for:
    if (data.day <= 5) {
      this.router.navigate([`/day${data.day}`]);
      return;
    }

    // For other days, load the scripture preview in the "scroll" reader below the grid
    this.loading = true;
    this.verseData = null;
    this.currentReadingData = data;

    const requests = [];
    for (let i = data.start; i <= data.end; i++) {
      const ref = `${data.book}+${i}`;
      requests.push(
        this.bibleService.getVerse(ref).pipe(
          catchError((err) => {
            console.error("Failed to load chapter:", ref, err);
            return of(null); // Prevents forkJoin from crashing on a single failed chapter
          })
        )
      );
    }

    forkJoin(requests).subscribe({
      next: (results: any[]) => {
        this.verseData = {
          reference: data.label,
          verses: results.flatMap(r => r?.verses || [])
        };
        this.loading = false;
        this.cd.detectChanges();
        
        // Optional: Scroll down to the reader box smoothly
        setTimeout(() => {
          document.querySelector('.verse-box')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      },
      error: (err) => {
        console.error("Critical error fetching verses:", err);
        this.loading = false;
      }
    });
  }

  /**
   * Saves progress for days loaded via the previewer (Day 6+)
   */
  markProgress() {
    if (this.currentReadingData) {
      for (let i = this.currentReadingData.start; i <= this.currentReadingData.end; i++) {
        this.progressService.markAsComplete(this.currentReadingData.book, i);
      }
      alert(`Progress Saved: ${this.currentReadingData.label} is marked as done! ✅`);
    }
  }
}