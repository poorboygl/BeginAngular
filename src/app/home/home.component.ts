import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name='Huy Nguyen';
  public age = 18;
  public vehicles = ['Toyota', 'Honda', 'Ford','BMW']
  constructor() { }

  ngOnInit(): void {
    

  }

}
