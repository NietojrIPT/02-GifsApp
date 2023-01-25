import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {


  @ViewChild('txtSearch') txtBuscar!: ElementRef<HTMLInputElement>;


  search(){
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
    
    this.txtBuscar.nativeElement.value = '';

}
}