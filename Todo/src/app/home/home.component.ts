import { Component, OnInit, Input } from '@angular/core';

@Component({
  //inputs:["list"],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to the homepage";
  myString = "My name is DON";
  myBoolean=true;


  @Input() list : any;
@Input() message :string ;

callMe(val){
  alert(val);
}


  constructor() { }

  ngOnInit() {
  }

}

//  <p>{{list.work}}</p> <app-home [work] ="work">Hello From Content</app-home>
