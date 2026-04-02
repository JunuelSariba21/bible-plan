import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reading-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reading-card.html',
  styleUrls: ['./reading-card.css']
})
export class ReadingCardComponent {

  @Input() day!: number;
  @Input() label!: string;

  // 🔥 REQUIRED (THIS FIXES YOUR ERROR)
  @Input() book!: string;
  @Input() start!: number;
  @Input() end!: number;

  @Output() read = new EventEmitter<any>();

  onRead() {
    this.read.emit({
      book: this.book,
      start: this.start,
      end: this.end,
      label: this.label
    });
  }
}