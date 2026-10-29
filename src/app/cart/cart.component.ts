import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public cartItemsShow : any[]=[];
  public grantTotal !: number;

  constructor(private cartservice_ : CartService){}

  ngOnInit(): void {
    this.cartservice_.getItemsService()
    .subscribe(res=>{
      this.cartItemsShow = res;
      this.grantTotal = this.cartservice_.getTotalPriceService();
    })
  }

  removeCartItem(prod : any){
    this.cartservice_.removeCartItemService(prod);
  }



}
