import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ICoordinate } from 'src/app/store/models/openweathermap';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectFavorite } from 'src/app/store/selectors/selectors';

export interface IFavoriteCity {
  coor: ICoordinate;
  style: string;
}

@Component({
  selector: 'app-favorite-container',
  templateUrl: './favorite-container.component.html',
  styleUrls: ['./favorite-container.component.scss'],
})
export class FavoriteContainerComponent implements OnInit {
  favoriteCity$: Observable<IFavoriteCity[]>;

  constructor(private store: Store<IAppStore>) {}

  ngOnInit(): void {
    this.favoriteCity$ = this.store.select(selectFavorite).pipe(
      map((value) =>
        value.map((coor, index) => {
          return { coor, style: `translateY(${index * 25}px)` };
        })
      )
    );
  }
}
