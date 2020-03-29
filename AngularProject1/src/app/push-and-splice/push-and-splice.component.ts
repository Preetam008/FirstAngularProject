import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-and-splice',
  templateUrl: './push-and-splice.component.html',
  styleUrls: ['./push-and-splice.component.css']
})
export class PushAndSpliceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 Users=[];

 onCreate(uname){
   this.Users.push({
    name:uname.value
   });
 }
 onRemove(uname){
  this.Users.splice(this.Users.length-1)
  
}
}
