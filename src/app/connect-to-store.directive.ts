import { Directive, OnInit } from '@angular/core';
import { NgControl, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from './store/reducers';

import * as formActions from './store/actions/forms.actions';

@Directive({
  selector: '[appConnectToStore]'
})
export class ConnectToStoreDirective implements OnInit {
  constructor(
    private formGroup: FormGroupDirective,
    private store: Store<State>
  ) {}

  ngOnInit() {
    const abstractFormGroup = this.formGroup;
    const controls = abstractFormGroup.control.controls;
    console.log('abstractFormGroup', abstractFormGroup);
    console.log('controls', controls);

    abstractFormGroup.valueChanges.subscribe(value => {
      console.log('abstractFormGroup', abstractFormGroup);

      this.store.dispatch(
        formActions.formsUpdate({
          form: {
            // myTextField is for now hard coded...Later get ctrl names dynamicly
            myTextField: {
              touched: controls.myTextField.touched,
              dirty: controls.myTextField.dirty,
              status: controls.myTextField.status,
              errors: controls.myTextField.errors,
              value: controls.myTextField.value
            },
            myOtherTextField: {
              touched: controls.myOtherTextField.touched,
              dirty: controls.myOtherTextField.dirty,
              status: controls.myOtherTextField.status,
              errors: controls.myOtherTextField.errors,
              value: controls.myOtherTextField.value
            }
          }
        })
      );
    });

    if (controls) {
      this.store.dispatch(
        formActions.formsRegister({
          form: {
            // myTextField is for now hard coded...Later get ctrl names dynamicly
            myTextField: {
              touched: controls.myTextField.touched,
              dirty: controls.myTextField.dirty,
              status: controls.myTextField.status,
              errors: null,
              value: controls.myTextField.value
            },
            myOtherTextField: {
              touched: controls.myTextField.touched,
              dirty: controls.myTextField.dirty,
              status: controls.myTextField.status,
              errors: null,
              value: controls.myTextField.value
            }
          }
        })
      );
    }
  }
}
