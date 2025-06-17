import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'header-layout',
  standalone: true,
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css',
  imports: [MatIconModule]
})
export class HeaderLayoutComponent {}
