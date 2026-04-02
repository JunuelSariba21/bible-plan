import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BibleService } from '../../services/bible.service';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  plans: any[] = [];

  constructor(private bibleService: BibleService) {}

  ngOnInit() {
    this.plans = this.bibleService.get30DayPlan();
  }
}