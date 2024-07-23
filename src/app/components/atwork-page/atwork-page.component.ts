import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-atwork-page',
  templateUrl: './atwork-page.component.html',
  styleUrls: ['./atwork-page.component.css']
})
export class AtworkPageComponent implements OnInit {
 yourMany = 0
 inputRange1: any = 5000
 inputRange2 = 5



 displayValue: string = ""

   resultFunction() {
    this.yourMany = (this.inputRange1 * (this.inputRange2 / 100) )
  
    if (+this.inputRange1 > 9000) {
      this.inputRange1 = 9000
      this.yourMany = 9000 * (this.inputRange2 / 100)
    }
 
    if (+this.inputRange1 < 5000) {
      this.inputRange1 = 5000
      this.yourMany = 5000 * (this.inputRange2 / 100)
    }


    if (+this.inputRange2 > 20) {
      this.inputRange2 = 20
      this.yourMany = this.inputRange1 * (20 / 100)
    }

    if (+this.inputRange2 < 5) {
      this.inputRange2 = 5
      this.yourMany = this.inputRange1 * (5 / 100)
    }

   }



   ngOnInit(): void {
     if (+this.inputRange1 > 9000) {
       this.inputRange1 = 9000
     }
   }

}
