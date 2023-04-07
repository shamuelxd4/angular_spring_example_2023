import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// add to material
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  exports:[
    MatTableModule,
    MatCardModule
  ],
})
export class AppMaterialModule { }
