import { Routes } from '@angular/router';




import { ListComponent } from './list/list.component';
import { AjoutComponent } from './ajout/ajout.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';



export const routes: Routes = [

    {path : 'list' , component : ListComponent},
    {path: 'ajout' , component : AjoutComponent},
    {path: 'home' , component : HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'update/:id', component: UpdateComponent },


    {path: '**' , component : NotfoundComponent}

];        
