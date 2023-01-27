import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private apikey: string = '4h6gTefyKqyHd2qgTTBgpoDZGf9Qb8vT';

  private _history: string[] = [];

  get historial() {
    return [...this._history];
  }

  searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
    }

    this._history = this._history.slice(0, 10);

    console.log(this._history);
  }

  constructor() {}
}
