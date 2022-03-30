import { Component } from "@angular/core";

@Component({
  selector:'app-property-card',
  //template:`<h1>started my card</h1>`,
  templateUrl:'property-card.component.html',
  //styles: ['h1{font-weight:normal;}']
  styleUrls: ['property-card.component.css']
})
export class PropertyCardComponent{
  Property:any = {
    "Id": 1,
    "Name": "House Single Page Angular",
    "Type": "House",
    "Price": 1200
  }
}
