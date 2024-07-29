import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css'],
})
export class ReviewsPageComponent implements OnInit {
  
  
  ngOnInit(): void{
    const swiper = new Swiper('.swiper', {
      loop: true,
      grabCursor: true,
      modules: [Navigation, Pagination],
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
       clickable: true,
       dynamicBullets: true
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        0:{
          slidesPerView: 2
        },

        620:{
          slidesPerView: 1
        }
        ,
        1024:{
          slidesPerView: 5
        },

      }
    
    });
  }
}
