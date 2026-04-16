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
  selector: 'app-day6',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './day6.html',
  styleUrls: ['./day6.css']
})
export class Day6Component implements OnInit {
  dayNum = 6;
  dayTitle = "Isaac and Ishmael";
  readingRef = { book: 'genesis', start: 16, end: 18, label: 'Genesis 16–18' };
  verseData: any = null;
  loading = true;

  constructor(private bibleService: BibleService, private progressService: ProgressService, private cd: ChangeDetectorRef) {}

  ngOnInit() { this.loadScripture(); }

  loadScripture() {
    this.loading = true;
    const requests = [];
    for (let i = this.readingRef.start; i <= this.readingRef.end; i++) {
      requests.push(this.bibleService.getVerse(`${this.readingRef.book}+${i}`).pipe(catchError(() => of(null))));
    }
    forkJoin(requests).subscribe((results: any[]) => {
      this.verseData = { verses: results.flatMap((r: any) => r?.verses || []) };
      this.loading = false;
      this.cd.detectChanges();
    });
  }

  completeDay() {
    for (let i = this.readingRef.start; i <= this.readingRef.end; i++) {
      this.progressService.markAsComplete(this.readingRef.book, i);
    }
    alert(`Day ${this.dayNum} complete!`);
  }
}