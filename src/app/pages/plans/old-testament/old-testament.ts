import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'app-old-testament',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './old-testament.html',
  styleUrls: ['./old-testament.css']
})
export class OldTestamentComponent {

  plans = [
    { day: 1, label: 'Genesis 1–3' },
    { day: 2, label: 'Genesis 4–6' },
    { day: 3, label: 'Genesis 7–9' },
    { day: 4, label: 'Exodus 1–3' }
  ];
}