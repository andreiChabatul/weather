import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeohelperApiService } from '../../services/geohelper-api.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent {

  cityForm: FormGroup;


  options = ['fd', 'fdf', 'fd', 'fd', 'fd']

  constructor(private fb: FormBuilder, private geohelperApiService: GeohelperApiService) {
    this.createForm();
    this.geohelperApiService.getAllCity('Ми');

  }

  private createForm() {
    this.cityForm = this.fb.group({
      location: ['', [Validators.required]],
    });
  }

  get _location() {
    return this.cityForm.get('location');
  }

}
