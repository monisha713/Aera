import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { Bedacc } from '../model/bedacc';
import { CartService } from '../service/cart.service';
// import { BEDACC } from '../bedacc-db';


@Component({
  selector: 'app-bedacsitems',
  templateUrl: './bedacsitems.component.html',
  styleUrls: ['./bedacsitems.component.css'], 
  encapsulation: ViewEncapsulation.ShadowDom

})
export class BedacsitemsComponent implements OnInit{

  // bedacc_ = BEDACC ;

   ba : any = [

    {        
        id: 1,
        name:"Mattress",
        image:"assets/images/mattress.jpg",
        price:600
    },
    {
        id: 2,
        name:"Pillows",
        image:"assets/images/pillows.jpg",
        price:200
    },
    {
        id: 3,
        name:"Mattress topper",
        image:"assets/images/mattress_topper.jpg",
        price:250
    },

    {
        id: 4,
        name:"Ruffles",
        image:"assets/images/ruffles.jpg",
        price:100
    },
    {
        id: 5,
        name:"Duvet",
        image:"assets/images/duvet.jpg",
        price:100
    },
    {
        id: 6,
        name:"Decorative pillows",
        image:"assets/images/dec_pillows.jpg",
        price:100
    },
   
];

  constructor(private cartservice_ : CartService) { }

  ngOnInit(): void {
    this.ba.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price});
    })
  }
  // toggle = true;
  // status = 'Add to cart';
    addItemCart(baitems : any){
      console.log( "is added to cart")
      // this.toggle = !this.toggle;
      // this.status = this.toggle ? 'Add to cart' : 'Added to cart';
      this.cartservice_.addToCartService(baitems);
    }
    
  //   enableDisableRule() {
  //     this.toggle = !this.toggle;
  //     this.status = this.toggle ? 'Enable' : 'Disable';
  // }
}
