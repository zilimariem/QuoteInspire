import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  
  id: any;
 quote: any;

  constructor( private act : ActivatedRoute, private _shared: SharedService,  private router : Router){}
// ActivatedRoute bech najam n5ou l url 


  ngOnInit(){
    this.id = this.act.snapshot.paramMap.get('id');
    
    this._shared.getById(this.id).subscribe({
      next: (res)=>{
        this.quote = res;
      },
      error: (err)=>{
        console.log(err);
      }
    })


  }


  save(){
    this._shared.update(this.id, this.quote).subscribe({
      next: (res)=>{
        console.log(res);
        this.router.navigate(['/list']);
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}


// ActivatedRoute bech najam n5ou l url