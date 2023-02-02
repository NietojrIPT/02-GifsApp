import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent  {

  get result(){
    return this.gifsService.resultado;
  }

  constructor(private gifsService: GifsService ) { }

  ngOnInit(): void {
  }

}
