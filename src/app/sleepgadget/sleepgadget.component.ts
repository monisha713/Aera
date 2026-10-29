import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sleepgadget',
  templateUrl: './sleepgadget.component.html',
  styleUrls: ['./sleepgadget.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SleepgadgetComponent {

  constructor(private _router: Router) { }

  goToBedacsItems(){
    this._router.navigate(['/bedacsitems'])
    console.log("inside gotopath func")

  }

}
