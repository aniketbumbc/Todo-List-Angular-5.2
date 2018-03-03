import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {DirectoryComponent} from './directory/directory.component';
import {HomeComponent} from './home/home.component';

const routes:Routes =[
  { path : 'Directory' , component: DirectoryComponent},
  { path : 'Home' , component: HomeComponent},
  { path : '' , component: HomeComponent}
];




@NgModule({
  imports: [
    RouterModule.forRoot(routes)
   ],
 // declarations: []

 exports:[RouterModule]
})
export class AppRoutingModule { }
