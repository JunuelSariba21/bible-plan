import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibleService } from '../../../services/bible.service';
import { ProgressService } from '../../../services/progress.service';
import { NavbarComponent } from '../../../components/navbar/navbar';
import { FooterComponent } from '../../../components/footer/footer';
import { ReadingCardComponent } from '../../../components/reading-card/reading-card';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-new-testament',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, ReadingCardComponent],
  templateUrl: './new-testament.html',
  styleUrls: ['./new-testament.css']
})
export class NewTestamentComponent implements OnInit {
  plans: any[] = [];
  verseData: any = null;
  loading = false;
  currentReadingData: any = null;

  constructor(
    private bibleService: BibleService,
    private progressService: ProgressService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.plans = this.bibleService.getNewTestamentPlan();
  }

  loadVerse(data: any) {
    this.loading = true;
    this.verseData = null;
    this.currentReadingData = data;

    const requests = [];
    for (let i = data.start; i <= data.end; i++) {
      requests.push(
        this.bibleService.getVerse(`${data.book}+${i}`).pipe(catchError(() => of(null)))
      );
    }

    forkJoin(requests).subscribe((results: any[]) => {
      this.verseData = {
        reference: data.label,
        verses: results.flatMap(r => r?.verses || [])
      };
      this.loading = false;
      this.cd.detectChanges();
    });
  }

  markProgress() {
    if (this.currentReadingData) {
      for (let i = this.currentReadingData.start; i <= this.currentReadingData.end; i++) {
        this.progressService.markAsComplete(this.currentReadingData.book, i);
      }
      alert('New Testament progress updated! ✝️');
    }
  }
}