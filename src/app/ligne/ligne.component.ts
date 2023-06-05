import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent {
  @Input()dates:string;
  @Input()description:string;
  constructor(){
    this.dates = "Present";
    this.description = "unknown";
  }


}
