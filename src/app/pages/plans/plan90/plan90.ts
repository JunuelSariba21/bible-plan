import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'app-plan90',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './plan90.html',
  styleUrls: ['./plan90.css']
})
export class Plan90Component {

  plans = [
    { day: 1, label: 'Genesis 1–2' },
    { day: 2, label: 'Genesis 3–4' },
    { day: 3, label: 'Genesis 5–6' },
    { day: 4, label: 'Genesis 7–8' },
    { day: 5, label: 'Genesis 9–10' }
  ];
}