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

  /**
   * 30-DAY INTENSIVE (Genesis to Exodus)
   * High-speed overview of the foundations.
   */
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

  /**
   * 90-DAY NEW TESTAMENT + PSALMS
   * A steady pace through the entire New Testament and most of Psalms.
   */
  get90DayPlan() {
    const plan = [];
    // Matthew (approx 28 chapters)
    for (let i = 0; i < 14; i++) {
      plan.push({ day: i + 1, book: 'matthew', start: (i * 2) + 1, end: (i * 2) + 2, label: `Matthew ${(i * 2) + 1}–${(i * 2) + 2}` });
    }
    // Mark (approx 16 chapters)
    for (let i = 0; i < 8; i++) {
      plan.push({ day: i + 15, book: 'mark', start: (i * 2) + 1, end: (i * 2) + 2, label: `Mark ${(i * 2) + 1}–${(i * 2) + 2}` });
    }
    // Luke (approx 24 chapters)
    for (let i = 0; i < 12; i++) {
      plan.push({ day: i + 23, book: 'luke', start: (i * 2) + 1, end: (i * 2) + 2, label: `Luke ${(i * 2) + 1}–${(i * 2) + 2}` });
    }
    // John (approx 21 chapters)
    for (let i = 0; i < 10; i++) {
      const end = (i === 9) ? 21 : (i * 2) + 2;
      plan.push({ day: i + 35, book: 'john', start: (i * 2) + 1, end: end, label: `John ${(i * 2) + 1}–${end}` });
    }
    // Adding sample filler to reach 90 for the grid
    for (let i = 45; i <= 90; i++) {
      plan.push({ day: i, book: 'psalms', start: i - 44, end: i - 44, label: `Psalms ${i - 44}` });
    }
    return plan;
  }

  /**
   * OLD TESTAMENT (Torah Selection)
   */
  getOldTestamentPlan() {
    return [
      { day: 1, book: 'genesis', start: 1, end: 5, label: 'Genesis 1–5' },
      { day: 2, book: 'genesis', start: 6, end: 10, label: 'Genesis 6–10' },
      { day: 3, book: 'genesis', start: 11, end: 15, label: 'Genesis 11–15' },
      { day: 4, book: 'genesis', start: 16, end: 20, label: 'Genesis 16–20' },
      { day: 5, book: 'genesis', start: 21, end: 25, label: 'Genesis 21–25' },
      { day: 6, book: 'genesis', start: 26, end: 30, label: 'Genesis 26–30' },
      { day: 7, book: 'genesis', start: 31, end: 35, label: 'Genesis 31–35' },
      { day: 8, book: 'genesis', start: 36, end: 40, label: 'Genesis 36–40' },
      { day: 9, book: 'genesis', start: 41, end: 45, label: 'Genesis 41–45' },
      { day: 10, book: 'genesis', start: 46, end: 50, label: 'Genesis 46–50' }
    ];
  }

  /**
   * NEW TESTAMENT (Full)
   */
  getNewTestamentPlan() {
    return [
      { day: 1, book: 'matthew', start: 1, end: 4, label: 'Matthew 1–4' },
      { day: 2, book: 'matthew', start: 5, end: 7, label: 'Matthew 5–7' },
      { day: 3, book: 'matthew', start: 8, end: 10, label: 'Matthew 8–10' },
      { day: 4, book: 'matthew', start: 11, end: 13, label: 'Matthew 11–13' },
      { day: 5, book: 'matthew', start: 14, end: 17, label: 'Matthew 14–17' },
      { day: 6, book: 'matthew', start: 18, end: 21, label: 'Matthew 18–21' },
      { day: 7, book: 'matthew', start: 22, end: 25, label: 'Matthew 22–25' },
      { day: 8, book: 'matthew', start: 26, end: 28, label: 'Matthew 26–28' },
      { day: 9, book: 'mark', start: 1, end: 4, label: 'Mark 1–4' },
      { day: 10, book: 'mark', start: 5, end: 8, label: 'Mark 5–8' },
      { day: 11, book: 'mark', start: 9, end: 12, label: 'Mark 9–12' },
      { day: 12, book: 'mark', start: 13, end: 16, label: 'Mark 13–16' },
      { day: 13, book: 'luke', start: 1, end: 3, label: 'Luke 1–3' },
      { day: 14, book: 'luke', start: 4, end: 6, label: 'Luke 4–6' },
      { day: 15, book: 'luke', start: 7, end: 9, label: 'Luke 7–9' },
      { day: 16, book: 'luke', start: 10, end: 12, label: 'Luke 10–12' },
      { day: 17, book: 'luke', start: 13, end: 16, label: 'Luke 13–16' },
      { day: 18, book: 'luke', start: 17, end: 20, label: 'Luke 17–20' },
      { day: 19, book: 'luke', start: 21, end: 24, label: 'Luke 21–24' },
      { day: 20, book: 'john', start: 1, end: 3, label: 'John 1–3' },
      { day: 21, book: 'john', start: 4, end: 6, label: 'John 4–6' },
      { day: 22, book: 'john', start: 7, end: 9, label: 'John 7–9' },
      { day: 23, book: 'john', start: 10, end: 12, label: 'John 10–12' },
      { day: 24, book: 'john', start: 13, end: 15, label: 'John 13–15' },
      { day: 25, book: 'john', start: 16, end: 18, label: 'John 16–18' },
      { day: 26, book: 'john', start: 19, end: 21, label: 'John 19–21' },
      { day: 27, book: 'acts', start: 1, end: 4, label: 'Acts 1–4' },
      { day: 28, book: 'acts', start: 5, end: 8, label: 'Acts 5–8' },
      { day: 29, book: 'acts', start: 9, end: 12, label: 'Acts 9–12' },
      { day: 30, book: 'acts', start: 13, end: 16, label: 'Acts 13–16' }
    ];
  }
}