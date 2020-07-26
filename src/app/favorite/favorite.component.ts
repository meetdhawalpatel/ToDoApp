import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input("isFav") public isFavorite : boolean;
  @Output("toggleFav") eventEmitter = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleclicked(){
    this.isFavorite = !this.isFavorite;
    this.eventEmitter.emit(this.isFavorite);
  }

}
