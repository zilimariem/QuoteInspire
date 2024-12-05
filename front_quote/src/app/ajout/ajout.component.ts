import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';

import { Router } from '@angular/router'; 
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [FormsModule,  CommonModule],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {
  constructor( private  _shared: SharedService, private router : Router ) { }
  quote = {
    name: '',
    quote: '',
    image: '',
    color: ''
    
  }
  

  ajout(){

   


    this._shared.create( this.quote ).subscribe(
      {
        
        next: (res)=>{
         this.quote = {
              name: '',
              quote: '',
              image: '',
              color: ''
              
          }

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });

          this.router.navigate(['/list']);
        },
        error: (err) => console.error('Error:', err),
      }
    )
  }


  
}


