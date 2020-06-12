import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../models/youtube.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  @Input() video: Video;

  constructor() {
  }

  ngOnInit(): void {
  }

  watchVideo() {
    Swal.fire({
      html: `
      <h4>${this.video.title}</h4>
      <hr>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/${this.video.resourceId.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    });
  }
}
