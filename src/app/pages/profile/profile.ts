import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent implements OnInit {
  // Real stats from our service
  totalChapters = 0;
  streak = 0;

  user = {
    name: 'Faith Walker',
    username: '@faith_dev',
    level: 'Disciple',
    joined: 'March 2026'
  };

  // Badge logic based on chapter counts
  badges = [
    { icon: '🌱', name: 'First Steps', desc: 'Read 1 Chapter', goal: 1 },
    { icon: '🔥', name: 'Dedicated', desc: 'Read 50 Chapters', goal: 50 },
    { icon: '👑', name: 'Scholar', desc: 'Read 100 Chapters', goal: 100 },
    { icon: '📜', name: 'Old Soul', desc: 'Finish Genesis', goal: 50 }
  ];

  constructor(private progressService: ProgressService) {}

  ngOnInit() {
    const stats = this.progressService.getStats();
    this.totalChapters = stats.totalChapters;
    this.streak = stats.streak;
  }

  isBadgeEarned(goal: number): boolean {
    return this.totalChapters >= goal;
  }
}