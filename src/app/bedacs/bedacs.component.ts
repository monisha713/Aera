import { Component, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BedacsitemsComponent } from '../bedacsitems/bedacsitems.component';



@Component({
  selector: 'app-bedacs',
  templateUrl: './bedacs.component.html',
  styleUrls: ['./bedacs.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
  
})
export class BedacsComponent   {

  constructor(private router: Router) { }

  

    goToBedacsItems(){
      this.router.navigate(['/bditems']);
      console.log("inside gotopath func")
    
    }

  

  

}


