import { Component, OnInit } from '@angular/core';
import { Ratio } from 'src/app/common/ratio.enum';
import { ImageThumbnail } from 'src/app/image-thumbnail.model';

@Component({
  selector: 'automotive-content',
  templateUrl: './automotive-content.component.html',
  styleUrls: ['./automotive-content.component.css'],
})
export class AutomotiveContentComponent implements OnInit {
  photoListImages: ImageThumbnail[] = [
    {
      imageSrc:
        '../../../../assets/images/automotive/salon_prive_2021/bugatti_chiron_4.jpg',
      labelSrc:
        '../../../../assets/images/labels/automotive_salon_prive_2021_label.png',
      labelHoverSrc:
        '../../../../assets/images/labels/automotive_salon_prive_2021_label_hover.png',
      galleryUrl: '/gallery/automotive/salon_prive_2021',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
