import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'app-new-testament',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './new-testament.html',
  styleUrls: ['./new-testament.css']
})
export class NewTestamentComponent {

  plans = [
    { day: 1, label: 'Matthew 1–2' },
    { day: 2, label: 'Matthew 3–4' },
    { day: 3, label: 'Matthew 5–6' },
    { day: 4, label: 'Mark 1–2' }
  ];
}