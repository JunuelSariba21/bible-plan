import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibleService } from '../../../services/bible.service';
import { NavbarComponent } from '../../../components/navbar/navbar';
import { FooterComponent } from '../../../components/footer/footer';
import { ReadingCardComponent } from '../../../components/reading-card/reading-card';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-plan30',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, ReadingCardComponent],
  templateUrl: './plan30.html',
  styleUrls: ['./plan30.css']
})

export class Plan30Component {
  
  plans: any[] = [];
  verseData: any;
  loading = false;
  
  constructor(private bibleService: BibleService,private cd: ChangeDetectorRef) {}
  
  
  ngOnInit() {
    this.plans = this.bibleService.get30DayPlan();
  }

  loadVerse(data: { book: string; start: number; end: number; label: string }) {
  this.loading = true;
  this.verseData = null;

  const requests = [];

  for (let i = data.start; i <= data.end; i++) {
    const ref = `${data.book}+${i}`;
    console.log("API CALL:", ref);

    requests.push(
      this.bibleService.getVerse(ref).pipe(
        catchError(err => {
          console.error("FAILED REQUEST:", ref);
          return of(null); // 🔥 prevents forkJoin from breaking
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
  },
  error: (err) => {
    console.error(err);
    this.loading = false;
  }
});
}
}