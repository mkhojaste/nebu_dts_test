import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.css']
})
export class ParentContainerComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    
  }
  CallFromParent () {
    alert("Hello , (called from child window)");
  }
  call() {
    
  }
}
