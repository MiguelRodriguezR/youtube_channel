import {Component, OnInit} from '@angular/core';
import {YoutubeService} from "../../services/youtube.service";
import {Video, YoutubeResponse} from "../../models/youtube.models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos: Video[] = [];

  constructor(private youtubeService: YoutubeService) {
  }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.youtubeService.getVideos().subscribe(res => this.videos.push(...res), err => {
    }, () => {
      this.youtubeService.loading = false;
    });
  }

  get _service() {
    return this.youtubeService;
  }

}
