import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3-ngfor',
  templateUrl: './component3-ngfor.component.html',
  styleUrls: ['./component3-ngfor.component.css']
})
export class Component3NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products =[
        {name:'laptop',id:100,price:24000},
        {name:'mobile',id:200,price:25000},
        {name:'tv',id:300,price:26000},
        {name:'soundbox',id:400,price:27000}

  ]

}
