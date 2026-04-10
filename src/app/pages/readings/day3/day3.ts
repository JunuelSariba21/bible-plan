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
  selector: 'app-day3',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './day3.html',
  styleUrls: ['./day3.css'] // Using the same styles as Day 1/2
})
export class Day3Component implements OnInit {
  dayNum = 3;
  dayTitle = "The Great Flood";
  readingRef = { book: 'genesis', start: 7, end: 9, label: 'Genesis 7–9' };
  
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
      this.cd.detectChanges();
    });
  }

  completeDay() {
    for (let i = this.readingRef.start; i <= this.readingRef.end; i++) {
      this.progressService.markAsComplete(this.readingRef.book, i);
    }
    alert(`Day ${this.dayNum} progress saved! 🕊️`);
  }
}