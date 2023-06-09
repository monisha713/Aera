import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sleepwear',
  templateUrl: './sleepwear.component.html',
  styleUrls: ['./sleepwear.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SleepwearComponent {
  constructor(private _router: Router) { }

  goToBedacsItems(){
    this._router.navigate(['/bditems'])
    console.log("inside gotopath func")

  }

}
