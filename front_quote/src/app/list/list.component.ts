import { Component   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import { error } from 'node:console';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  quotes: any;


  constructor( public _shared: SharedService ) {} 

  ngOnInit(){

    this._shared.getAll().subscribe( 
      {
        next: (res)=>{
          this.quotes = res;
          console.log(this.quotes);
        },
        error: (err)=>{
          console.log(err);
        }
      }
      
    )
  }


  supp(id :any){

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._shared.delete(id).subscribe({
          next:(res)=>{
            console.log(res);
            // window.location.reload(); //y relodi site bech l card tetfas5 ma8er man3mal loading manuel ama tari9 mouch bahia
            this.ngOnInit();
          },
          error: (err)=>{
            console.log(err);
          }
        })
      }
    });



 
  }

  


}
