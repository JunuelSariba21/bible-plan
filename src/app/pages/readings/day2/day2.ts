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
  selector: 'app-day2',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './day2.html',
  styleUrls: ['./day2.css']
})
export class Day2Component implements OnInit {
  dayNum = 2;
  dayTitle = "The Fall and the Promise";
  readingRef = { book: 'genesis', start: 4, end: 6, label: 'Genesis 4–6' };
  
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
    alert(`Day ${this.dayNum} completed! Keep going!`);
  }
}