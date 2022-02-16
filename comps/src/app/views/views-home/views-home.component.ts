import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: '20', label: '# of Users'},
    { value: '50', label: 'Revenue'},
    { value: '200', label: 'Review'},
  ];

  items = [
    {
      image: 'assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch aint it?',
    },
    {
      image: 'assets/images/dresser.jpeg',
      title: 'CoucDresserh',
      description: 'This dresser can hold many things',
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
