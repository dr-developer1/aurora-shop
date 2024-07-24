import {Component, OnInit} from '@angular/core';
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {CommonModule, NgForOf, NgStyle} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    NgForOf,
    NgStyle,
    FaIconComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  heroItems = [
    {
      image: './assets/img/hero/hero-1.jpg',
      title: 'Summer Collection',
      subtitle: 'Fall - Winter Collections 2030',
      description: 'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.'
    },
    {
      image: './assets/img/hero/hero-2.jpg',
      title: 'Summer Collection',
      subtitle: 'Fall - Winter Collections 2030',
      description: 'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.'
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    smartSpeed: 7000,  // Add this line
    animateIn: 'fadeIn',  // Optional: for fade in effect
    animateOut: 'fadeOut'  // Optional: for fade out effect
  }
  faArrowRight = faArrowRightLong;
}
