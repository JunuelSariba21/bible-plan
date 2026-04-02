import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor(private http: HttpClient) {}


  getVerse(reference: string) {
    const url = `https://bible-api.com/${reference}`;
    return this.http.get(url);
  }


  get30DayPlan() {
  return [
    { day: 1, book: 'genesis', start: 1, end: 3, label: 'Genesis 1–3' },
    { day: 2, book: 'genesis', start: 4, end: 6, label: 'Genesis 4–6' },
    { day: 3, book: 'genesis', start: 7, end: 9, label: 'Genesis 7–9' },
    { day: 4, book: 'genesis', start: 10, end: 12, label: 'Genesis 10–12' },
    { day: 5, book: 'genesis', start: 13, end: 15, label: 'Genesis 13–15' },
    { day: 6, book: 'genesis', start: 16, end: 18, label: 'Genesis 16–18' },
    { day: 7, book: 'genesis', start: 19, end: 21, label: 'Genesis 19–21' },
    { day: 8, book: 'genesis', start: 22, end: 24, label: 'Genesis 22–24' },
    { day: 9, book: 'genesis', start: 25, end: 27, label: 'Genesis 25–27' },
    { day: 10, book: 'genesis', start: 28, end: 30, label: 'Genesis 28–30' },

    { day: 11, book: 'genesis', start: 31, end: 33, label: 'Genesis 31–33' },
    { day: 12, book: 'genesis', start: 34, end: 36, label: 'Genesis 34–36' },
    { day: 13, book: 'genesis', start: 37, end: 39, label: 'Genesis 37–39' },
    { day: 14, book: 'genesis', start: 40, end: 42, label: 'Genesis 40–42' },
    { day: 15, book: 'genesis', start: 43, end: 45, label: 'Genesis 43–45' },
    { day: 16, book: 'genesis', start: 46, end: 48, label: 'Genesis 46–48' },
    { day: 17, book: 'genesis', start: 49, end: 50, label: 'Genesis 49–50' },

    { day: 18, book: 'exodus', start: 1, end: 3, label: 'Exodus 1–3' },
    { day: 19, book: 'exodus', start: 4, end: 6, label: 'Exodus 4–6' },
    { day: 20, book: 'exodus', start: 7, end: 9, label: 'Exodus 7–9' },

    { day: 21, book: 'exodus', start: 10, end: 12, label: 'Exodus 10–12' },
    { day: 22, book: 'exodus', start: 13, end: 15, label: 'Exodus 13–15' },
    { day: 23, book: 'exodus', start: 16, end: 18, label: 'Exodus 16–18' },
    { day: 24, book: 'exodus', start: 19, end: 21, label: 'Exodus 19–21' },
    { day: 25, book: 'exodus', start: 22, end: 24, label: 'Exodus 22–24' },
    { day: 26, book: 'exodus', start: 25, end: 27, label: 'Exodus 25–27' },
    { day: 27, book: 'exodus', start: 28, end: 30, label: 'Exodus 28–30' },
    { day: 28, book: 'exodus', start: 31, end: 33, label: 'Exodus 31–33' },
    { day: 29, book: 'exodus', start: 34, end: 36, label: 'Exodus 34–36' },
    { day: 30, book: 'exodus', start: 37, end: 40, label: 'Exodus 37–40' }
  ];
}
}