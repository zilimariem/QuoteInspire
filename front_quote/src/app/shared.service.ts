import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  url='http://127.0.0.1:3000/card/';

  constructor( private http: HttpClient ) { }
  quotes : any = [
   {
    name: '',
    quote: '',
    image: '',
    color: ''
   }

  ] ;


 


  create( h: any ){
    return this.http.post( this.url + 'addC' , h ) ;
  }

  getAll(){
    return this.http.get( this.url + 'getC' ); //get te9bel kan lien
  }


  delete(id: any){
    return this.http.delete(this.url + 'deleteC/' + id);
  }


  getById(id: any){
    return this.http.get( this.url + 'getbyId/' + id );
  }


  update(id: any, data: any){
     return this.http.put( this.url+'update/' + id ,data );
  }
}
