import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemsListService : any[] = [];
  public itemsListSubject = new BehaviorSubject<any>([]);

  constructor() { }

  getItemsService(){
    return this.itemsListSubject.asObservable();
  }

  addToCartService(prod : any){
    this.cartItemsListService.push(prod);
    this.itemsListSubject.next(this.cartItemsListService);
    this.getTotalPriceService();
    console.log(this.cartItemsListService);
  }

  getTotalPriceService() : number{
    let grantTotalService=0;
    this.cartItemsListService.map((a:any)=>
    {
      grantTotalService +=a.total;
    })
    return grantTotalService;
  }

  removeCartItemService(prod:any){
    this.cartItemsListService.map((a:any,index:any)=>{
      if (prod.id==a.id){
        this.cartItemsListService.splice(index,1);
      }
      this.itemsListSubject.next(this.cartItemsListService);

    })   
  }

  emptyCartService(){
    this.cartItemsListService=[];
    this.itemsListSubject.next(this.cartItemsListService);
  }
}
