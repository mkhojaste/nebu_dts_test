import { Component, Input, OnInit } from '@angular/core';
import {data} from '../../assets/data.js';
import { IPost } from '../_models/IPost.js';

import {WindowRefService} from '../WindowRef.service';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  
  def: DataTables.ColumnSettings[];
  dtOptions: DataTables.Settings = {
    searching:false, 
    lengthChange:false, 
    responsive:true,
    info:true
  };
  posts: IPost[];
  constructor(private winRef: WindowRefService) {
    console.log("mmmm is:" );
    
    console.log( winRef.nativeWindow["mmmm"]());
    this.def=[
      {className:'dt-center'},
      {className:'dt-center'},
      {className:'dt-center'}];
    this.posts = data;
    this.dtOptions.columns =this.def;
    this.dtOptions.language = {

    };
    this.dtOptions.language.paginate = {
      next:'بعدی',
      first:'اولین',
      last:'آخرین',
      previous:'قبلی'
    }
    this.dtOptions.language.info= "تعداد کل ردیف‌ها: _TOTAL_  (_START_ از _END_)"
  }

  ngOnInit(): void {
    
  }

  callInIframe() {
    console.log(parent.window);
    
  }

}
