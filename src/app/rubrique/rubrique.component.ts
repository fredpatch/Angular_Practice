import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-rubrique',
  templateUrl: './rubrique.component.html',
  styleUrls: ['./rubrique.component.css']
})
export class RubriqueComponent implements OnInit{
  @Input()title:string;
  @Input()lignes: {dates:string, descriptions:string}[];
  constructor(private routes:ActivatedRoute) {
    this.title = "Untitled";
    this.lignes = [
      {dates:"To Fill", descriptions:"Unknown"}];
  }
  ngOnInit(): void {
      this.lignes = this.routes.snapshot.data['lignes']
      this.title = this.routes.snapshot.data['title']
  }
}
