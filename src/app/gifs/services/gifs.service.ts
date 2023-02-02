import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifRq, SearchGifRq } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private apikey: string = '4h6gTefyKqyHd2qgTTBgpoDZGf9Qb8vT';

  private _history: string[] = [];

  public resultado: GifRq[] = [];

  get historial() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {}

  searchGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);
    }

this.http.get<SearchGifRq>(`http://api.giphy.com/v1/gifs/search?api_key=4h6gTefyKqyHd2qgTTBgpoDZGf9Qb8vT&q=${ query }&limit=10`).subscribe((response) => {
console.log(response);
this.resultado = response.data;
});

  }
}
