import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  public noItems :number = 0;

  constructor(private cartservice_ : CartService){}

  ngOnInit(): void {
    this.cartservice_.getItemsService()
    .subscribe(res =>{this.noItems = res.length;}   )
  }
 

  

}
