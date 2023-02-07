import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: '@nasture',
      content: 'I saw this neat tree today.'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: '@mountainlover',
      content: 'Here is a picture of a sonwy mountain'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: '@biking122',
      content: 'I did some biking today.'
    }
    //just testing.
    // just 2 acc ssh testing
  ];
}
