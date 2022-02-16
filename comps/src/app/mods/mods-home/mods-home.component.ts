import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  isModalOpen = false;
  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue due to a phenomenon called Raleigh scattering.'},
    { title: 'What does a orange taste like?', content: 'The orange has a sweet-tart taste and is commonly peeled and eaten fresh, or squeezed for its juice.'},
    { title: 'What do you like doing most of the time?', content: 'Spending time with family and friends.'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onModalClick() {
    this.isModalOpen = !this.isModalOpen;
  }

}
