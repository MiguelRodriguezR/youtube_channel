import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PLAYLIST_ID, YOUTUBE_API_KEY} from '../shared/tokens';
import {YoutubeResponse} from '../models/youtube.models';
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  endpoint = 'https://www.googleapis.com/youtube/v3/';
  nextPageToken = '';
  loading = false;

  constructor(private http: HttpClient) {
  }

  getVideos() {
    this.loading = true;
    const url = `${this.endpoint}playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', PLAYLIST_ID)
      .set('pageToken', this.nextPageToken)
      .set('key', YOUTUBE_API_KEY);
    return this.http.get<YoutubeResponse>(url, {params}).pipe(
      map( res => {
        this.nextPageToken = res.nextPageToken;
        console.log(this.nextPageToken);
        return res.items.map( video => video.snippet);
      })
    );
  }
}
