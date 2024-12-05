import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms'; 
import { ListComponent } from './list/list.component';
import { AjoutComponent } from './ajout/ajout.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';

import { Router } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormsModule , ListComponent , AjoutComponent , HttpClientModule, RouterLink , UpdateComponent,  CommonModule] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
} 
