import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RubriqueComponent} from '../rubrique/rubrique.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  
    {path:'r1',
    component:RubriqueComponent,
    data :{
      title:'Formation',
      lignes:[{dates:'2021-2023', descriptions:'BAC scientist'},
              {dates:'2021-2023', descriptions:'Diploma IT'}]}},

    {path:'r2',
    component:RubriqueComponent,
    data :{
      title:'Experiences',
      lignes:[{dates:'2015-2019', descriptions:'IT Baschelor'},
              {dates:'1994-2000', descriptions:'Engineer Telkom'}]}},
    
    {path:'r3',
    component:RubriqueComponent,
    data :{
      title:'Certifications',
      lignes:[{dates:'2021-2023', descriptions:'Language'},
              {dates:'2021-2023', descriptions:'Human ressources'}]}},
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
