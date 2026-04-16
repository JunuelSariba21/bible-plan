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
  selector: 'app-day7',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './day9.html',
  styleUrls: ['./day9.css']
})
export class Day9 implements OnInit {
  dayNum = 9;
  dayTitle = "Isaac and Ishmael";
  readingRef = { book: 'genesis', start: 25, end: 27, label: 'Genesis 25-27' };
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