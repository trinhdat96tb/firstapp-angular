import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  groups: any[] = [];
  user: any = {};

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.demoService.getData({ key: '87a73fb5-4645-4989-b483-3afecda315f1',lookup: 'builtwith.com' }).subscribe(result => {
      this.groups = result.groups;
    });
  }
  editUser(user, i){
    this.user = _.clone(user);
    this.user.index = i;
  }

  btn(type){
    if(type === 'update'){
      this.demoService.editUser(this.user).subscribe(result => {
        alert('edit successful');
        this.groups[this.user.index];
      })
    }
  }

}
