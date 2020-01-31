import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store/reducers';
import { tap, map } from 'rxjs/operators';

import * as FromSelectors from '../store/reducers';

export const someNiceErrorList = {
  maxlength: 'Dude! Max 3 chars here!',
  required: 'is Required..'
};

@Component({
  selector: 'app-fv-form-error',
  templateUrl: './fv-form-error.component.html',
  styleUrls: ['./fv-form-error.component.scss']
})
export class FvFormErrorComponent implements OnInit {
  @Input() gimmeAlsoTheCtrlName: string;

  constructor(private store: Store<State>) {}

  error;
  errorMessages = someNiceErrorList;

  ngOnInit() {
    // Dynamiclly select error state from error state selectors with ctrl name binding
    this.error = this.store.pipe(
      select(FromSelectors[`get${this.gimmeAlsoTheCtrlName}ErrorState`]),
      map(errors => errors && Object.keys(errors)[0])
    );
  }
}
