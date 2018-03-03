import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //inputs:["list"],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to the homepage";
  myString= "My name is DON";
  myBoolean=true;


  @Input()list;
@Input()message:string ;

@Output() onYell= new EventEmitter();

// define function in html with event and grad event 
// pass data from home componet to root componet ie custom event binding and output decorator
fireYellEvent(e){
  this.onYell.emit(e);

}


callMe(val){
  alert(val);
}


  constructor() { }

  ngOnInit() {
  }

}

//  <p>{{list.work}}</p> <app-home [work] ="work">Hello From Content</app-home>
