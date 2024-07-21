import { Component } from '@angular/core';
import {OffcanvasComponent} from "./offcanvas/offcanvas.component";
import {HeaderComponent} from "./header/header.component";
import {HeroComponent} from "./hero/hero.component";
import {BannerComponent} from "./banner/banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    OffcanvasComponent,
    HeaderComponent,
    HeroComponent,
    BannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
