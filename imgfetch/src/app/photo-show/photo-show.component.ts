import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  photo: string = '';

  constructor(private image: ImagesService) {}

  ngOnInit(): void {
  }
  onClick(){
    this.image.getPhoto().subscribe((photo) => {
      this.photo = photo;      
    });
  }

}
