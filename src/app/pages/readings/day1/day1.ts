import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BibleService } from '../../../services/bible.service';
import { ProgressService } from '../../../services/progress.service';
import { NavbarComponent } from '../../../components/navbar/navbar';
import { FooterComponent } from '../../../components/footer/footer';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-day1',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './day1.html',
  styleUrls: ['./day1.css']
})
export class Day1Component implements OnInit {
  // Metadata for Day 1
  dayNum = 1;
  dayTitle = "The Beginning";
  readingRef = { book: 'genesis', start: 1, end: 3, label: 'Genesis 1–3' };
  
  verseData: any = null;
  loading = true;

  constructor(
    private bibleService: BibleService,
    private progressService: ProgressService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadScripture();
  }

  loadScripture() {
    this.loading = true;
    const requests = [];
    
    // Create requests for Genesis chapters 1, 2, and 3
    for (let i = this.readingRef.start; i <= this.readingRef.end; i++) {
      requests.push(
        this.bibleService.getVerse(`${this.readingRef.book}+${i}`).pipe(
          catchError(() => of(null))
        )
      );
    }

    forkJoin(requests).subscribe((results: any[]) => {
      this.verseData = {
        verses: results.flatMap((r: any) => r?.verses || [])
      };
      this.loading = false;
      this.cd.detectChanges(); // Ensures UI updates immediately
    });
  }

  completeDay() {
    for (let i = this.readingRef.start; i <= this.readingRef.end; i++) {
      this.progressService.markAsComplete(this.readingRef.book, i);
    }
    alert(`Day ${this.dayNum} marked as complete! Your progress has been saved.`);
  }
}