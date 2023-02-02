import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifRq, SearchGifRq } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private SERVICE_URL = 'http://api.giphy.com/v1/gifs';

  private apikey: string = '4h6gTefyKqyHd2qgTTBgpoDZGf9Qb8vT';

  private _history: string[] = [];

  public resultado: GifRq[] = [];

  get historial() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    // if (localStorage.getItem('history')) {
    //   this._history = JSON.parse(localStorage.getItem('history')!)
    // } 

    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.resultado = JSON.parse(localStorage.getItem('lastSearch')!) || [];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history))
    }

    const params = new HttpParams()
                .set('api_key', this.apikey)
                .set('limit', '10')
                .set('q', query);

    console.log(params.toString());
    
    
    this.http.get<SearchGifRq>(`${this.SERVICE_URL}/search`,{ params }).subscribe((response) => {
      console.log(response);
      this.resultado = response.data;
      localStorage.setItem('lastSearch' ,  JSON.stringify(this.resultado))
});

  }
}
