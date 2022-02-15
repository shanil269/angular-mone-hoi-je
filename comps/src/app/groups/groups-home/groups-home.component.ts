import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-home',
  templateUrl: './groups-home.component.html',
  styleUrls: ['./groups-home.component.css']
})
export class GroupsHomeComponent implements OnInit {
  data = [
    { name: 'Shanil', age: '26', designation: 'CS engineer'},
    { name: 'Momin', age: '31', designation: 'Civil engineer'},
    { name: 'Shila', age: '29', designation: 'doctor'},
    { name: 'Taufiq', age: '42', designation: 'GM finance'},
  ];
  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'designation', label: 'Designation'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
