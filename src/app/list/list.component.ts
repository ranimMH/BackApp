import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //   myFunc() {
  //     console.log('ok');
  //     this.router.navigate(['../organisation/2099/15']);
  // }
  myFunc() {
    console.log('ok');
    this.router.navigate(['/organisation'], { queryParams: { params: JSON.stringify({ args: ['2099', 15] }) } });
  }
}
