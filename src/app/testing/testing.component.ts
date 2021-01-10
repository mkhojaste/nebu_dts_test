import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {data} from '../../assets/data.js';
import { IPost } from '../_models/IPost.js';


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
  constructor() {
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
