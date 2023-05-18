import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeohelperApiService } from '../../services/geohelper-api.service';
import { IAppStore } from 'src/app/store/models/stateModel';
import { Store } from '@ngrx/store';
import { selectAllCity } from 'src/app/store/selectors/selectors';
import { filter, startWith, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { AddMainCity } from 'src/app/store/actions/actions';


@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchCityComponent implements OnInit, OnDestroy {

  cityForm: FormGroup;
  searchCity$ = this.store.select(selectAllCity);
  subscription$: Subscription;

  constructor(
    private fb: FormBuilder,
    private geohelperApiService: GeohelperApiService,
    private store: Store<IAppStore>
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    const input$ = this.cityForm.valueChanges.pipe(
      filter(value => value.location.length > 1),
      startWith(''),
      debounceTime(1000),
      distinctUntilChanged(),
    )

    this.subscription$ = input$.subscribe(
      value => value.location ? this.geohelperApiService.getAllCity(value.location) : ''
    )
  }

  private createForm() {
    this.cityForm = this.fb.group({
      location: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.cityForm.invalid) {
      this.cityForm.markAllAsTouched()
      return;
    }

    this.store.dispatch(new AddMainCity(this.cityForm.value.location))
  }

  get _location() {
    console.log(this.cityForm.get('location')?.value)
    return this.cityForm.get('location');
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
