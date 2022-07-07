import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  mainNav: string = 'valuation';
  constructor(private router :ActivatedRoute) { }

  ngOnInit(): void {
    this.mainNav = window.location.pathname.split('/')[1];
  }

}
