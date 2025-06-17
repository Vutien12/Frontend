import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './shared/Login/login.component';
import { ShopComponent } from "./shared/Shop/shop.component";
import { ProductDetailComponent } from './shared/Detailproduct/detailproduct.component';
import { BlogComponent } from './shared/Blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_basic_project';
}
