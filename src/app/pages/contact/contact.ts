import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent,FooterComponent,RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {}
